import { Container, Typography } from '@mui/material'
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
    <Container
      sx={{
        borderRadius: '5px',
        height: 'auto',
        width: '90%',
        boxShadow: 2,
        py: '20px',
        backgroundColor: '#e8e6e6',
      }}
    >
      <Typography variant={'h5'} align={'center'}>
        Wylot z miasta: {props.query.airportCity}
      </Typography>
      <TypographySlogan align={'center'} text={'Twoja wymarzona pogoda'} />
      <Typography
        align={'center'}
        variant={'h5'}
        sx={{ color: 'black', m: '16px' }}
      >
        {props.query.minTemperature}
        <span>&#8451;</span> - {props.query.maxTemperature}
        <span>&#8451;</span>
      </Typography>
      <WeatherButtonContainer
        activeIds={convertToNumber}
        onClick={() => null}
        showOnlyActive={true}
        sx={{ justifyContent: 'center', mt: '0px' }}
      />
    </Container>
  )
}
