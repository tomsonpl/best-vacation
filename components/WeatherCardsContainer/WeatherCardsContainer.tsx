import { WeatherCard } from '../WeatherCard/WeatherCard'
import Box from '@mui/material/Box'
import * as React from 'react'
import { TravelOption } from '../CountryResultList/CountryResultList'

interface IProps {
  sx: Record<string, unknown>
  weatherAndFlight: TravelOption[]
  hidePrice?: true
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
      {props.weatherAndFlight &&
        props.weatherAndFlight.map((day, id) => {
          return (
            <WeatherCard
              key={id}
              date={day.date}
              weatherImage={day.weatherImage}
              temperatureDay={day.temperatureDay}
              temperatureNight={day.temperatureNight}
              departurePrice={day.departurePrice}
              arrivalPrice={day.arrivalPrice}
              hidePrice={props.hidePrice}
            />
          )
        })}
    </Box>
  )
}
