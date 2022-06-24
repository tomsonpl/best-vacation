import { WeatherCard } from '../WeatherCard/WeatherCard'
import Box from '@mui/material/Box'
import CloudyDay1 from '../../assets/WeatherIcons/CloudyDay1.svg'
import * as React from 'react'

interface IProps {
  sx: Record<string, unknown>
  weatherAndFlight?: {
    date: string
    weatherImage: string
    temperatureDay: number
    temperatureNight: number
    departurePrice: number
    arrivalPrice: number
  }[]
}

const weatherData = [
  {
    id: 1,
    date: '01.03.2022',
    weatherImage: CloudyDay1,
    temperatureDay: 27,
    temperatureNight: 12,
  },
  {
    id: 2,
    date: '02.03.2022',
    weatherImage: CloudyDay1,
    temperatureDay: 31,
    temperatureNight: 10,
  },
  {
    id: 3,
    date: '03.03.2022',
    weatherImage: CloudyDay1,
    temperatureDay: 25,
    temperatureNight: 17,
  },
  {
    id: 4,
    date: '04.03.2022',
    weatherImage: CloudyDay1,
    temperatureDay: 31,
    temperatureNight: 15,
  },
  {
    id: 5,
    date: '05.03.2022',
    weatherImage: CloudyDay1,
    temperatureDay: 25,
    temperatureNight: 17,
  },
  {
    id: 6,
    date: '06.03.2022',
    weatherImage: CloudyDay1,
    temperatureDay: 31,
    temperatureNight: 15,
  },
  {
    id: 7,
    date: '07.03.2022',
    weatherImage: CloudyDay1,
    temperatureDay: 25,
    temperatureNight: 17,
  },
  {
    id: 8,
    date: '08.03.2022',
    weatherImage: CloudyDay1,
    temperatureDay: 31,
    temperatureNight: 15,
  },
  {
    id: 9,
    date: '08.03.2022',
    weatherImage: CloudyDay1,
    temperatureDay: 31,
    temperatureNight: 15,
  },
  {
    id: 9,
    date: '08.03.2022',
    weatherImage: CloudyDay1,
    temperatureDay: 31,
    temperatureNight: 15,
  },
]

export const WeatherCardsContainer = (props: IProps) => {
  return (
    <Box
      sx={{
        marginTop: '10px',
        display: 'flex',
        flexDirection: 'row',
        // overflowY: 'scroll',
        justifyContent: 'space-between',
        ...props.sx,
      }}
    >
      {weatherData.map((day) => {
        return (
          <WeatherCard
            key={day.id}
            date={day.date}
            weatherImage={day.weatherImage}
            temperatureDay={day.temperatureDay}
            temperatureNight={day.temperatureNight}
          />
        )
      })}
    </Box>
  )
}
