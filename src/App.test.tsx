import { fireEvent, render, screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import App from './App'

function body() {
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      const parent = node.parentElement
      if (parent?.closest('[data-placeholder]')) return NodeFilter.FILTER_REJECT
      return NodeFilter.FILTER_ACCEPT
    },
  })
  let text = ''
  while (walker.nextNode()) text += walker.currentNode.textContent
  return text
}

describe('página', () => {
  it('mostra as seções que já existem e um único Live Project', () => {
    render(<App />)

    expect(screen.getByRole('heading', { level: 1, name: /arysson/i })).toBeInTheDocument()
    expect(body()).toContain('Back-end pleno. PHP, Laravel e Node. Mais de 5 anos de experiência. Disponível para remoto.')
    expect(body()).toContain('Projeto e entrego sistemas completos, do banco de dados à interface.')
    expect(body()).toContain('Chatbot Brizzatatoo')
    expect(body()).toContain('O atendimento do estúdio no piloto automático')
    expect(body()).toContain('Comparador de contratos')
    expect(body()).toContain('chunking')
    expect(body()).toContain('Uma LLM lê cada chunk')
    expect(body()).toContain('Chat de documentos')
    expect(body()).toContain('O código é propriedade da contratante.')
    expect(body()).not.toContain('Bgf-contracts')
    expect(body()).not.toContain('Oráculo BGF')
    expect(body()).not.toContain('github.com/arysson5/Bgf-contracts')
    expect(body()).not.toContain('github.com/arysson5/oraculoBGF')
    expect(body()).toContain('Front-End')
    expect(body()).toContain('Sobre mim')
    expect(body()).toContain('Cases de Sucesso')
    expect(body()).toContain('Se o sistema precisa existir de verdade, me chama.')

    const live = screen.getAllByRole('link', { name: /live project/i })
    expect(live).toHaveLength(1)
    expect(live[0]).toHaveAttribute('href', 'https://hannover-store.vercel.app')

    expect(screen.getByRole('link', { name: /ver o código da loja/i })).toHaveAttribute(
      'href',
      'https://github.com/arysson5/HannoverStore',
    )
    expect(screen.getAllByRole('link', { name: /falar no whatsapp/i }).length).toBeGreaterThanOrEqual(3)
    expect(screen.getByRole('link', { name: /^virada/i })).toHaveAttribute(
      'href',
      'https://arysson5.github.io/virada-extraordinaria-lp/',
    )
    expect(screen.getByRole('link', { name: /^intelligence/i })).toHaveAttribute(
      'href',
      'https://arysson5.github.io/intelligencecontabilidadelp/',
    )
    expect(screen.getByRole('link', { name: /^convites/i })).toHaveAttribute('href', 'https://izainvite.vercel.app')
  })

  it('usa a mesma faixa horizontal no Brizzatatoo, no comparador e no chat de documentos', () => {
    render(<App />)

    for (const id of ['briza', 'contratos', 'oraculo']) {
      const section = document.getElementById(id)
      expect(section).toBeTruthy()
      const track = section!.querySelector('.w-max')
      expect(track?.className).toContain('flex')
      expect(section!.querySelectorAll('article').length).toBeGreaterThanOrEqual(4)
    }
  })

  it('abre o chat sem citar o modelo e com a caixa livre para crescer', () => {
    render(<App />)
    fireEvent.click(screen.getByRole('button', { name: 'Fale comigo' }))

    expect(screen.queryByText(/gemini gratuito/i)).not.toBeInTheDocument()
    expect(screen.queryByText(/perfil público do GitHub/i)).not.toBeInTheDocument()
    expect(screen.getByText(/por que me contratar/i)).toBeInTheDocument()
    const panel = screen.getByRole('region', { name: 'Conversa com o Arysson' })
    expect(panel.className).toContain('max-h-[min(78svh,36rem)]')
    expect(panel.className).not.toContain('13rem')
  })

  it('abre as quatro âncoras a partir do botão de menu', () => {
    render(<App />)
    const button = screen.getByRole('button', { name: /abrir menu/i })
    expect(button.className).toContain('min-h-11')

    fireEvent.click(button)
    const menu = screen.getByRole('navigation', { name: 'Menu' })
    expect(within(menu).getByRole('link', { name: 'Sobre mim' })).toHaveAttribute('href', '#sobre')
    expect(within(menu).getByRole('link', { name: 'Cases de Sucesso' })).toHaveAttribute('href', '#cases')
    expect(within(menu).getByRole('link', { name: 'Front-End' })).toHaveAttribute('href', '#cara')
    expect(within(menu).getByRole('link', { name: 'Contato' })).toHaveAttribute('href', '#contato')
  })
})
