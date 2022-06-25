import { YourCityWeatherInput } from './Input/YourCityWeatherInput'
import { WeatherCardsContainer } from './WeatherCardsContainer/WeatherCardsContainer'
import { AirportCityInput } from './Input/AirportCityInput'
import { TypographySlogan } from './Typography/TypographySlogan'
import { NumberInput } from './Input/NumberInput'
import { Typography, Box } from '@mui/material'
import { WeatherButtonContainer } from './Button/WeatherButtonContainer/WeatherButtonContainer'
import * as React from 'react'
import CloudyDay1 from '../assets/WeatherIcons/CloudyDay1.svg'

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

export const Form = () => {
  return (
    <>
      <YourCityWeatherInput />
      <WeatherCardsContainer
        weatherData={weatherData}
        sx={{ overflowY: 'scroll' }}
      />
      <AirportCityInput />
      <TypographySlogan text={'Twoja wymarzona pogoda'} />
      <Box
        sx={{
          mt: '20px',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <NumberInput label={'Od'} defaultValue={20} />
        <Typography sx={{ mr: 2 }}>&#8451;</Typography>
        <NumberInput label={'Do'} defaultValue={25} />
        <Typography>&#8451;</Typography>
      </Box>
      <WeatherButtonContainer />
    </>
  )
}
