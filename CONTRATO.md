# Contrato do portfolio

Regras fechadas para o app em `portfolio/`. O `index.html` da pasta acima não muda.

## Conteúdo

- Os textos vendem: falam do que cada projeto entrega, para cliente e recrutador, sem frase negativa e sem inventar número ou tecnologia que o projeto não tem. Ficam em `src/data/site.ts`.
- O título da aba é "Arysson — Back-end".
- O hero mostra o nome "Arysson", a frase "Back-end pleno. PHP, Laravel e Node. Mais de 5 anos de experiência. Disponível para remoto." e o botão "Falar no WhatsApp".
- O WhatsApp abre o número 11 98850-1368: `https://wa.me/5511988501368?text=Oi%20Arysson%2C%20vi%20o%20portf%C3%B3lio%20e%20quero%20conversar.`
- O sobre usa "Projeto e entrego sistemas completos, do banco de dados à interface. A frase do topo resume o trabalho: software em produção, estável na operação do dia a dia, com escopo claro para quem contrata."
- Os títulos visíveis são "Sobre mim", "Cases de Sucesso" e "Front-End". A lista Cases tem cinco itens, nesta ordem: Hannover Store, Chatbot Brizzatatoo, Comparador de contratos, Chat de documentos, Front-End.
- Comparador de contratos e Chat de documentos não usam o nome da contratante. O comparador cita chunking e a LLM que lê cada chunk. O código não tem link: a frase é "O código é propriedade da contratante."
- Hannover cita só o que o código público tem: catálogo, login, painel admin, o chatbot Hannovinho, React, Vite e Fastify.

## Projeto ao vivo

- A lista de projetos começa com um item: Hannover Store, categoria Cliente.
- O botão "Live Project" aparece uma vez e abre `https://hannover-store.vercel.app`.
- O código da loja abre `https://github.com/arysson5/HannoverStore`.
- Um projeto novo entra acrescentando um item no array. Sem `liveUrl`, o botão Live Project não aparece.

## Seções

A página tem, nesta ordem: Hero, faixa de prints, Sobre mim, Stack, Cases de Sucesso, Projeto, Briza, Contratos, Oráculo, Front-End, Contato.

- O link do Chatbot Brizzatatoo é o código do fluxo (o case é o bot no WhatsApp, não um site).
- Chatbot Brizzatatoo, Comparador de contratos e Chat de documentos usam a mesma faixa: a seção fica presa e a rolagem vertical empurra os cards para o lado.
- Comparador de contratos e Chat de documentos não têm link de código. A frase é "O código é propriedade da contratante."
- Cara mantém Virada, Intelligence e Iza, com poster e vídeo, mais o link "Ver outro convite no ar" (`https://brunaethiago.vercel.app`).
- Os três vídeos tocam na velocidade 1 e reiniciam aos 2,06s, o tempo do clipe mais curto.
- Contato mostra o nome, GitHub, LinkedIn, Instagram e o WhatsApp.
- O botão "Fale comigo" fica flutuante no canto superior direito desde a abertura, fora do texto de Sobre mim, e a barra do topo não cobre o clique. A caixa fala em primeira pessoa, como uma conversa de contratação, cresce com a resposta até caber na tela e a interface não cita o modelo. Ele responde só com o perfil público https://github.com/arysson5 e o texto de `src/data/curriculo.ts`. Cada pergunta manda o resumo curto e só os trechos do tema; o material inteiro vai quando a pergunta é ampla. A chamada usa o modelo gratuito `gemini-flash-lite-latest` e reenvia no máximo as 4 falas anteriores. A chave fica em `portfolio/.env.local`, na variável `VITE_GEMINI_API_KEY`, e não entra no git. O build da `main` lê a secret de Actions com o mesmo nome. Cada visita faz no máximo 12 perguntas.

## Imagens

- Retrato, prints, logo e vídeos vêm de `assets/` do site atual.
- A faixa não usa GIF de outro portfólio.
- O site não usa a logo: nem nos cantos do sobre, nem na faixa.

## Celular

- Abaixo de `md`, o menu vira um botão que abre as quatro âncoras: Sobre mim, Cases de Sucesso, Front-End, Contato.
- O botão do menu tem área de toque de pelo menos 44px.
- No hero estreito, o retrato fica no fluxo, abaixo do nome.
- A faixa usa tiles menores no celular.
- Cases empilha o número e o texto.
- O card do projeto empilha as imagens em uma coluna.
