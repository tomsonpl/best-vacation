import { Box, Typography } from '@mui/material'
// import { TemperatureTypography } from '../Typography/TemperatureTypography'
import * as React from 'react'
import { TypographySlogan } from '../Typography/TypographySlogan'
import { WeatherButtonContainer } from '../Button/WeatherButtonContainer/WeatherButtonContainer'

export const SelectedOptionsContainer = () => {
  return (
    <Box>
      <Typography variant={'h1'} align={'center'}>
        Wylot z: Warszawa
      </Typography>
      <TypographySlogan text={'Twoja wymarzona pogoda'} />
      <Typography
        align={'center'}
        variant={'subtitle1'}
        sx={{ color: 'black', fontSize: '15px' }}
      >
        20 <span>&#8451;</span> - 20 <span>&#8451;</span>
      </Typography>
      <WeatherButtonContainer />
      {/*<TemperatureTypography temperature={temperatureDay} color={'black'} />*/}
      {/*<TemperatureTypography*/}
      {/*  temperature={temperatureNight}*/}
      {/*  color={'rgba(128, 128, 128, 1)'}*/}
      {/*/>*/}
    </Box>
  )
}
