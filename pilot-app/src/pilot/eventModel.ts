import data from '../pilotData.json'

export type PilotEvent = (typeof data.events)[number]
type Placement = (typeof data.placements)[number]

const groupByEvent: Record<string, string> = {
  E02: '“Register Now” placements',
  E08: '“Join the Waitlist” placements',
  E09: '“Get Started” placements',
}

function expandIds(value: string): string[] {
  return value.split(',').flatMap(part => {
    const match = part.trim().match(/^(\d+)[–-](\d+)$/)
    if (!match) return part.trim() ? [part.trim()] : []
    const first = Number(match[1]), last = Number(match[2])
    return last >= first && last - first < 100 ? Array.from({ length: last - first + 1 }, (_, index) => String(first + index)) : [part.trim()]
  })
}

export function eventPlacements(event: PilotEvent): Placement[] {
  const group = groupByEvent[event.ID]
  if (group) return data.placements.filter(placement => placement['Placement group'] === group)
  const moduleIds = expandIds(event['Moduledtl in document'])
  if (moduleIds.length) return data.placements.filter(placement => placement['ID source'] === 'Moduledtl' && moduleIds.includes(placement.ID))
  const sid = event['sid in document']
  if (!sid) return []
  const moduleId = sid.match(/\.m(\d+)\./)?.[1]
  const registeredModule = data.placements.find(placement => placement['ID source'] === 'Moduledtl' && placement.ID === moduleId)
  return [{
    'Placement group': 'Event row sid',
    'ID source': 'sid',
    ID: sid,
    'Module name': registeredModule?.['Module name'] || 'Module name not recorded',
    'Audience or source note': 'sid from event row; module name matched by module ID',
    'Document entry': sid,
  }]
}

export function placementColumns(placement: Placement | null) {
  if (!placement) return { placement: 'Not mapped', moduleId: '—', sid: '—' }
  const sid = placement['ID source'] === 'sid' ? placement.ID : '—'
  const moduleId = placement['ID source'] === 'Moduledtl' ? placement.ID : placement.ID.match(/\.m(\d+)\./)?.[1] || '—'
  return { placement: placement['Module name'], moduleId, sid }
}

export function eventType(event: PilotEvent): 'Click' | 'Module Impression' | 'Page Impression' {
  const classification = event['Family / action / kind'].toUpperCase()
  if (classification.includes('CLICK') || classification.includes('EXPAND-COLLAPSE')) return 'Click'
  if (classification.includes('MODULE_IMP')) return 'Module Impression'
  return 'Page Impression'
}

export function eventPayload(event: PilotEvent) {
  const [eventFamily, eventAction, actionKind] = event['Family / action / kind'].split(' / ')
  const properties = data.eventProperties.filter(property => property['Event ID'] === event.ID)
  const eventProperty: Record<string, string | string[] | null> = {}
  const placements = eventPlacements(event)
  for (const property of properties) {
    const name = property.Property
    if (name === 'sid') {
      const ids = placements.filter(placement => placement['ID source'] === 'sid').map(placement => placement.ID)
      eventProperty[name] = ids.length > 1 ? ids : ids[0] || event['sid in document'] || null
    }
    else if (name === 'Moduledtl') eventProperty[name] = expandIds(event['Moduledtl in document'])
    else eventProperty[name] = null
  }
  return {
    eventFamily,
    ...(actionKind ? { eventAction, actionKind } : { eventAction }),
    cp: event.cp,
    eventProperty,
  }
}
