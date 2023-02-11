import { Box, Typography } from '@mui/material'
import BatteryIndicator from '@components/BatteryIndicator'

type BatteryLevelProps = {
  isCharging?: boolean
  batteryLevel: number
}

const BatteryLevel = ({
  isCharging = false,
  batteryLevel = 0,
}: BatteryLevelProps) => {
  return (
    <Box display={'flex'} alignItems={'center'} justifyContent={'center'}>
      <BatteryIndicator isCharging={isCharging} batteryLevel={batteryLevel} />
      <Typography
        alignSelf={'flex-end'}
        component={'span'}
        variant={'caption'}
        color={'grey.500'}
      >
        {`${batteryLevel}%`}
      </Typography>
    </Box>
  )
}

export default BatteryLevel
