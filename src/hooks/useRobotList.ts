import {
  getRobots,
  searchRobots,
  RobotsResponseType,
} from '@services/RobotsAPI'
import { sortBy } from '@utils/sortBy'
import { useEffect, useState } from 'react'

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

    const sortedRobots = res?.content?.sort(
      sortBy({ order: 'desc', headerId: 'updatedAt' })
    )

    setRobots(sortedRobots || [])
  }

  const searchData = async ({ query }: { query: string } = { query: '' }) => {
    setIsLoading(true)
    const [res, error]: RobotsResponseType = await searchRobots({ query })
    setIsLoading(false)
    if (error) return setError(error)

    const sortedRobots = res?.content?.sort(
      sortBy({ order: 'desc', headerId: 'updatedAt' })
    )

    setRobots(sortedRobots || [])
  }

  useEffect(() => {
    fetchData()
  }, [])

  return { robots, error, isLoading, fetchData, searchData }
}
