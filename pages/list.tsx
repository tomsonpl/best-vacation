import { NextPage } from 'next'
import { Container, Divider, Modal } from '@mui/material'
import { CountryResultList } from '../components/CountryResultList/CountryResultList'
import * as React from 'react'
import { BaseButton } from '../components/Button/Button'
import { SelectedOptionsContainer } from '../components/SelectedOptionsContainer/SelectedOptionsContainer'
import { ShortenedForm } from '../components/ShortenedForm'
import { useState } from 'react'
import { useRouter } from 'next/router'
import { data } from '../mocs/data'
// import { Slogan } from '../components/Slogan'

const List: NextPage = () => {
  const router = useRouter()
  const { query } = router
  console.log({ query })
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  return (
    <Container sx={{ mt: '80px' }}>
      <SelectedOptionsContainer query={query} />
      <BaseButton
        variant={'text'}
        sx={{
          color: '#1976d2',
          my: '0',
          textTransform: 'lowerCase',
          fontSize: '15px',
        }}
        onClick={handleOpen}
      >
        Zmień
      </BaseButton>
      <Divider sx={{ mb: '20px' }} />
      <Modal open={open}>
        <ShortenedForm onClose={handleClose} />
      </Modal>
      {/*<Box sx={{ mt: '10%' }}>*/}
      {/*  <Slogan>Brak wyników spełniających powyższe kryteria.</Slogan>*/}
      {/*  <Slogan>Zmień kryteria wyszukiwania.</Slogan>*/}
      {/*</Box>*/}
      {data.map((offer) => {
        return (
          <CountryResultList
            cityNumber={offer.id}
            key={offer.id}
            city={offer.city}
            country={offer.country}
            weatherAndFlight={offer.weatherAndFlight}
          />
        )
      })}
    </Container>
  )
}

export default List
