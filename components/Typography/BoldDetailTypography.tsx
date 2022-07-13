import { Typography } from '@mui/material'
import { ReactNode } from 'react'
interface IProps {
  children: ReactNode
}
export const BoldDetailTypography = (props: IProps) => {
  return (
    <Typography variant={'h5'} fontWeight={'700'}>
      {props.children}
    </Typography>
  )
}
