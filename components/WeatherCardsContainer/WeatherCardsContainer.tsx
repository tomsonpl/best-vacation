import { WeatherCard } from '../WeatherCard/WeatherCard'
import Box from '@mui/material/Box'
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
  weatherData?: {
    borderColor?: string
    date: string
    weatherImage: string
    temperatureDay: number
    temperatureNight: number
  }[]
}

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
      {props.weatherData
        ? props.weatherData.map((day, id) => {
            return (
              <WeatherCard
                key={id}
                date={day.date}
                weatherImage={day.weatherImage}
                temperatureDay={day.temperatureDay}
                temperatureNight={day.temperatureNight}
              />
            )
          })
        : props.weatherAndFlight?.map((day, id) => {
            return (
              <WeatherCard
                key={id}
                date={day.date}
                weatherImage={day.weatherImage}
                temperatureDay={day.temperatureDay}
                temperatureNight={day.temperatureNight}
                departurePrice={day.departurePrice}
                arrivalPrice={day.arrivalPrice}
              />
            )
          })}
    </Box>
  )
}
