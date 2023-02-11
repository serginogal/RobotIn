interface RobotData {
  name: string
  status: 'AVAILABLE' | 'IN-USE' | 'OFFLINE'
  assemblyCode: string
  robotStats: {
    updatedOn: string
    batteryLevel: number
    isCharging: boolean
    networkConnected: boolean
  }
  venue: {
    location: string
    coordinates: number[]
    description: string
    venueName: string
    city: string
    country: string
  }
}
