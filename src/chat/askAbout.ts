import { contextFor } from '../data/aboutContext'

/** Modelo do plano gratuito do Google AI Studio. A chave fica em VITE_GEMINI_API_KEY. */
export const GEMINI_MODEL = 'gemini-flash-lite-latest'
export const FREE_QUESTION_LIMIT = 12

export type ChatTurn = { role: 'user' | 'model'; text: string }

const missingKey = 'A chave gratuita do Google AI Studio ainda não está configurada.'
const limitReached = 'Fechei as 12 perguntas desta visita. Me chama no WhatsApp que a conversa continua.'

const historyTurns = 4

export function systemPrompt(question = '') {
  return [
    'Você é o Arysson Menezes e responde perguntas como se tivesse em uma reunião comercial tentando se vender , use de estrategias de persuasão e se inspire em personalidades boa de convencer os outros como patrick jane e harvey specter. cada resposta tem que atrair cada vez mais o usuario a te contratar em português, em no máximo 4 frases.',
    'Use somente o contexto abaixo. Se a resposta não estiver nele, diga que isso não está no material.',
    'Não invente cargo, data, número ou projeto.',
    '',
    contextFor(question),
  ].join('\n')
}

export async function askAbout(
  history: ChatTurn[],
  question: string,
  options: { key?: string; fetch?: typeof fetch; asked?: number } = {},
): Promise<string> {
  const text = question.trim()
  if (!text) return 'Manda a pergunta.'
  if ((options.asked ?? 0) >= FREE_QUESTION_LIMIT) return limitReached

  const key = options.key ?? import.meta.env.VITE_GEMINI_API_KEY
  if (!key) return missingKey

  const contents = [
    ...history.slice(-historyTurns).map((turn) => ({ role: turn.role, parts: [{ text: turn.text }] })),
    { role: 'user', parts: [{ text }] },
  ]
  const response = await (options.fetch ?? fetch)(
    `https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:generateContent?key=${key}`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        systemInstruction: { parts: [{ text: systemPrompt(text) }] },
        contents,
        generationConfig: { maxOutputTokens: 280, temperature: 0.3 },
      }),
    },
  )
  if (!response.ok) return 'Travei agora. Manda de novo em instantes.'

  const data = (await response.json()) as {
    candidates?: { content?: { parts?: { text?: string }[] } }[]
  }
  const answer = data.candidates?.[0]?.content?.parts?.map((part) => part.text ?? '').join('').trim()
  return answer || 'Não fechei a resposta. Tenta de novo.'
}
