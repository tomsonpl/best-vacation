import { NextPage } from 'next'
import { Box, CircularProgress, Container, Divider, Modal } from '@mui/material'
import * as React from 'react'
import { BaseButton } from '../components/Button/Button'
import { SelectedOptionsContainer } from '../components/SelectedOptionsContainer/SelectedOptionsContainer'
import { ModalBodyWrapper } from '../components/ModalBodyWrapper'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { ResultList } from '../components/ResultList/ResultList'
import { DreamedWeatherForm } from '../components/DreamedWeatherForm/DreamedWeatherForm'
import { useAppDispatch, useAppSelector } from '../app/hooks'
import {
  getWeatherList,
  selectWeatherList,
} from '../features/weather/weatherListSlice'
import { Slogan } from '../components/Slogan'

const List: NextPage = () => {
  const { data, pending, error } = useAppSelector(selectWeatherList)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getWeatherList('Warszawa'))
    // dispatch(getWeatherList('Białystok'))
    // dispatch(getWeatherList('Szczecin'))
  }, [dispatch])

  const router = useRouter()
  const { query } = router
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
        <ModalBodyWrapper onClose={handleClose}>
          <DreamedWeatherForm query={query} onClose={handleClose} />
        </ModalBodyWrapper>
      </Modal>
      {pending && <CircularProgress sx={{ align: 'center' }} />}
      {data && <ResultList data={data} />}
      {error && (
        <Box sx={{ mt: '10%' }}>
          <Slogan>Brak wyników spełniających powyższe kryteria.</Slogan>
          <Slogan>Zmień kryteria wyszukiwania.</Slogan>
        </Box>
      )}
    </Container>
  )
}

export default List
