import { HorizontalRail } from '../components/HorizontalRail'
import { LinkButton } from '../components/LiveProjectButton'
import { briza } from '../data/site'

export function BrizaSection() {
  return (
    <HorizontalRail
      id="briza"
      title={briza.title}
      lede={briza.lede}
      cards={briza.steps}
      action={
        <LinkButton href={briza.codeUrl} className="mt-8">
          {briza.codeLabel}
        </LinkButton>
      }
    />
  )
}
