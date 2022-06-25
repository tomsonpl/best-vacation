import Box from '@mui/material/Box'
import { Typography } from '@mui/material'
import Image from 'next/image'
import * as React from 'react'

interface IProps {
  key: number
  borderColor?: string
  date: string
  weatherImage: string
  temperatureDay: number
  temperatureNight: number
  departurePrice?: number
  arrivalPrice?: number
}

export const WeatherCard: React.FC<IProps> = ({
  borderColor,
  date,
  weatherImage,
  temperatureDay,
  temperatureNight,
  departurePrice,
  arrivalPrice,
}) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <Box
        sx={{
          // border: 1,
          borderRadius: '5px',
          height: '90px',
          width: '90px',
          borderColor: borderColor,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '5px',
          px: '10px',
          margin: '7px',
          boxShadow: 2,
        }}
      >
        <Typography sx={{ fontSize: '12px' }}>{date}</Typography>
        <Image src={weatherImage} width={'50px'} height={'50px'} alt="pogoda" />
        <Box sx={{ display: 'flex', flexDirection: 'row', gap: '10px' }}>
          <Typography sx={{ color: 'black', fontSize: '10px' }}>
            {temperatureDay} <span>&#8451;</span>
          </Typography>
          <Typography
            sx={{ color: 'rgba(128, 128, 128, 1)', fontSize: '10px' }}
          >
            {temperatureNight} <span>&#8451;</span>
          </Typography>
        </Box>
      </Box>
      {departurePrice ? (
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Typography sx={{ fontSize: '12px', color: 'red' }}>
            {departurePrice} zł
          </Typography>
          <Typography sx={{ fontSize: '12px', color: 'blue' }}>
            {arrivalPrice} zł
          </Typography>
        </Box>
      ) : null}
    </Box>
  )
}
