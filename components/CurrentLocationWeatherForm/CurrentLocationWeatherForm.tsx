import { Controller, useForm } from 'react-hook-form'
import { BaseAutocomplete } from '../Input/BaseAutocomplete'
import { WeatherCardsContainer } from '../WeatherCardsContainer/WeatherCardsContainer'
import * as React from 'react'
// import { TravelOption } from '../CountryResultList/CountryResultList'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { getWeather, selectWeather } from '../../features/weather/weatherSlice'
import { useEffect } from 'react'
import { CircularProgress, Typography } from '@mui/material'

interface IProps {
  hidePrice?: true
}

const cities = [
  { label: 'Warszawa' },
  { label: 'Białystok' },
  { label: 'Będzin' },
  { label: 'Gdańsk' },
  { label: 'Szczecin' },
  { label: 'Zakopane' },
  { label: 'Częstochowa' },
  { label: 'Radom' },
]

interface FormValues {
  yourCity: string
}

export const CurrentLocationWeatherForm = ({ hidePrice }: IProps) => {
  const { data, pending, error } = useAppSelector(selectWeather)

  const { control, watch } = useForm<FormValues>({
    defaultValues: {
      yourCity: '',
    },
  })

  const watchedYourCity = watch('yourCity')

  const dispatch = useAppDispatch()

  useEffect(() => {
    if (watchedYourCity) {
      dispatch(getWeather(watchedYourCity))
    }
  }, [dispatch, watchedYourCity])

  return (
    <form>
      <>
        <Controller
          name="yourCity"
          control={control}
          render={(renderProps) => {
            return (
              <BaseAutocomplete
                options={cities}
                placeholder={'Sprawdź pogodę w Twoim mieście'}
                {...renderProps}
              />
            )
          }}
        />
        {pending && <CircularProgress />}

        {data && (
          <WeatherCardsContainer
            hidePrice={hidePrice}
            weatherAndFlight={data.data}
            sx={{ overflowY: 'scroll' }}
          />
        )}
        {error && (
          <Typography align={'center'} variant={'h5'} sx={{ mt: '15px' }}>
            Coś poszło nie tak, spróbuj jeszcze raz.
          </Typography>
        )}
      </>
    </form>
  )
}
