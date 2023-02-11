import Hero from '@components/Hero'
import RobotTable from '@components/RobotTable'
import { Container } from '@mui/material'
import MainLayout from './layouts/MainLayout'

function App() {
  return (
    <MainLayout>
      <Hero />
      <Container sx={{ py: 8 }} maxWidth="lg">
        <RobotTable
          isLoading={false}
          robots={[
            {
              name: 'N10TestRobot-00030',
              status: 'IN-USE',
              assemblyCode: 'X20WZ21',
              robotStats: {
                updatedOn: '2022-12-23T18:53:20.676',
                batteryLevel: 20,
                isCharging: false,
                networkConnected: true,
              },
              venue: {
                location: 'Haneda airport Terminal 2 Departures floor, Japan',
                coordinates: [35.5507045, 139.7858074],
                description: 'Haneda airport Terminal 2 Departures floor',
                venueName: 'Haneda airport',
                city: 'Tokyo',
                country: 'Japan',
              },
            },
            {
              name: 'N10TestRobot-00029',
              status: 'AVAILABLE',
              assemblyCode: 'X20WZ20',
              robotStats: {
                updatedOn: '2023-01-16T18:53:20.676',
                batteryLevel: 85,
                isCharging: false,
                networkConnected: false,
              },
              venue: {
                location: 'Haneda airport Terminal 2 Departures floor, Japan',
                coordinates: [35.5507045, 139.7858074],
                description: 'Haneda airport Terminal 2 Departures floor',
                venueName: 'Haneda airport',
                city: 'Tokyo',
                country: 'Japan',
              },
            },
          ]}
          error={null}
          searchData={res => res && alert(res)}
        />
      </Container>
    </MainLayout>
  )
}

export default App
