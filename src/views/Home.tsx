import { Container } from '@mui/material'

import Hero from '../components/Hero'
import RobotTable from '../components/RobotTable'
import { useRobotList } from '../hooks/useRobotList'

const Home = () => {
  const { robots, error, isLoading, searchData } = useRobotList()
  return (
    <>
      <Hero />
      <Container sx={{ py: 8 }} maxWidth="lg">
        <RobotTable {...{ robots, error, isLoading, searchData }} />
      </Container>
    </>
  )
}

export default Home
