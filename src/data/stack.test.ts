import { describe, expect, it } from 'vitest'
import { stack } from './stack'

const fromGithub = [
  'PHP',
  'Laravel',
  'Node.js',
  'Express',
  'Fastify',
  'Python',
  'React',
  'React Native',
  'Expo',
  'JavaScript',
  'HTML5',
  'CSS3',
  'MySQL',
  'SQLite',
  'Docker',
  'Vercel',
  'Render',
  'Git',
  'Google AI',
  'JWT',
  'EmailJS',
  'Google Apps Script',
  'ASP.NET',
]

describe('stack', () => {
  it('inclui as tecnologias da seção Stack Técnica do GitHub', () => {
    const names = stack.map((item) => item.name)
    for (const name of fromGithub) expect(names).toContain(name)
    expect(new Set(names).size).toBe(names.length)
  })
})
