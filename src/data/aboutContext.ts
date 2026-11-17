import { curriculo } from './curriculo'

const github = `Fonte: https://github.com/arysson5
Arysson Menezes, desenvolvedor full stack. No portfólio a experiência está como mais de 5 anos. O perfil público ainda mostra o selo de 4+ anos e a atuação na BGF Consultoria em Engenharia desde 2021, com sistemas em produção.
LinkedIn: https://www.linkedin.com/in/arysson-menezes-dev/
Stack pública: PHP, Laravel, Node.js, Express, Fastify, Python, React, React Native, Expo, JavaScript, HTML, CSS, MySQL, SQLite, Docker, Vercel, Render, Git, Google AI, JWT, EmailJS, Google Apps Script, ASP.NET.
Projetos públicos: GARRA (React Native, Expo Router, Node.js, Express, SQLite, JWT); Hannover Store no ar em https://hannover-store.vercel.app (React, Vite, Fastify, Node.js, Google AI); chat de documentos com LLM em Python e Streamlit; izainvite em https://izainvite.vercel.app; Chá de Casa Nova; landing da Intelligence Contabilidade; controle de tarefas em Laravel; script de arquivos duplicados em Node.js.
Formação pública: Desenvolvimento Web Full Stack na MFX Academy (2024–2025); Tecnólogo em ADS na UNIP (2020–2022); Técnico em Informática na ETEC Irmã Agostina (2018–2019).`

function between(source: string, start: string, end?: string) {
  const from = source.indexOf(start)
  if (from < 0) return ''
  const rest = source.slice(from)
  if (!end) return rest.trim()
  const to = rest.indexOf(end, start.length)
  return (to < 0 ? rest : rest.slice(0, to)).trim()
}

function line(prefix: string) {
  return github.split('\n').find((item) => item.startsWith(prefix)) ?? ''
}

const base = `Arysson Menezes da Silva, desenvolvedor back-end pleno em São Paulo. Quase 5 anos de experiência; o portfólio publica mais de 5 anos. Atua na BGF Consultoria em Engenharia desde 2021. GitHub: https://github.com/arysson5`

const slices = [
  {
    keys: ['contato', 'email', 'e-mail', 'telefone', 'whats', 'celular', 'linkedin', 'remoto', 'clt', 'pj'],
    text: between(curriculo, 'Arysson Menezes da Silva', 'Resumo profissional'),
  },
  {
    keys: ['experi', 'trabalh', 'emprego', 'empresa', 'cargo', 'bgf', 'lider', 'review', 'diretor', 'estag'],
    text: between(curriculo, 'Experiência profissional', 'Projeto técnico'),
  },
  {
    keys: ['projeto', 'hannover', 'loja', 'garra', 'iza', 'briza', 'intelligence', 'portfolio', 'portifolio', 'github', 'no ar'],
    text: `${between(curriculo, 'Projeto técnico', 'Formação acadêmica')}\n${line('Projetos públicos:')}`,
  },
  {
    keys: ['forma', 'estud', 'unip', 'etec', 'faculdade', 'curso', 'escola', 'mfx', 'diploma', 'academ', 'tecnico'],
    text: `${between(curriculo, 'Formação acadêmica', 'Skills técnicas')}\n${line('Formação pública:')}`,
  },
  {
    keys: ['stack', 'tecnol', 'linguag', 'framework', 'php', 'laravel', 'node', 'docker', 'aws', 'banco', 'mysql', 'skill', 'jasper'],
    text: `${between(curriculo, 'Skills técnicas')}\n${line('Stack pública:')}`,
  },
]

const broad = ['tudo', 'resume', 'curriculo', 'sobre voce', 'quem e', 'perfil', 'biografia', 'me conta', 'me fale', 'completo']

function fold(value: string) {
  return value
    .toLowerCase()
    .normalize('NFD')
    .replace(/\p{M}/gu, '')
}

/** Só o resumo e os trechos que a pergunta pede. O texto inteiro vai quando a pergunta é ampla. */
export function contextFor(question: string) {
  const folded = fold(question)
  const chosen = broad.some((key) => folded.includes(key))
    ? slices
    : slices.filter((slice) => slice.keys.some((key) => folded.includes(fold(key))))
  return [base, ...chosen.map((slice) => slice.text)].filter(Boolean).join('\n\n')
}

export function profileContext() {
  return [github, curriculo.trim() ? `Currículo anexado:\n${curriculo.trim()}` : ''].filter(Boolean).join('\n\n')
}
