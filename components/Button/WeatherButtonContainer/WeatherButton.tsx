import { IconButton } from '@mui/material'
import Image from 'next/image'

interface IProps {
  icon: string
  title: string
  onClick: () => void
  isActive?: boolean
}

export const WeatherButton = ({ icon, onClick, isActive }: IProps) => {
  return (
    <>
      <IconButton
        onClick={onClick}
        sx={{
          border: isActive ? 2 : 0,
          borderColor: isActive ? '#1976d2' : null,
          borderRadius: '5px',
          height: '60px',
          width: '60px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '7px',
          boxShadow: 2,
        }}
      >
        <Image layout={'fill'} src={icon} alt={'pogoda'} />
      </IconButton>
    </>
  )
}
