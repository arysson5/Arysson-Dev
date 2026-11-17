import {
  siCss,
  siDocker,
  siDotnet,
  siExpo,
  siExpress,
  siFastify,
  siGit,
  siGoogle,
  siGoogleappsscript,
  siHtml5,
  siJavascript,
  siJsonwebtokens,
  siLaravel,
  siMaildotru,
  siMysql,
  siNodedotjs,
  siPhp,
  siPostgresql,
  siPython,
  siReact,
  siRender,
  siSqlite,
  siVercel,
  siVite,
} from 'simple-icons'

export type StackItem = {
  name: string
  /** Caminho SVG (viewBox 0 0 24 24) do simple-icons. Sem path, usa o ícone de LLMs. */
  path?: string
  /** Cor oficial da marca, mostrada no hover. */
  color: string
}

const brand = (icon: { path: string; hex: string }, fallback?: string) => ({
  path: icon.path,
  color: fallback ?? `#${icon.hex}`,
})

// Mesma lista da seção "Stack Técnica" do GitHub, mais Vite, PostgreSQL e LLMs que já estavam aqui.
// Ícones pretos usam branco no hover para continuar visíveis no chip escuro.
export const stack: StackItem[] = [
  { name: 'PHP', ...brand(siPhp) },
  { name: 'Laravel', ...brand(siLaravel) },
  { name: 'Node.js', ...brand(siNodedotjs) },
  { name: 'Express', ...brand(siExpress, '#ffffff') },
  { name: 'Fastify', ...brand(siFastify, '#ffffff') },
  { name: 'Python', ...brand(siPython) },
  { name: 'React', ...brand(siReact) },
  { name: 'React Native', ...brand(siReact) },
  { name: 'Expo', ...brand(siExpo) },
  { name: 'JavaScript', ...brand(siJavascript) },
  { name: 'Vite', ...brand(siVite) },
  { name: 'HTML5', ...brand(siHtml5) },
  { name: 'CSS3', ...brand(siCss) },
  { name: 'MySQL', ...brand(siMysql) },
  { name: 'PostgreSQL', ...brand(siPostgresql) },
  { name: 'SQLite', ...brand(siSqlite) },
  { name: 'Docker', ...brand(siDocker) },
  { name: 'Vercel', ...brand(siVercel, '#ffffff') },
  { name: 'Render', ...brand(siRender, '#46E3B7') },
  { name: 'Git', ...brand(siGit) },
  { name: 'LLMs', color: '#a668ff' },
  { name: 'Google AI', ...brand(siGoogle) },
  { name: 'JWT', ...brand(siJsonwebtokens, '#ffffff') },
  { name: 'EmailJS', ...brand(siMaildotru) },
  { name: 'Google Apps Script', ...brand(siGoogleappsscript) },
  { name: 'ASP.NET', ...brand(siDotnet) },
]
