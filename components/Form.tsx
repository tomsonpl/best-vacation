import { YourCityWeatherInput } from './Input/YourCityWeatherInput'
import { WeatherCardsContainer } from './WeatherCardsContainer/WeatherCardsContainer'
import { AirportCityInput } from './Input/AirportCityInput'
import { TypographySlogan } from './Typography/TypographySlogan'
import { NumberInput } from './Input/NumberInput'
import { Typography, Box } from '@mui/material'
import { WeatherButtonContainer } from './Button/WeatherButtonContainer/WeatherButtonContainer'
import * as React from 'react'

export const Form = () => {
  return (
    <>
      <YourCityWeatherInput />
      <WeatherCardsContainer />
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
