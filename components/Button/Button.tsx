import React, { HTMLAttributes, ReactNode } from 'react'
import { Button } from '@mui/material'

export interface IButtonProps extends HTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  variant: 'outlined' | 'contained'
  sx: Record<string, unknown>
}

export const BaseButton = ({ children, ...props }: IButtonProps) => {
  return (
    <Button variant={props.variant} sx={props.sx} onClick={props.onClick}>
      {children}
    </Button>
  )
}
