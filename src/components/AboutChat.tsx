import { useEffect, useRef, useState, type FormEvent } from 'react'
import { MessageCircle, X } from 'lucide-react'
import { askAbout, FREE_QUESTION_LIMIT, type ChatTurn } from '../chat/askAbout'

export function AboutChat() {
  const [open, setOpen] = useState(false)
  const [draft, setDraft] = useState('')
  const [pending, setPending] = useState(false)
  const [turns, setTurns] = useState<ChatTurn[]>([])
  const listRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const list = listRef.current
    if (!list) return
    list.scrollTop = list.scrollHeight
  }, [turns, pending, open])

  async function submit(event: FormEvent) {
    event.preventDefault()
    const question = draft.trim()
    if (!question || pending) return
    const asked = turns.filter((turn) => turn.role === 'user').length
    setDraft('')
    setTurns((current) => [...current, { role: 'user', text: question }])
    setPending(true)
    const answer = await askAbout(turns, question, { asked })
    setTurns((current) => [...current, { role: 'model', text: answer }])
    setPending(false)
  }

  return (
    <div
      className="fixed top-[calc(1rem+env(safe-area-inset-top))] right-[calc(1rem+env(safe-area-inset-right))] z-[45] flex flex-col items-end gap-3 sm:top-[calc(1.5rem+env(safe-area-inset-top))] sm:right-[calc(1.5rem+env(safe-area-inset-right))]"
    >
      <button
        type="button"
        className="inline-flex min-h-11 items-center gap-2 rounded-full border-2 border-[#aff21a] bg-[#0a0a0a] px-4 text-sm font-medium uppercase tracking-wide text-[#aff21a] shadow-[0_12px_32px_rgba(0,0,0,0.35)]"
        aria-label="Fale comigo"
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
      >
        <MessageCircle size={18} aria-hidden="true" />
        <span className="sm:hidden">Fale</span>
        <span className="hidden sm:inline">Fale comigo</span>
      </button>
      {open ? (
        <section
          aria-label="Conversa com o Arysson"
          className="theme-dark flex max-h-[min(78svh,36rem)] w-[min(calc(100vw-2rem),26rem)] flex-col overflow-hidden rounded-[28px] border-2 border-[#aff21a] bg-canvas shadow-[0_18px_50px_rgba(0,0,0,0.35)]"
        >
          <header className="flex shrink-0 items-center justify-between gap-3 border-b border-fg/20 px-4 py-3">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.16em] text-[#aff21a]">Arysson</p>
              <h2 className="text-lg font-medium uppercase">Fale comigo</h2>
            </div>
            <button type="button" className="inline-flex min-h-11 min-w-11 items-center justify-center" aria-label="Fechar chat" onClick={() => setOpen(false)}>
              <X aria-hidden="true" />
            </button>
          </header>
          <div ref={listRef} className="flex min-h-0 flex-col gap-3 overflow-y-auto px-4 py-4">
            {turns.length === 0 ? (
              <div className="max-w-[90%] rounded-2xl border border-[#aff21a]/40 bg-[#aff21a]/10 px-3 py-2">
                <p className="text-xs font-medium uppercase tracking-wide text-[#aff21a]">Arysson</p>
                <p className="mt-1 text-sm leading-relaxed">
                  Pode perguntar de projeto, stack ou por que me contratar. Eu respondo, e só com o que está no meu material.
                  {import.meta.env.VITE_GEMINI_API_KEY ? '' : ' A chave gratuita do Google AI Studio ainda não está configurada.'}
                </p>
              </div>
            ) : null}
            {turns.map((turn, index) =>
              turn.role === 'user' ? (
                <p key={`${turn.role}-${index}`} className="ml-auto max-w-[90%] rounded-2xl bg-fg px-3 py-2 text-sm leading-relaxed text-canvas">
                  {turn.text}
                </p>
              ) : (
                <div key={`${turn.role}-${index}`} className="max-w-[90%] rounded-2xl border border-[#aff21a]/40 bg-[#aff21a]/10 px-3 py-2">
                  <p className="text-xs font-medium uppercase tracking-wide text-[#aff21a]">Arysson</p>
                  <p className="mt-1 text-sm leading-relaxed">{turn.text}</p>
                </div>
              ),
            )}
            {pending ? (
              <div className="max-w-[90%] rounded-2xl border border-[#aff21a]/40 bg-[#aff21a]/10 px-3 py-2">
                <p className="text-xs font-medium uppercase tracking-wide text-[#aff21a]">Arysson</p>
                <p className="mt-1 text-sm leading-relaxed text-fg/70">Deixa eu responder…</p>
              </div>
            ) : null}
          </div>
          <form onSubmit={submit} className="flex shrink-0 gap-2 border-t border-fg/20 p-3">
            <label className="sr-only" htmlFor="about-question">
              Sua pergunta para o Arysson
            </label>
            <input
              id="about-question"
              value={draft}
              onChange={(event) => setDraft(event.target.value)}
              placeholder="Ex.: por que eu te contrataria?"
              className="min-h-11 min-w-0 flex-1 rounded-full border border-fg/30 bg-transparent px-4 text-sm outline-none"
            />
            <button type="submit" className="min-h-11 rounded-full bg-fg px-4 text-sm font-medium uppercase text-canvas" disabled={pending || turns.filter((turn) => turn.role === 'user').length >= FREE_QUESTION_LIMIT}>
              Enviar
            </button>
          </form>
        </section>
      ) : null}
    </div>
  )
}
