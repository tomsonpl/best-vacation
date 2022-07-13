import { Box, Typography } from '@mui/material'
import { BoldDetailTypography } from './BoldDetailTypography'
import * as React from 'react'

interface IProps {
  text: string
  icon: React.ReactElement
  unit?: string
  measure: number | string
}

export const StandardDetailTypography = (props: IProps) => {
  const { text, icon, unit, measure } = props
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        gap: '10px',
        my: '10px',
        transform: 'rotate(360deg)',
      }}
    >
      {icon}
      <Typography variant={'h5'}>{text}</Typography>
      <BoldDetailTypography>
        {measure}
        {unit}
      </BoldDetailTypography>
    </Box>
  )
}
