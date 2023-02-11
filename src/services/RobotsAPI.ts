const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))
const url = '/_data/robots.json'

export type RobotsResponseType = [{ content: RobotData[] } | null, Error | null]

export const getRobots = async (): Promise<RobotsResponseType> => {
  await sleep(750)
  try {
    const res = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })
    const resJson = await res.json()
    return [resJson, null]
  } catch (error) {
    const typedError = error as Error
    return [null, typedError]
  }
}

export const searchRobots = async (
  { query }: { query: string } = { query: '' }
): Promise<RobotsResponseType> => {
  await sleep(750)
  try {
    const res = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })

    const resJson: { content: RobotData[] } = await res.json()
    const filteredJson = resJson.content.filter(robot => {
      const nameLower = robot.name.toLowerCase()
      const assemblyLower = robot.assemblyCode.toLowerCase()

      return (
        nameLower === query ||
        assemblyLower === query ||
        nameLower.startsWith(query.toLowerCase()) ||
        assemblyLower.toLowerCase().startsWith(query.toLowerCase())
      )
    })

    return [{ content: filteredJson }, null]
  } catch (error) {
    const typedError = error as Error
    return [null, typedError]
  }
}
