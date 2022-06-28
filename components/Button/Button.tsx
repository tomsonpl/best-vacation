import React, { HTMLAttributes, ReactNode } from 'react'
import { Button } from '@mui/material'

export interface IButtonProps extends HTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  variant: 'outlined' | 'contained' | 'text'
  sx: Record<string, unknown>
}

export const BaseButton = ({ children, ...props }: IButtonProps) => {
  return (
    <Button
      variant={props.variant}
      sx={{
        letterSpacing: 2,
        width: '100%',
        fontSize: '18px',
        my: '20px',
        ...props.sx,
      }}
      onClick={props.onClick}
    >
      {children}
    </Button>
  )
}
