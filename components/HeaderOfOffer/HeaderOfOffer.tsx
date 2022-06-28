import { Container, Typography, Divider, Box } from '@mui/material'
import { WeatherCardsContainer } from '../WeatherCardsContainer/WeatherCardsContainer'
import { WeatherListCard } from '../WeatherCard/WeatherListCard'
import useMediaQuery from '@mui/material/useMediaQuery'
import { useMemo } from 'react'
import Image from 'next/image'
import church_dome_malta from '../../assets/PhotosOfCities/churchDomeMalta.jpg'
import { SelectedDateAndPriceContainer } from '../SelectedDateAndPriceContainer/SelectedDateAndPriceContainer'

export interface TravelOption {
  date: string
  weatherImage: string
  temperatureDay: number
  temperatureNight: number
  departurePrice?: number
  arrivalPrice?: number
}

interface IProps {
  cityNumber: number
  key: number
  city: string
  country: string
  weatherAndFlight: TravelOption[]
}

export const HeaderOfOffer = (props: IProps) => {
  const matches = useMediaQuery('(min-width:930px)')
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
        py: '15px',
        mb: '30px',
      }}
    >
      <Typography variant={'h5'} sx={{ mb: '5px' }}>
        {props.cityNumber}. {props.city}, {props.country}
      </Typography>
      <Divider sx={{ mb: '10px' }} />
      <Box
        sx={{
          position: 'relative',
          height: '200px',
          width: 'auto',
        }}
      >
        <Image
          src={church_dome_malta}
          alt="Zdjęcie miasta"
          layout={'fill'}
          // sizes={'100vw'}
          objectFit="cover"
          quality={100}
          // height={200}
          // width={300}
        />
      </Box>
      <Divider sx={{ mt: '10px', mb: { xs: '10px', sm: 0 } }} />
      <SelectedDateAndPriceContainer />
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
