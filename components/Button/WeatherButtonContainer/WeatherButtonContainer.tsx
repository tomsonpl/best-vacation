import Day from '../../../assets/WeatherIcons/Day.svg'
import CloudyDay1 from '../../../assets/WeatherIcons/CloudyDay1.svg'
import CloudyDay3 from '../../../assets/WeatherIcons/CloudyDay3.svg'
import Rainy4 from '../../../assets/WeatherIcons/Rainy4.svg'
import Thunder from '../../../assets/WeatherIcons/Thunder.svg'
import Cloudy from '../../../assets/WeatherIcons/Cloudy.svg'
import Rainy2 from '../../../assets/WeatherIcons/Rainy2.svg'
import Rainy3 from '../../../assets/WeatherIcons/Rainy3.svg'
import Rainy5 from '../../../assets/WeatherIcons/Rainy5.svg'
import Rainy6 from '../../../assets/WeatherIcons/Rainy6.svg'
import Rainy7 from '../../../assets/WeatherIcons/Rainy7.svg'
import Snowy2 from '../../../assets/WeatherIcons/Snowy2.svg'
import Snowy3 from '../../../assets/WeatherIcons/Snowy3.svg'
import Snowy4 from '../../../assets/WeatherIcons/Snowy4.svg'
import Snowy6 from '../../../assets/WeatherIcons/Snowy6.svg'

import { WeatherButton } from './WeatherButton'
import Box from '@mui/material/Box'

const options = [
  {
    id: 1,
    icon: Day.src,
    title: '11',
  },
  {
    id: 2,
    icon: CloudyDay1.src,
    title: '11',
  },
  {
    id: 3,
    icon: CloudyDay3.src,
    title: '22',
  },
  {
    id: 4,
    icon: Cloudy.src,
    title: '22',
  },
  {
    id: 5,
    icon: Rainy2.src,
    title: '33',
  },
  {
    id: 6,
    icon: Rainy3.src,
    title: '11',
  },
  {
    id: 7,
    icon: Rainy4.src,
    title: '33',
  },
  {
    id: 8,
    icon: Rainy5.src,
    title: '22',
  },
  {
    id: 9,
    icon: Rainy6.src,
    title: '33',
  },
  {
    id: 10,
    icon: Rainy7.src,
    title: '33',
  },
  {
    id: 11,
    icon: Snowy2.src,
    title: '33',
  },

  {
    id: 12,
    icon: Snowy3.src,
    title: '33',
  },
  {
    id: 13,
    icon: Snowy4.src,
    title: '33',
  },
  {
    id: 14,
    icon: Snowy6.src,
    title: '33',
  },
  {
    id: 15,
    icon: Thunder.src,
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
