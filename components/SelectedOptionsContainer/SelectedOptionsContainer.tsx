import { Box, Typography } from '@mui/material'
// import { TemperatureTypography } from '../Typography/TemperatureTypography'
import * as React from 'react'
import { TypographySlogan } from '../Typography/TypographySlogan'
import { WeatherButtonContainer } from '../Button/WeatherButtonContainer/WeatherButtonContainer'

interface IProps {
  query: {
    yourCity: string
    airportCity: string
    minTemperature: string
    maxTemperature: string
    perfectWeather: string
  }
}

export const SelectedOptionsContainer = (props: IProps) => {
  return (
    <Box>
      <Typography variant={'h1'} align={'center'}>
        Wylot z: {props.query.airportCity}
      </Typography>
      <TypographySlogan text={'Twoja wymarzona pogoda'} />
      <Typography
        align={'center'}
        variant={'subtitle1'}
        sx={{ color: 'black', fontSize: '15px' }}
      >
        {props.query.minTemperature}
        <span>&#8451;</span> - {props.query.maxTemperature} <span>&#8451;</span>
      </Typography>
      <WeatherButtonContainer activeIds={[1, 2, 3]} onClick={() => null} />
      {/*<TemperatureTypography temperature={temperatureDay} color={'black'} />*/}
      {/*<TemperatureTypography*/}
      {/*  temperature={temperatureNight}*/}
      {/*  color={'rgba(128, 128, 128, 1)'}*/}
      {/*/>*/}
    </Box>
  )
}
