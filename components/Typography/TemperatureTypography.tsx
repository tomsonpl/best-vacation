import * as React from 'react'
import { Typography } from '@mui/material'

interface IProps {
  color: string
  temperature: number
}
export const TemperatureTypography = ({ color, temperature }: IProps) => {
  return (
    <Typography variant={'subtitle1'} sx={{ color: color }}>
      {temperature} <span>&#8451;</span>
    </Typography>
  )
}
