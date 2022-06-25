import { IconButton } from '@mui/material'
import Image from 'next/image'

interface IProps {
  icon: string
  title: string
}

export const WeatherButton = ({ icon }: IProps) => {
  return (
    <IconButton
      sx={{
        // border: 1,
        borderRadius: '5px',
        height: '60px',
        width: '60px',
        // borderColor: borderColor,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '7px',
        boxShadow: 2,
      }}
    >
      <Image layout={'fill'} src={icon} alt={'pogoda'} />
    </IconButton>
  )
}
