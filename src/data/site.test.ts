import { describe, expect, it } from 'vitest'
import { aboutText, cases, heroLine, nav, whatsappUrl } from './site'

describe('conteúdo do site', () => {
  it('guarda a frase do topo, o sobre e o WhatsApp', () => {
    expect(heroLine).toBe('Back-end pleno. PHP, Laravel e Node. Mais de 5 anos de experiência. Disponível para remoto.')
    expect(aboutText).toContain('Projeto e entrego sistemas completos, do banco de dados à interface.')
    expect(`${aboutText} ${cases.map((c) => c.description).join(' ')}`).not.toMatch(/não|nunca|ainda/i)
    expect(aboutText).toContain('com escopo claro para quem contrata.')
    expect(whatsappUrl).toBe(
      'https://wa.me/5511988501368?text=Oi%20Arysson%2C%20vi%20o%20portf%C3%B3lio%20e%20quero%20conversar.',
    )
  })

  it('lista os cinco cases na ordem do site', () => {
    expect(cases.map((item) => item.name)).toEqual([
      'Hannover Store',
      'Chatbot Brizzatatoo',
      'Comparador de contratos',
      'Chat de documentos',
      'Front-End',
    ])
    expect(cases[0].description).toContain('Hannovinho')
    expect(cases[0].description).toContain('Fastify')
    expect(cases[2].description).toContain('chunking')
    expect(cases[2].description).toContain('LLM')
    expect(cases.map((item) => item.name).join(' ')).not.toMatch(/BGF|Bgf/)
  })

  it('aponta o menu para Sobre, Cases, Cara e Contato', () => {
    expect(nav.map((item) => item.label)).toEqual(['Sobre mim', 'Cases de Sucesso', 'Front-End', 'Contato'])
    expect(nav.map((item) => item.href)).toEqual(['#sobre', '#cases', '#cara', '#contato'])
  })
})
