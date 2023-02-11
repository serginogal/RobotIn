export type Order = 'asc' | 'desc'
export type SupportedHeaders =
  | 'status'
  | 'name'
  | 'updatedAt'
  | 'location'
  | 'battery'
  | 'connection'
type SortByType = { a: RobotData; b: RobotData; order: Order }

const sortByMap: {
  [key in SupportedHeaders]: ({ a, b, order }: SortByType) => number
} = {
  connection: sortByConnection,
  location: sortByLocation,
  battery: sortByBattery,
  updatedAt: sortByDate,
  status: sortByStatus,
  name: sortByName,
}

function sortByStatus({ a, b, order }: SortByType) {
  const stateValues = {
    AVAILABLE: 1,
    'IN-USE': 2,
    OFFLINE: 3,
  }
  if (order === 'desc') {
    return stateValues[b.status] - stateValues[a.status]
  }
  return stateValues[a.status] - stateValues[b.status]
}

function sortByConnection({ a, b, order }: SortByType) {
  const connectionA = a.robotStats.networkConnected ? 1 : 2
  const connectionB = b.robotStats.networkConnected ? 1 : 2
  if (order === 'desc') {
    return connectionB - connectionA
  }
  return connectionA - connectionB
}

function sortByName({ a, b, order }: SortByType) {
  if (order === 'desc') {
    return b.name.localeCompare(a.name)
  }
  return a.name.localeCompare(b.name)
}

function sortByDate({ a, b, order }: SortByType) {
  const aDate = new Date(a.robotStats.updatedOn).getTime()
  const bDate = new Date(b.robotStats.updatedOn).getTime()
  if (order === 'desc') {
    return bDate - aDate || a.name.localeCompare(b.name)
  }
  return aDate - bDate || a.name.localeCompare(b.name)
}

function sortByLocation({ a, b, order }: SortByType) {
  if (order === 'desc') {
    return (
      b.venue.location.localeCompare(a.venue.location) ||
      a.name.localeCompare(b.name)
    )
  }
  return (
    a.venue.location.localeCompare(b.venue.location) ||
    a.name.localeCompare(b.name)
  )
}

function sortByBattery({ a, b, order }: SortByType) {
  if (order === 'desc') {
    return (
      b.robotStats.batteryLevel - a.robotStats.batteryLevel ||
      a.name.localeCompare(b.name)
    )
  }
  return (
    a.robotStats.batteryLevel - b.robotStats.batteryLevel ||
    a.name.localeCompare(b.name)
  )
}

export function sortBy({
  order,
  headerId,
}: {
  order: Order
  headerId: SupportedHeaders
}): (a: any, b: any) => number {
  return (a, b) => sortByMap[headerId]({ a, b, order })
}
