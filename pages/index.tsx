import type { NextPage } from 'next'
import Head from 'next/head'
import { Box, Container } from '@mui/material'
import beach from '../assets/beach.jpg'
import * as React from 'react'
import { SearchForm } from '../components/SearchForm'
import { TypographySlogan } from '../components/Typography/TypographySlogan'
import { ResultList } from '../components/ResultList/ResultList'
import { getData } from '../mocks/getData'

const Home: NextPage = () => {
  const data = getData()

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
          <SearchForm
            weatherData={data[0].weatherAndFlight}
            showYourCityWeather={true}
            hidePrice={true}
          />
        </Container>
      </Box>
      <TypographySlogan
        text={'Najlepsze okazje wybrane z myślą o Tobie'}
        align={'left'}
        sx={{ mx: '6%' }}
      />
      <Box sx={{ mt: '20px' }}>
        <ResultList />
      </Box>
    </>
  )
}
export default Home
