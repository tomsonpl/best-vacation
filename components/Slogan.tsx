import { Typography } from '@mui/material'
import { ReactNode } from 'react'

interface IProps {
  children: ReactNode
}

export const Slogan = ({ children }: IProps) => {
  return (
    <Typography
      variant="h1"
      sx={{
        fontWeight: '600',
        lineHeight: 2,
        py: '10px',
        display: 'flex',
        justifyContent: 'center',
        textAlign: 'center',
        '@media (min-width: 768px)': {
          fontSize: '20px',
        },
      }}
    >
      {children}
      {/*Znajdź tanie loty w wymarzonej dla Ciebie pogodzie w przeciągu*/}
      {/*najbliższych 14 dni!*/}
    </Typography>
  )
}
