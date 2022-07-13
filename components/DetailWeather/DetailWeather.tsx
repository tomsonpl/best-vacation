import { Box, Typography } from '@mui/material'
import * as React from 'react'
import Image from 'next/image'
import { TemperatureTypography } from '../Typography/TemperatureTypography'
import { StandardDetailTypography } from '../Typography/StandardDetailTypography'
import { BoldDetailTypography } from '../Typography/BoldDetailTypography'
import AirIcon from '@mui/icons-material/Air'
import OpacityOutlinedIcon from '@mui/icons-material/OpacityOutlined'
import CloudQueueIcon from '@mui/icons-material/CloudQueue'
import PercentIcon from '@mui/icons-material/Percent'
import AcUnitIcon from '@mui/icons-material/AcUnit'
import WbTwilightIcon from '@mui/icons-material/WbTwilight'
import { WeatherData } from '../../mocks/types'
import { weatherIconsMap } from '../../mocks/weatherIconsOptions'

interface IProps {
  data: WeatherData
  city: string
}

export const DetailWeather = ({ data, city }: IProps) => {
  const formatDate = (date: string) => {
    const iso = new Date(date).toISOString().slice(0, 10)
    return iso.split('-').reverse().join('.')
  }

  const formatWind = (speed: number) => {
    return Math.round((speed * 3600) / 1000)
  }

  const timestampToTime = (unix: number) => {
    const date = new Date(unix * 1000)
    const hours = date.getHours()
    const minutes = date.getMinutes()
    return hours + ':' + minutes.toString().padStart(2, '0')
  }
  return (
    <Box sx={{ pb: '20px' }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          mt: '20px',
          gap: '10%',
        }}
      >
        <Typography variant={'h5'} sx={{ fontWeight: '700' }}>
          {city}
        </Typography>
        <Typography variant={'h5'} sx={{ fontWeight: '700' }}>
          {formatDate(data.valid_date)}
        </Typography>
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: { xs: '10px', sm: '20px', md: '30px' },
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            px: '30px',
            gap: '10%',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <TemperatureTypography
              temperature={data.max_temp}
              color={'black'}
              sx={{ fontSize: '30px' }}
            />
            <TemperatureTypography
              temperature={data.low_temp}
              color={'rgba(128, 128, 128, 1)'}
              sx={{ fontSize: '18px' }}
            />
          </Box>
          <Box>
            <Image
              src={weatherIconsMap[data.weather.code].icon}
              width={'100px'}
              height={'100px'}
              alt="pogoda"
            />
          </Box>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            gap: { xs: '8px', sm: '10px', md: '30px' },
            width: 'auto',
            backgroundColor: '#e2ebf6',
            p: '30px',
            borderRadius: '10px',
            boxShadow: 3,
          }}
        >
          <Box>
            <StandardDetailTypography
              text={'Wiatr'}
              icon={<AirIcon />}
              unit={' km/h'}
              measure={formatWind(data.wind_spd)}
            />
            <BoldDetailTypography>
              Max {formatWind(data.wind_gust_spd)} km/h
            </BoldDetailTypography>
          </Box>
          <Box>
            <StandardDetailTypography
              text={'Deszcz'}
              icon={<OpacityOutlinedIcon />}
              unit={' mm'}
              measure={data.precip.toFixed(2)}
            />
            <StandardDetailTypography
              text={'Zachmurzenie'}
              icon={<CloudQueueIcon />}
              unit={'%'}
              measure={data.clouds}
            />
          </Box>
          <Box>
            <StandardDetailTypography
              text={'Szansa opadów'}
              icon={<PercentIcon />}
              unit={'%'}
              measure={data.pop}
            />
            <StandardDetailTypography
              text={'Śnieg'}
              icon={<AcUnitIcon />}
              unit={' mm'}
              measure={data.snow}
            />
          </Box>
          <Box>
            <StandardDetailTypography
              text={'Wschód słońca'}
              icon={<WbTwilightIcon />}
              measure={timestampToTime(data.sunrise_ts)}
            />
            <StandardDetailTypography
              text={'Zachód słońca'}
              icon={
                <WbTwilightIcon
                  sx={{
                    transform: 'rotate(180deg)',
                  }}
                />
              }
              measure={timestampToTime(data.sunset_ts)}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
