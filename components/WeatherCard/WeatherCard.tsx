import { Box, Typography } from '@mui/material'
import Image from 'next/image'
import * as React from 'react'
import { PriceButton } from '../Button/PriceButton'
import { TemperatureTypography } from '../Typography/TemperatureTypography'
import { weatherIconsMap } from '../../mocks/weatherIconsOptions'

interface IProps {
  key: number
  borderColor?: string
  date: string
  weatherImage: number
  temperatureDay: number
  temperatureNight: number
  departurePrice?: number
  arrivalPrice?: number
  hidePrice?: true
  onClick: () => void
}

export const WeatherCard: React.FC<IProps> = ({
  borderColor,
  date,
  weatherImage,
  temperatureDay,
  temperatureNight,
  departurePrice,
  arrivalPrice,
  hidePrice,
  onClick,
}) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        flex: '14%',
      }}
    >
      <Box
        onClick={onClick}
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
          margin: '5px',
          boxShadow: 2,
          cursor: 'pointer',
          '&:hover': {
            background: '#e8e6e6',
          },
        }}
      >
        <Typography variant={'h6'}>{date}</Typography>
        <Image
          src={weatherIconsMap[weatherImage].icon}
          width={'50px'}
          height={'50px'}
          alt="pogoda"
        />
        <Box sx={{ display: 'flex', flexDirection: 'row', gap: '10px' }}>
          <TemperatureTypography temperature={temperatureDay} color={'black'} />
          <TemperatureTypography
            temperature={temperatureNight}
            color={'rgba(128, 128, 128, 1)'}
          />
        </Box>
      </Box>
      {!hidePrice ? (
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '5px',
            mb: '15px',
          }}
        >
          <PriceButton
            color={'blue'}
            borderColor={'blue'}
            price={departurePrice}
          />
          <PriceButton color={'red'} borderColor={'red'} price={arrivalPrice} />
        </Box>
      ) : null}
    </Box>
  )
}
