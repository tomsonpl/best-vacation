import Day from '../../../assets/WeatherIcons/Day.svg'
import CloudyDay1 from '../../../assets/WeatherIcons/CloudyDay1.svg'
import CloudyDay3 from '../../../assets/WeatherIcons/CloudyDay3.svg'
import Rainy4 from '../../../assets/WeatherIcons/Rainy4.svg'
import Thunder from '../../../assets/WeatherIcons/Thunder.svg'
import Cloudy from '../../../assets/WeatherIcons/Cloudy.svg'
import Rainy3 from '../../../assets/WeatherIcons/Rainy3.svg'
import Rainy5 from '../../../assets/WeatherIcons/Rainy5.svg'
import Rainy6 from '../../../assets/WeatherIcons/Rainy6.svg'
import Rainy7 from '../../../assets/WeatherIcons/Rainy7.svg'
import Snowy2 from '../../../assets/WeatherIcons/Snowy2.svg'
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
    icon: Rainy3.src,
    title: '11',
  },
  {
    id: 6,
    icon: Rainy4.src,
    title: '33',
  },
  {
    id: 7,
    icon: Rainy5.src,
    title: '22',
  },
  {
    id: 8,
    icon: Rainy6.src,
    title: '33',
  },
  {
    id: 9,
    icon: Rainy7.src,
    title: '33',
  },
  {
    id: 10,
    icon: Snowy2.src,
    title: '33',
  },
  {
    id: 11,
    icon: Snowy6.src,
    title: '33',
  },
  {
    id: 12,
    icon: Thunder.src,
    title: '33',
  },
]

interface IProps {
  activeIds?: number[]
  onClick: (id: number) => void
  showOnlyActive: boolean
}

export const WeatherButtonContainer = ({
  activeIds,
  onClick,
  showOnlyActive,
}: IProps) => {
  const weatherButtonList =
    showOnlyActive && activeIds?.length
      ? options.filter((option) => activeIds.includes(option.id))
      : options
  return (
    <Box
      sx={{
        marginTop: '20px',
        display: 'flex',
        flexDirection: 'row',
        overflowY: 'scroll',
        justifyContent: { xs: 'space-between', xl: 'center' },
      }}
    >
      {weatherButtonList.map((option) => {
        const isActive = activeIds?.includes(option.id)
        return (
          <WeatherButton
            onClick={() => onClick(option.id)}
            key={option.id}
            icon={option.icon}
            title={option.title}
            isActive={isActive}
          />
        )
      })}
    </Box>
  )
}
