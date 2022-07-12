import { Box, Typography } from '@mui/material'
import * as React from 'react'
import CloudyDay1 from '../../assets/WeatherIcons/CloudyDay1.svg'
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

export const DetailWeather = () => {
  return (
    <Box sx={{ pb: '20px' }}>
      <Typography
        variant={'h5'}
        sx={{ m: '20px', fontWeight: '700' }}
        align={'center'}
      >
        11.07.2022
      </Typography>
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
            gap: { xs: '30px', md: '100px' },
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <TemperatureTypography
              temperature={34}
              color={'black'}
              sx={{ fontSize: '30px' }}
            />
            <TemperatureTypography
              temperature={23}
              color={'rgba(128, 128, 128, 1)'}
              sx={{ fontSize: '18px' }}
            />
          </Box>
          <Box>
            <Image
              src={CloudyDay1}
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
            pt: '20px',
            borderRadius: '10px',
            boxShadow: 3,
          }}
        >
          <Box>
            <StandardDetailTypography
              text={'Wiatr'}
              icon={<AirIcon />}
              unit={' km/h'}
              measure={15}
            />
            <BoldDetailTypography>Max {30} km/h</BoldDetailTypography>
          </Box>
          <Box>
            <StandardDetailTypography
              text={'Deszcz'}
              icon={<OpacityOutlinedIcon />}
              unit={' mm'}
              measure={15}
            />
            <StandardDetailTypography
              text={'Zachmurzenie'}
              icon={<CloudQueueIcon />}
              unit={'%'}
              measure={15}
            />
          </Box>
          <Box>
            <StandardDetailTypography
              text={'Szansa opadów'}
              icon={<PercentIcon />}
              unit={'%'}
              measure={15}
            />
            <StandardDetailTypography
              text={'Śnieg'}
              icon={<AcUnitIcon />}
              unit={' mm'}
              measure={15}
            />
          </Box>
          <Box>
            <StandardDetailTypography
              text={'Wschód słońca'}
              icon={<WbTwilightIcon />}
              unit={''}
              measure={4.55}
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
              unit={''}
              measure={22.34}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
