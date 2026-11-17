export const whatsappUrl =
  'https://wa.me/5511988501368?text=Oi%20Arysson%2C%20vi%20o%20portf%C3%B3lio%20e%20quero%20conversar.'

// A frase do hero em partes, para o bloco ter hierarquia. Juntas, formam heroLine.
export const heroParts = {
  role: 'Back-end pleno.',
  stack: 'PHP, Laravel e Node.',
  experience: 'Mais de 5 anos de experiência.',
  status: 'Disponível para remoto.',
}

export const heroLine = [heroParts.role, heroParts.stack, heroParts.experience, heroParts.status].join(' ')

export const aboutText =
  'Projeto e entrego sistemas completos, do banco de dados à interface. A frase do topo resume o trabalho: software em produção, estável na operação do dia a dia, com escopo claro para quem contrata.'

export const nav = [
  { href: '#sobre', label: 'Sobre mim' },
  { href: '#cases', label: 'Cases de Sucesso' },
  { href: '#cara', label: 'Front-End' },
  { href: '#contato', label: 'Contato' },
]

export const cases = [
  {
    number: '01',
    name: 'Hannover Store',
    description:
      'Loja virtual de ponta a ponta, para cliente e no ar: catálogo, login, painel admin e o chatbot Hannovinho atendendo quem chega. Front em React e Vite, API em Fastify.',
  },
  {
    number: '02',
    name: 'Chatbot Brizzatatoo',
    description:
      'O atendimento do estúdio roda sozinho no WhatsApp: orçamento pelas áreas do corpo, agenda no Google Calendar, sinal no PIX e um painel para o estúdio ajustar mensagem, horário e número.',
  },
  {
    number: '03',
    name: 'Comparador de contratos',
    description:
      'O PDF ou DOCX entra no parser. O chunking parte o texto em chunks por cláusula, uma LLM lê cada chunk no checklist de requisitos mínimos, e o diff compara o original com a versão do cliente. Python, Streamlit, pypdf e python-docx.',
  },
  {
    number: '04',
    name: 'Chat de documentos',
    description:
      'Um chat responde com o que a empresa já publicou. PDF, site e YouTube entram na base, o chunking corta o texto e o retrieval devolve o trecho usado na resposta. Python, Streamlit, LangChain e pypdf.',
  },
  {
    number: '05',
    name: 'Front-End',
    description:
      'Também faço a cara do produto. Landings e convites no ar, prontos para converter: Virada Extraordinária, Intelligence Contabilidade e o convite da Iza.',
  },
]

export const briza = {
  title: 'Chatbot Brizzatatoo',
  lede: 'O atendimento do estúdio no piloto automático: o cliente chama no WhatsApp, o bot orça, agenda e confirma.',
  codeUrl: 'https://github.com/arysson5/chatbottatoo',
  codeLabel: 'Ver o código do fluxo',
  steps: [
    { title: 'Orçamento', text: 'O valor sai pelas áreas do corpo, na hora, dentro da conversa.' },
    { title: 'Agenda', text: 'O cliente escolhe o horário livre e ele entra direto no Google Calendar.' },
    { title: 'Sinal', text: 'O PIX confirma o horário e garante a sessão.' },
    { title: 'Painel', text: 'O estúdio ajusta mensagem, horário e número.' },
    { title: 'Stack', text: 'Evolution API, Next.js, Google Calendar e leitura do comprovante.' },
  ],
}

export const ownership = 'O código é propriedade da contratante.'

export const contratos = {
  title: 'Comparador de contratos',
  lede: 'O contrato entra em PDF ou DOCX. O parser extrai o texto, o chunking parte o documento em chunks por cláusula, e uma LLM analisa cada chunk: checklist de requisitos mínimos e diff entre o original e a versão do cliente.',
  ownership,
  steps: [
    { title: 'Extração', text: 'pypdf e python-docx transformam PDF e DOCX em texto.' },
    { title: 'Chunking', text: 'O texto vira chunks por cláusula, para a conferência rodar trecho a trecho.' },
    { title: 'Checklist', text: 'Cada chunk é medido contra os requisitos mínimos do contrato.' },
    { title: 'IA', text: 'Uma LLM lê cada chunk e aponta o que falta no checklist de requisitos mínimos.' },
    { title: 'Diff', text: 'Original e versão do cliente são comparados chunk a chunk.' },
    { title: 'Interface', text: 'Painel em Streamlit, escrito em Python.' },
  ],
}

export const oraculo = {
  title: 'Chat de documentos',
  lede: 'O chat responde com o material que a empresa já tem. PDF, página pública e vídeo entram na base. O chunking corta o texto, o retrieval escolhe os chunks da pergunta e a resposta cita esse contexto.',
  ownership,
  sources: [
    { title: 'PDF', text: 'O parser lê o arquivo com pypdf e o chunking corta o texto em pedaços indexáveis.' },
    { title: 'Site', text: 'O conteúdo da página pública entra na mesma base de chunks.' },
    { title: 'YouTube', text: 'A transcrição do vídeo vira texto e segue o mesmo pipeline de chunking.' },
    { title: 'Stack', text: 'Python, Streamlit, LangChain, pypdf e retrieval em cima dos chunks.' },
  ],
}

export const face = {
  title: 'Front-End',
  moreHref: 'https://brunaethiago.vercel.app',
  moreLabel: 'Ver outro convite no ar',
}

export const contact = {
  title: 'Se o sistema precisa existir de verdade, me chama.',
  name: 'Arysson Menezes',
  github: 'https://github.com/arysson5',
  linkedin: 'https://www.linkedin.com/in/arysson-menezes-dev/',
  instagram: 'https://www.instagram.com/arysson.dev/',
}

export const socials = [
  { label: 'LinkedIn', handle: 'arysson-menezes-dev', href: contact.linkedin },
  { label: 'GitHub', handle: 'arysson5', href: contact.github },
  { label: 'Instagram', handle: '@arysson.dev', href: contact.instagram },
] as const
