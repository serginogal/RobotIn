import WifiRoundedIcon from '@mui/icons-material/WifiRounded'
import WifiOffRoundedIcon from '@mui/icons-material/WifiOffRounded'

type NetworkIndicatorProps = {
  networkConnected: boolean
}
const NetworkIndicator = ({ networkConnected }: NetworkIndicatorProps) => {
  return networkConnected ? <WifiRoundedIcon /> : <WifiOffRoundedIcon />
}

export default NetworkIndicator
