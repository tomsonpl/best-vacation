import type { NextPage } from 'next'
import Head from 'next/head'
import { Box, Container } from '@mui/material'
import beach from '../assets/beach.jpg'
import * as React from 'react'
import { SearchForm } from '../components/SearchForm'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Vacation App</title>
      </Head>
      <Box
        sx={{
          height: 750,
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
          <SearchForm showYourCityWeather={true} />
        </Container>
      </Box>
    </>
  )
}
export default Home
