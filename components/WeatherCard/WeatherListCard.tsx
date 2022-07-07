import { Typography, Box } from '@mui/material'
// import Image from 'next/image'
import * as React from 'react'
import { PriceButton } from '../Button/PriceButton'
import { TemperatureTypography } from '../Typography/TemperatureTypography'
import { WeatherData } from '../../mocks/types'

interface IProps {
  key: number
  weatherAndFlight: WeatherData
}

export const WeatherListCard: React.FC<IProps> = (props) => {
  const date = props.weatherAndFlight.datetime
  const temperatureDay = props.weatherAndFlight.max_temp
  const temperatureNight = props.weatherAndFlight.low_temp

  const formatDate = (date: string) => {
    const iso = new Date(date).toISOString().slice(0, 10)
    return iso.split('-').reverse().join('.')
  }

  //   weatherImage
  //   departurePrice,
  //   arrivalPrice,
  // } = props.weatherAndFlight
  return (
    <Box
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
      }}
    >
      <Typography variant={'h6'} sx={{ mr: '10px' }}>
        {formatDate(date)}
      </Typography>
      {/*<Image src={weatherImage} width={'50px'} height={'50px'} alt="pogoda" />*/}
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
