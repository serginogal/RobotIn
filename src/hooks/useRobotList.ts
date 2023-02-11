import {
  getRobots,
  searchRobots,
  RobotsResponseType,
} from '@services/RobotsAPI'
import { useEffect, useState } from 'react'

// TODO: Separate sortByDate in a utils.tsx if in the future it is used in other places
const sortByDate = (list: RobotData[] = []) => {
  // Make a deep clone in order to not mutate the original array
  const resCopy: RobotData[] = structuredClone(list)

  // Sort the results by date
  return resCopy.sort(
    (a, b) =>
      new Date(b.robotStats.updatedOn).getTime() -
      new Date(a.robotStats.updatedOn).getTime()
  )
}

export const useRobotList = () => {
  const [robots, setRobots] = useState<RobotData[] | null>(null)
  const [error, setError] = useState<Error | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(false)

  // { limit, startAt }: { limit: number, startAt: number } = { limit: 10 , startAt: 0 }
  const fetchData = async () => {
    setIsLoading(true)
    const [res, error]: RobotsResponseType = await getRobots()
    setIsLoading(false)

    if (error) return setError(error)

    setRobots(sortByDate(res?.content))
  }

  const searchData = async ({ query }: { query: string } = { query: '' }) => {
    setIsLoading(true)
    const [res, error]: RobotsResponseType = await searchRobots({ query })
    setIsLoading(false)
    if (error) return setError(error)

    setRobots(sortByDate(res?.content))
  }

  useEffect(() => {
    fetchData()
  }, [])

  return { robots, error, isLoading, fetchData, searchData }
}
