import { SelectedDateAndPriceTypography } from './SelectedDateAndPriceTypography'
import { Box } from '@mui/material'
import { BaseButton } from '../Button/Button'
import * as React from 'react'

export const SelectedDateAndPriceContainer = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'row' },
        justifyContent: 'space-between',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          gap: { xs: '10px', sm: '30px', md: '50px' },
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <SelectedDateAndPriceTypography
          text={'Najtańszy:'}
          price={600}
          startDate={'02.03.2022'}
          endDate={'08.03.2022'}
        />
        <SelectedDateAndPriceTypography
          text={'Wybrałeś:'}
          price={700}
          startDate={'04.03.2022'}
          endDate={'08.03.2022'}
        />
      </Box>
      <Box sx={{ width: { sm: '30%' } }}>
        <BaseButton
          variant={'contained'}
          sx={{
            width: '100%',
            fontSize: '18px',
            backgroundColor: '#1976d2',
            my: '20px',
          }}
        >
          Rezerwuj
        </BaseButton>
      </Box>
    </Box>
  )
}
