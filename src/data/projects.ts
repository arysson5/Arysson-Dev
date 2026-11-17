import hannoverMobile from '@assets/hannover-mobile.jpg'
import hannoverProduto from '@assets/hannover-produto.jpg'
import hannoverVitrine from '@assets/hannover-vitrine.jpg'

export type ProjectImage = {
  src: string
  alt: string
}

export type Project = {
  number: string
  name: string
  category: string
  liveUrl?: string
  codeUrl?: string
  images: {
    leftTop: ProjectImage
    leftBottom: ProjectImage
    right: ProjectImage
  }
}

const vitrineAlt =
  'Vitrine da Hannover Store com os produtos carregados: Air Jordan, Yeezy e Off-White.'
const produtoAlt =
  'Página do Nike Air Zoom Pegasus 40, com a foto do tênis, o preço e os tamanhos.'
const mobileAlt =
  'Página do Nike Air Zoom Pegasus 40 no celular, com a foto do tênis e o preço.'

export const projects: Project[] = [
  {
    number: '01',
    name: 'Hannover Store',
    category: 'Cliente',
    liveUrl: 'https://hannover-store.vercel.app',
    codeUrl: 'https://github.com/arysson5/HannoverStore',
    images: {
      leftTop: { src: hannoverVitrine, alt: vitrineAlt },
      leftBottom: { src: hannoverMobile, alt: mobileAlt },
      right: { src: hannoverProduto, alt: produtoAlt },
    },
  },
]
