import type { NextPage } from 'next'
import Head from 'next/head'
import { Box, CircularProgress, Container, Typography } from '@mui/material'
import beach from '../assets/beach.jpg'
import * as React from 'react'
import { TypographySlogan } from '../components/Typography/TypographySlogan'
import { ResultList } from '../components/ResultList/ResultList'
import { DreamedWeatherForm } from '../components/DreamedWeatherForm/DreamedWeatherForm'
import { CurrentLocationWeatherForm } from '../components/CurrentLocationWeatherForm/CurrentLocationWeatherForm'
import { useAppDispatch, useAppSelector } from '../app/hooks'
import {
  getWeatherList,
  selectWeatherList,
} from '../features/weather/weatherListSlice'
import { useEffect } from 'react'

const Home: NextPage = () => {
  const { data, pending, error } = useAppSelector(selectWeatherList)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getWeatherList('Warszawa'))
    // dispatch(getWeatherList('Białystok'))
    // dispatch(getWeatherList('Szczecin'))
  }, [dispatch])

  return (
    <>
      <Head>
        <title>Vacation App</title>
      </Head>
      <Box
        sx={{
          height: 760,
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
            pb: '15px',
          }}
        >
          <CurrentLocationWeatherForm hidePrice={true} />
        </Container>
        <Container
          sx={{
            position: 'absolute',
            mt: '330px',
            backgroundColor: 'white',
            width: '85%',
            height: 'auto',
            borderRadius: '10px',
            boxShadow: 3,
          }}
        >
          <DreamedWeatherForm />
        </Container>
      </Box>
      <TypographySlogan
        text={'Najlepsze okazje wybrane z myślą o Tobie'}
        align={'left'}
        sx={{ mx: { xs: '6%', md: '8%' } }}
      />
      {pending && <CircularProgress />}
      {data && (
        <Box sx={{ mt: '20px' }}>
          <ResultList data={data} />
        </Box>
      )}
      {error && (
        <Typography align={'center'} variant={'h5'} sx={{ mt: '15px' }}>
          Coś poszło nie tak, spróbuj jeszcze raz.
        </Typography>
      )}
    </>
  )
}
export default Home
