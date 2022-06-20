import React, { HTMLAttributes, ReactNode } from 'react'
import { Button } from '@mui/material'

export interface IButtonProps extends HTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  variant: 'outlined' | 'contained'
  size: 'small' | 'large'
  color: 'success' | 'error'
}

export const BaseButton = ({ children, ...props }: IButtonProps) => {
  console.log({ props })
  return (
    <Button variant={props.variant} size={props.size} color={props.color}>
      {children}
    </Button>
  )
}
