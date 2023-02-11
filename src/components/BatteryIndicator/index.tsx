import Battery0BarTwoToneIcon from '@mui/icons-material/Battery0BarTwoTone'
import Battery1BarTwoToneIcon from '@mui/icons-material/Battery1BarTwoTone'
import Battery2BarTwoToneIcon from '@mui/icons-material/Battery2BarTwoTone'
import Battery3BarTwoToneIcon from '@mui/icons-material/Battery3BarTwoTone'
import Battery4BarTwoToneIcon from '@mui/icons-material/Battery4BarTwoTone'
import Battery5BarTwoToneIcon from '@mui/icons-material/Battery5BarTwoTone'
import Battery6BarTwoToneIcon from '@mui/icons-material/Battery6BarTwoTone'
import BatteryFullTwoToneIcon from '@mui/icons-material/BatteryFullTwoTone'
import BatteryChargingFullTwoToneIcon from '@mui/icons-material/BatteryChargingFullTwoTone'

type BatteryIndicatorProps = {
  isCharging?: boolean
  batteryLevel: number
}

const BatteryIndicator = ({
  isCharging = false,
  batteryLevel = 0,
}: BatteryIndicatorProps) => {
  const level =
    batteryLevel === 100
      ? '100'
      : (Math.round(batteryLevel / 10) * 10).toString()

  const BatteryLevels: any = {
    '0': <Battery0BarTwoToneIcon />,
    '10': <Battery1BarTwoToneIcon />,
    '20': <Battery2BarTwoToneIcon />,
    '30': <Battery2BarTwoToneIcon />,
    '40': <Battery3BarTwoToneIcon />,
    '50': <Battery4BarTwoToneIcon />,
    '60': <Battery5BarTwoToneIcon />,
    '70': <Battery5BarTwoToneIcon />,
    '80': <Battery6BarTwoToneIcon />,
    '90': <Battery6BarTwoToneIcon />,
    '100': <BatteryFullTwoToneIcon />,
    charging: <BatteryChargingFullTwoToneIcon />,
  }

  return isCharging ? BatteryLevels['charging'] : BatteryLevels[level]
}

export default BatteryIndicator
