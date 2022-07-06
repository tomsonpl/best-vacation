import { Typography, Box } from '@mui/material'
import Image from 'next/image'
import * as React from 'react'
import { PriceButton } from '../Button/PriceButton'
import { TravelOption } from '../CountryResultList/CountryResultList'
import { TemperatureTypography } from '../Typography/TemperatureTypography'

interface IProps {
  key: number
  weatherAndFlight: TravelOption
}

export const WeatherListCard: React.FC<IProps> = (props) => {
  const {
    // borderColor,
    date,
    weatherImage,
    temperatureDay,
    temperatureNight,
    departurePrice,
    arrivalPrice,
  } = props.weatherAndFlight
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
        {date}
      </Typography>
      <Image src={weatherImage} width={'50px'} height={'50px'} alt="pogoda" />
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
        <PriceButton
          color={'blue'}
          borderColor={'blue'}
          price={departurePrice}
        />
        <PriceButton color={'red'} borderColor={'red'} price={arrivalPrice} />
      </Box>
    </Box>
  )
}
