import React, { HTMLAttributes, ReactNode } from 'react'
import { Button } from '@mui/material'

export interface IButtonProps extends HTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  variant: 'outlined' | 'contained'
  size: 'small' | 'large'
  color: 'success'
}

export const BaseButton = ({ children, ...props }: IButtonProps) => {
  return (
    <Button variant={props.variant} size={props.size} color={props.color}>
      {children}
    </Button>
  )
}
