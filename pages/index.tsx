import type { NextPage } from 'next'
import Head from 'next/head'
import { Box, Container } from '@mui/material'
import beach from '../assets/beach.jpg'
import { BaseButton } from '../components/Button/Button'
import * as React from 'react'
import { useRouter } from 'next/router'
import { Form } from '../components/Form'

const Home: NextPage = () => {
  const router = useRouter()

  return (
    <>
      <Head>
        <title>Vacation App</title>
      </Head>
      <Box
        sx={{
          height: 800,
          backgroundImage: `url(${beach.src})`,
          backgroundSize: 'cover',
          position: 'relative',
          display: 'flex',
          justifyContent: 'center',
          textAlign: 'center',
        }}
      >
        {/*<Slogan />*/}
        <Container
          sx={{
            position: 'absolute',
            // mt: { xs: '45%', sm: '25%', md: '18%', lg: '12%' }, when there is a slogan
            mt: '100px',
            backgroundColor: 'white',
            width: '85%',
            height: 'auto',
            borderRadius: '10px',
            boxShadow: 3,
          }}
        >
          <Form showYourCityWeather={true} />
          <BaseButton
            variant={'contained'}
            sx={{
              backgroundColor: '#1976d2',
            }}
            onClick={() => {
              router.push('/list')
            }}
          >
            Szukaj
          </BaseButton>
        </Container>
      </Box>
    </>
  )
}
export default Home
