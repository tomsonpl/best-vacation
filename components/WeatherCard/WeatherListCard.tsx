import { Typography, Box } from '@mui/material'
import Image from 'next/image'
import * as React from 'react'
import { PriceButton } from '../Button/PriceButton'
import { TemperatureTypography } from '../Typography/TemperatureTypography'
import { WeatherData } from '../../mocks/types'
import { weatherIconsMap } from '../../mocks/weatherIconsOptions'

interface IProps {
  key: number
  weatherAndFlight: WeatherData
  onDetailClick: () => void
}

export const WeatherListCard: React.FC<IProps> = (props) => {
  const date = props.weatherAndFlight.valid_date
  const temperatureDay = props.weatherAndFlight.max_temp
  const temperatureNight = props.weatherAndFlight.low_temp
  const weatherImage = props.weatherAndFlight.weather.code

  const formatDate = (date: string) => {
    const iso = new Date(date).toISOString().slice(0, 10)
    return iso.split('-').reverse().join('.')
  }

  //   departurePrice,
  //   arrivalPrice,
  // } = props.weatherAndFlight
  return (
    <Box
      onClick={props.onDetailClick}
      sx={{
        // border: 1,
        borderRadius: '5px',
        height: 'auto',
        width: '100%',
        // borderColor: borderColor,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '5px',
        // px: '10px',
        gap: { xs: 0, sm: '15px' },
        my: '10px',
        boxShadow: 2,
        cursor: 'pointer',
        '&:hover': {
          background: '#e8e6e6',
        },
      }}
    >
      <Typography variant={'h6'}>{formatDate(date)}</Typography>
      <Image
        src={weatherIconsMap[weatherImage].icon}
        width={'50px'}
        height={'50px'}
        alt="pogoda"
      />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          gap: { xs: '10px', sm: '15px' },
        }}
      >
        <TemperatureTypography temperature={temperatureDay} color={'black'} />
        <TemperatureTypography
          temperature={temperatureNight}
          color={'rgba(128, 128, 128, 1)'}
        />
        <PriceButton color={'blue'} borderColor={'blue'} price={400} />
        <PriceButton color={'red'} borderColor={'red'} price={500} />
      </Box>
    </Box>
  )
}
