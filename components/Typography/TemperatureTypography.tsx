import * as React from 'react'
import { Typography } from '@mui/material'

interface IProps {
  color: string
  temperature: number
  sx?: Record<string, unknown>
}
export const TemperatureTypography = ({ color, temperature, sx }: IProps) => {
  return (
    <Typography variant={'subtitle1'} sx={{ color: color, ...sx }}>
      {Math.round(temperature)} <span>&#8451;</span>
    </Typography>
  )
}
