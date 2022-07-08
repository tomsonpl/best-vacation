import React, { ReactNode } from 'react'
import { Button, ButtonProps } from '@mui/material'

export interface IButtonProps extends ButtonProps {
  children: ReactNode
  sx: Record<string, unknown>
  onClick?: () => void
}

export const BaseButton = ({ children, ...props }: IButtonProps) => {
  return (
    <Button
      {...props}
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
