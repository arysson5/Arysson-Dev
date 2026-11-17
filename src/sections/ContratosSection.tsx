import { HorizontalRail } from '../components/HorizontalRail'
import { contratos } from '../data/site'

export function ContratosSection() {
  return (
    <HorizontalRail
      id="contratos"
      title={contratos.title}
      lede={contratos.lede}
      cards={contratos.steps}
      action={<p className="mt-8 text-sm font-medium uppercase tracking-widest text-fg/70">{contratos.ownership}</p>}
    />
  )
}
