import { NextPage } from 'next'
import { Container, Divider, Modal } from '@mui/material'
import { HeaderOfOffer } from '../components/HeaderOfOffer/HeaderOfOffer'
import CloudyDay1 from '../assets/WeatherIcons/CloudyDay1.svg'
import * as React from 'react'
import { BaseButton } from '../components/Button/Button'
import { SelectedOptionsContainer } from '../components/SelectedOptionsContainer/SelectedOptionsContainer'
import { ShortenedForm } from '../components/ShortenedForm'
import { useState } from 'react'
// import { Slogan } from '../components/Slogan'

const data = [
  {
    id: 1,
    city: 'Valetta',
    country: 'Malta',
    weatherAndFlight: [
      {
        id: 1,
        date: '01.03.2022',
        weatherImage: CloudyDay1,
        temperatureDay: 27,
        temperatureNight: 12,
        departurePrice: 300,
        arrivalPrice: 400,
      },
      {
        id: 2,
        date: '02.03.2022',
        weatherImage: CloudyDay1,
        temperatureDay: 31,
        temperatureNight: 10,
        departurePrice: 300,
        arrivalPrice: 400,
      },
      {
        id: 3,
        date: '01.03.2022',
        weatherImage: CloudyDay1,
        temperatureDay: 27,
        temperatureNight: 12,
        departurePrice: 300,
        arrivalPrice: 400,
      },
      {
        id: 4,
        date: '02.03.2022',
        weatherImage: CloudyDay1,
        temperatureDay: 31,
        temperatureNight: 10,
        departurePrice: 300,
        arrivalPrice: 400,
      },
      {
        id: 5,
        date: '01.03.2022',
        weatherImage: CloudyDay1,
        temperatureDay: 27,
        temperatureNight: 12,
        departurePrice: 300,
        arrivalPrice: 400,
      },
      {
        id: 6,
        date: '02.03.2022',
        weatherImage: CloudyDay1,
        temperatureDay: 31,
        temperatureNight: 10,
        departurePrice: 300,
        arrivalPrice: 400,
      },
      {
        id: 7,
        date: '01.03.2022',
        weatherImage: CloudyDay1,
        temperatureDay: 27,
        temperatureNight: 12,
        departurePrice: 300,
        arrivalPrice: 400,
      },
      {
        id: 8,
        date: '02.03.2022',
        weatherImage: CloudyDay1,
        temperatureDay: 31,
        temperatureNight: 10,
        departurePrice: 300,
        arrivalPrice: 400,
      },
      {
        id: 9,
        date: '01.03.2022',
        weatherImage: CloudyDay1,
        temperatureDay: 27,
        temperatureNight: 12,
        departurePrice: 300,
        arrivalPrice: 400,
      },
      {
        id: 10,
        date: '02.03.2022',
        weatherImage: CloudyDay1,
        temperatureDay: 31,
        temperatureNight: 10,
        departurePrice: 300,
        arrivalPrice: 400,
      },
      {
        id: 11,
        date: '02.03.2022',
        weatherImage: CloudyDay1,
        temperatureDay: 31,
        temperatureNight: 10,
        departurePrice: 300,
        arrivalPrice: 400,
      },
      {
        id: 12,
        date: '01.03.2022',
        weatherImage: CloudyDay1,
        temperatureDay: 27,
        temperatureNight: 12,
        departurePrice: 300,
        arrivalPrice: 400,
      },
      {
        id: 13,
        date: '02.03.2022',
        weatherImage: CloudyDay1,
        temperatureDay: 31,
        temperatureNight: 10,
        departurePrice: 300,
        arrivalPrice: 400,
      },
      {
        id: 14,
        date: '01.03.2022',
        weatherImage: CloudyDay1,
        temperatureDay: 27,
        temperatureNight: 12,
        departurePrice: 300,
        arrivalPrice: 400,
      },
    ],
  },
  {
    id: 2,
    city: 'Alicante',
    country: 'Hiszpania',
    weatherAndFlight: [
      {
        id: 1,
        date: '01.03.2022',
        weatherImage: CloudyDay1,
        temperatureDay: 27,
        temperatureNight: 12,
        departurePrice: 300,
        arrivalPrice: 400,
      },
      {
        id: 2,
        date: '02.03.2022',
        weatherImage: CloudyDay1,
        temperatureDay: 31,
        temperatureNight: 10,
        departurePrice: 300,
        arrivalPrice: 500,
      },
      {
        id: 3,
        date: '01.03.2022',
        weatherImage: CloudyDay1,
        temperatureDay: 27,
        temperatureNight: 12,
        departurePrice: 300,
        arrivalPrice: 400,
      },
      {
        id: 4,
        date: '02.03.2022',
        weatherImage: CloudyDay1,
        temperatureDay: 31,
        temperatureNight: 10,
        departurePrice: 300,
        arrivalPrice: 400,
      },
    ],
  },
]

const List: NextPage = () => {
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  return (
    <Container sx={{ mt: '80px' }}>
      <SelectedOptionsContainer />
      <BaseButton
        variant={'text'}
        sx={{
          color: '#1976d2',
          my: '0',
          textTransform: 'lowerCase',
          fontSize: '15px',
        }}
        onClick={handleOpen}
      >
        Zmień
      </BaseButton>
      <Divider sx={{ mb: '20px' }} />
      <Modal open={open}>
        <ShortenedForm onClose={handleClose} />
      </Modal>
      {/*<Box sx={{ mt: '10%' }}>*/}
      {/*  <Slogan>Brak wyników spełniających powyższe kryteria.</Slogan>*/}
      {/*  <Slogan>Zmień kryteria wyszukiwania.</Slogan>*/}
      {/*</Box>*/}
      {data.map((offer) => {
        return (
          <HeaderOfOffer
            cityNumber={offer.id}
            key={offer.id}
            city={offer.city}
            country={offer.country}
            weatherAndFlight={offer.weatherAndFlight}
          />
        )
      })}
    </Container>
  )
}

export default List
