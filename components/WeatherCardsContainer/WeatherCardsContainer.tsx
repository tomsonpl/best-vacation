import { WeatherCard } from '../WeatherCard/WeatherCard'
import Box from '@mui/material/Box'
import * as React from 'react'
import { WeatherData } from '../../mocks/types'

interface IProps {
  sx: Record<string, unknown>
  weatherAndFlight: WeatherData[]
  hidePrice?: true
}

export const WeatherCardsContainer = (props: IProps) => {
  const formatDate = (date: string) => {
    const iso = new Date(date).toISOString().slice(0, 10)
    return iso.split('-').reverse().join('.')
  }
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
      {props.weatherAndFlight.map((day, id) => {
        return (
          <WeatherCard
            key={id}
            date={formatDate(day.datetime)}
            // weatherImage={day.weatherImage}
            temperatureDay={day.max_temp}
            temperatureNight={day.low_temp}
            departurePrice={400}
            arrivalPrice={400}
            hidePrice={props.hidePrice}
          />
        )
      })}
    </Box>
  )
}
