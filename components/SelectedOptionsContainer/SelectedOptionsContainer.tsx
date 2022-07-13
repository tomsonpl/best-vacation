import { Box, Typography } from '@mui/material'
import * as React from 'react'
import { TypographySlogan } from '../Typography/TypographySlogan'
import { WeatherButtonContainer } from '../Button/WeatherButtonContainer/WeatherButtonContainer'

interface IProps {
  query: {
    airportCity?: string
    minTemperature?: string
    maxTemperature?: string
    perfectWeather?: string[]
  }
}

export const SelectedOptionsContainer = (props: IProps) => {
  const convertToNumber = props.query.perfectWeather?.map((str) => {
    return parseInt(str, 10)
  })
  return (
    <Box>
      <Typography variant={'h1'} align={'center'}>
        Wylot z: {props.query.airportCity}
      </Typography>
      <TypographySlogan align={'center'} text={'Twoja wymarzona pogoda'} />
      <Typography
        align={'center'}
        variant={'subtitle1'}
        sx={{ color: 'black', fontSize: '15px' }}
      >
        {props.query.minTemperature}
        <span>&#8451;</span> - {props.query.maxTemperature} <span>&#8451;</span>
      </Typography>
      <WeatherButtonContainer
        activeIds={convertToNumber}
        onClick={() => null}
        showOnlyActive={true}
        sx={{ justifyContent: 'center' }}
      />
    </Box>
  )
}
