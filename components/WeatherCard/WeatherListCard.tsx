import { Typography, Box } from '@mui/material'
import Image from 'next/image'
import * as React from 'react'
import { PriceButton } from '../Button/PriceButton'
import { TravelOption } from '../HeaderOfOffer/HeaderOfOffer'

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
        my: '10px',
        boxShadow: 2,
      }}
    >
      <Typography sx={{ fontSize: '12px', mr: '10px' }}>{date}</Typography>
      <Image src={weatherImage} width={'50px'} height={'50px'} alt="pogoda" />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          gap: '10px',
        }}
      >
        <Typography sx={{ color: 'black', fontSize: '10px' }}>
          {temperatureDay} <span>&#8451;</span>
        </Typography>
        <Typography sx={{ color: 'rgba(128, 128, 128, 1)', fontSize: '10px' }}>
          {temperatureNight} <span>&#8451;</span>
        </Typography>
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
