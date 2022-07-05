import type { NextPage } from 'next'
import Head from 'next/head'
import { Box, Container } from '@mui/material'
import beach from '../assets/beach.jpg'
import * as React from 'react'
import { SearchForm } from '../components/SearchForm'
import { data } from '../mocs/data'
import { CountryResultList } from '../components/CountryResultList/CountryResultList'
import { TypographySlogan } from '../components/Typography/TypographySlogan'

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
      <TypographySlogan
        text={'Najlepsze okazje wybrane z myślą o Tobie'}
        align={'left'}
        sx={{ ml: '6%' }}
      />
      <Box sx={{ mt: '20px' }}>
        {data.map((offer) => {
          console.log({ offer })
          return (
            <CountryResultList
              cityNumber={offer.id}
              key={offer.id}
              city={offer.city}
              country={offer.country}
              weatherAndFlight={offer.weatherAndFlight}
              defaultItemsToShow={5}
            />
          )
        })}
      </Box>
    </>
  )
}
export default Home
