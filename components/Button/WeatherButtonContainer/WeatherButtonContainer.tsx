import CloudyDay1 from '../../../assets/WeatherIcons/CloudyDay1.svg'
import CloudyDay3 from '../../../assets/WeatherIcons/CloudyDay3.svg'
import Rainy4 from '../../../assets/WeatherIcons/Rainy4.svg'
import Snowy4 from '../../../assets/WeatherIcons/Snowy4.svg'

import { WeatherButton } from './WeatherButton'
import Box from '@mui/material/Box'

const options = [
  {
    id: 1,
    icon: CloudyDay1.src,
    title: '11',
  },
  {
    id: 2,
    icon: CloudyDay3.src,
    title: '22',
  },
  {
    id: 3,
    icon: Snowy4.src,
    title: '33',
  },
  {
    id: 4,
    icon: Rainy4.src,
    title: '11',
  },
  {
    id: 5,
    icon: CloudyDay1.src,
    title: '22',
  },
  {
    id: 6,
    icon: CloudyDay1.src,
    title: '33',
  },
  {
    id: 7,
    icon: CloudyDay1.src,
    title: '11',
  },
  {
    id: 8,
    icon: CloudyDay1.src,
    title: '22',
  },
  {
    id: 9,
    icon: CloudyDay1.src,
    title: '33',
  },
]

export const WeatherButtonContainer = () => {
  return (
    <Box
      sx={{
        marginTop: '20px',
        display: 'flex',
        flexDirection: 'row',
        overflowY: 'scroll',
        justifyContent: { xs: 'space-between', md: 'center' },
      }}
    >
      {options.map((option) => {
        return (
          <WeatherButton
            key={option.id}
            icon={option.icon}
            title={option.title}
          />
        )
      })}
    </Box>
  )
}
