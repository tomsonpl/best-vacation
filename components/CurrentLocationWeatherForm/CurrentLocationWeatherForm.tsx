import { Controller, useForm } from 'react-hook-form'
import { BaseAutocomplete } from '../Input/BaseAutocomplete'
import { WeatherCardsContainer } from '../WeatherCardsContainer/WeatherCardsContainer'
import * as React from 'react'
import { TravelOption } from '../CountryResultList/CountryResultList'

interface IProps {
  weatherData: TravelOption[]
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

export const CurrentLocationWeatherForm = ({
  hidePrice,
  weatherData,
}: IProps) => {
  const { control, handleSubmit } = useForm<FormValues>({
    defaultValues: {
      yourCity: '',
    },
  })
  return (
    <form
      onSubmit={handleSubmit((data) => {
        console.log({ data })
        // router.push({ pathname: '/list', query: { ...data } })
      })}
    >
      <>
        <Controller
          name="yourCity"
          control={control}
          render={(renderProps) => {
            return (
              <BaseAutocomplete
                options={cities}
                type={'submit'}
                placeholder={'Sprawdź pogodę w Twoim mieście'}
                {...renderProps}
              />
            )
          }}
        />
        <WeatherCardsContainer
          hidePrice={hidePrice}
          weatherAndFlight={weatherData}
          sx={{ overflowY: 'scroll' }}
        />
      </>
    </form>
  )
}
