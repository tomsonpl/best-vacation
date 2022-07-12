import { Box, Typography } from '@mui/material'
import { BoldDetailTypography } from './BoldDetailTypography'
import * as React from 'react'

interface IProps {
  text: string
  icon: never
  unit: string
  measure: number
}

export const StandardDetailTypography = (props: IProps) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        gap: '10px',
        mt: '10px',
        transform: 'rotate(360deg)',
      }}
    >
      {props.icon}
      <Typography variant={'h5'}>{props.text}</Typography>
      <BoldDetailTypography>
        {props.measure}
        {props.unit}
      </BoldDetailTypography>
    </Box>
  )
}
