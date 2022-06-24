import { NextPage } from 'next'
import { Container } from '@mui/material'
import { TypographySlogan } from '../components/Typography/TypographySlogan'
import { HeaderOfOffer } from '../components/HeaderOfOffer/HeaderOfOffer'
import CloudyDay1 from '../assets/WeatherIcons/CloudyDay1.svg'

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
    ],
  },
]

const List: NextPage = () => {
  return (
    <Container sx={{ mt: '60px' }}>
      <TypographySlogan text={'Odpowiednie dla Ciebie'} />
      {data.map((offer) => {
        return (
          <HeaderOfOffer
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
