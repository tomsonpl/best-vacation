import { Container, Typography, Divider, Box } from '@mui/material'
import { WeatherCardsContainer } from '../WeatherCardsContainer/WeatherCardsContainer'
import { WeatherListCard } from '../WeatherCard/WeatherListCard'
import useMediaQuery from '@mui/material/useMediaQuery'
import { useMemo, useState } from 'react'
// import Image from 'next/image'
// import church_dome_malta from '../../assets/PhotosOfCities/churchDomeMalta.jpg'
import { SelectedDateAndPriceContainer } from '../SelectedDateAndPriceContainer/SelectedDateAndPriceContainer'
import cartagenaSpainLandscape from '../../assets/PhotosOfCities/cartagenaSpainLandscape.jpg'
import { BaseButton } from '../Button/Button'

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
  defaultItemsToShow?: number
}

export const CountryResultList = (props: IProps) => {
  const { defaultItemsToShow = 14 } = props
  const [itemsToShow, setItemsToShow] = useState(defaultItemsToShow)
  const matches = useMediaQuery('(min-width:930px)')
  const renderWeatherList = useMemo(() => {
    return (
      <>
        {props.weatherAndFlight.map((day, index) => {
          if (index < itemsToShow) {
            return <WeatherListCard key={props.key} weatherAndFlight={day} />
          }
          return null
        })}
        {itemsToShow < props.weatherAndFlight.length && (
          <BaseButton
            sx={{ my: '0px', fontSize: '12px' }}
            onClick={() => setItemsToShow((prevState) => prevState + 9)}
          >
            Pokaż więcej
          </BaseButton>
        )}
      </>
    )
  }, [itemsToShow, props.key, props.weatherAndFlight])

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
          backgroundImage: `url(${cartagenaSpainLandscape.src})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
      >
        {/*<Image*/}
        {/*  src={cartagenaSpainLandscape}*/}
        {/*  alt="Zdjęcie miasta"*/}
        {/*  opacity={'0'} */}
        {/*  layout={'fill'}*/}
        {/*  // sizes={'100vw'}*/}
        {/*  objectFit="cover"*/}
        {/*  quality={100}*/}
        {/*  // height={200}*/}
        {/*  // width={300}*/}
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
