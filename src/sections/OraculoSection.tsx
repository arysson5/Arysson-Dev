import { HorizontalRail } from '../components/HorizontalRail'
import { oraculo } from '../data/site'

export function OraculoSection() {
  return (
    <HorizontalRail
      id="oraculo"
      title={oraculo.title}
      lede={oraculo.lede}
      cards={oraculo.sources}
      action={<p className="mt-8 text-sm font-medium uppercase tracking-widest text-fg/70">{oraculo.ownership}</p>}
    />
  )
}
