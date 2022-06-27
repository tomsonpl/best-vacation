import { Container, Typography, Divider } from '@mui/material'
import { WeatherCardsContainer } from '../WeatherCardsContainer/WeatherCardsContainer'
import { WeatherListCard } from '../WeatherCard/WeatherListCard'
import useMediaQuery from '@mui/material/useMediaQuery'
import { useMemo } from 'react'

export interface TravelOption {
  date: string
  weatherImage: string
  temperatureDay: number
  temperatureNight: number
  departurePrice?: number
  arrivalPrice?: number
}

interface IProps {
  key: number
  city: string
  country: string
  weatherAndFlight: TravelOption[]
}

export const HeaderOfOffer = (props: IProps) => {
  const matches = useMediaQuery('(min-width:700px)')
  const renderWeatherList = useMemo(() => {
    return props.weatherAndFlight.map((day) => {
      return <WeatherListCard key={props.key} weatherAndFlight={day} />
    })
  }, [props.key, props.weatherAndFlight])
  return (
    <Container
      sx={{
        // position: 'absolute',
        backgroundColor: 'white',
        width: '90%',
        height: 'auto',
        // height: 'auto',
        borderRadius: '10px',
        boxShadow: 3,
        mb: '15px',
      }}
    >
      <Typography>
        {props.key}
        {props.city},{props.country}
      </Typography>
      <Divider />
      <Typography>ble</Typography>
      <Divider />
      {matches ? (
        <WeatherCardsContainer
          key={props.key}
          weatherAndFlight={props.weatherAndFlight}
          sx={{ flexWrap: 'wrap' }}
        />
      ) : (
        renderWeatherList
      )}
    </Container>
  )
}
