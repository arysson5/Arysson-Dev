import { describe, expect, it, vi } from 'vitest'
import { askAbout, FREE_QUESTION_LIMIT, systemPrompt } from './askAbout'

describe('chat sobre o Arysson', () => {
  it('manda só o trecho da pergunta e o material inteiro quando ela é ampla', () => {
    const formacao = systemPrompt('Qual a formação acadêmica?')
    expect(formacao).toContain('https://github.com/arysson5')
    expect(formacao).toContain('UNIP')
    expect(formacao).not.toContain('Jasper Report')
    expect(formacao).not.toContain('Hannover Store')
    expect(formacao).toContain('isso não está no material')

    const tudo = systemPrompt('Me conta o currículo todo')
    expect(tudo).toContain('Jasper Report')
    expect(tudo).toContain('Hannover Store')
    expect(formacao.length).toBeLessThan(tudo.length)
  })

  it('não chama o Google sem a chave gratuita', async () => {
    const fetchMock = vi.fn()
    const answer = await askAbout([], 'Qual a stack?', { key: '', fetch: fetchMock })
    expect(answer).toContain('Google AI Studio')
    expect(fetchMock).not.toHaveBeenCalled()
  })

  it('para no limite gratuito e, dentro dele, lê o texto do Gemini', async () => {
    const blocked = await askAbout([], 'Oi', { key: 'livre', asked: FREE_QUESTION_LIMIT })
    expect(blocked).toContain('12 perguntas')

    const fetchMock = vi.fn().mockResolvedValue({
      ok: true,
      json: async () => ({ candidates: [{ content: { parts: [{ text: 'PHP e Laravel.' }] } }] }),
    })
    const answer = await askAbout([], 'Qual a stack?', { key: 'livre', fetch: fetchMock, asked: 0 })
    expect(answer).toBe('PHP e Laravel.')
    expect(String(fetchMock.mock.calls[0][0])).toContain('gemini-flash-lite-latest')
    expect(String(fetchMock.mock.calls[0][0])).toContain('key=livre')

    const body = JSON.parse(String(fetchMock.mock.calls[0][1].body)) as {
      contents: { parts: { text: string }[] }[]
      systemInstruction: { parts: { text: string }[] }
    }
    expect(body.systemInstruction.parts[0].text).toContain('Laravel')
    expect(body.systemInstruction.parts[0].text).not.toContain('ETEC')
    expect(body.contents).toHaveLength(1)

    const longHistory = Array.from({ length: 6 }, (_, index) => ({
      role: (index % 2 === 0 ? 'user' : 'model') as 'user' | 'model',
      text: `turno-${index}`,
    }))
    await askAbout(longHistory, 'Qual a stack?', { key: 'livre', fetch: fetchMock, asked: 0 })
    const trimmed = JSON.parse(String(fetchMock.mock.calls[1][1].body)) as {
      contents: { parts: { text: string }[] }[]
    }
    const sent = trimmed.contents.map((item) => item.parts[0].text)
    expect(sent).not.toContain('turno-0')
    expect(sent).toContain('turno-5')
  })
})
