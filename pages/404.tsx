import { Box, Typography } from '@mui/material'
import { NextPage } from 'next'
import beachBeautiful404 from '../assets/beachBeautiful404.jpg'
import Link from 'next/link'
import { BaseButton } from '../components/Button/Button'

const Custom404: NextPage = () => {
  return (
    <Box
      sx={{
        height: '1000px',
        backgroundImage: `url(${beachBeautiful404.src})`,
        backgroundSize: 'cover',
        // position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        textAlign: 'left',
      }}
    >
      <Typography
        variant={'h3'}
        sx={{
          mt: '150px',
          ml: { xs: '40px', md: '150px' },
          color: 'white',
          fontWeight: '700',
        }}
      >
        404
      </Typography>
      <Typography
        variant={'h2'}
        sx={{
          ml: { xs: '40px', md: '150px' },
          mt: '5px',
          color: 'white',
          fontWeight: '700',
          letterSpacing: 2,
        }}
      >
        Lost?
      </Typography>
      <Link href="/">
        <BaseButton
          variant={'contained'}
          sx={{
            ml: { xs: '40px', md: '150px' },
            textTransform: 'lowerCase',
            width: '170px',
          }}
        >
          Go back home
        </BaseButton>
      </Link>
    </Box>
  )
}

export default Custom404
