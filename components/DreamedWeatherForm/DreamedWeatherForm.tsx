import { TypographySlogan } from '../Typography/TypographySlogan'
import { NumberInput } from '../Input/NumberInput'
import { Typography, Box } from '@mui/material'
import { WeatherButtonContainer } from '../Button/WeatherButtonContainer/WeatherButtonContainer'
import * as React from 'react'
import { useForm, Controller } from 'react-hook-form'
import { BaseButton } from '../Button/Button'
import { useRouter } from 'next/router'
import { BaseAutocomplete } from '../Input/BaseAutocomplete'
// import { TravelOption } from '../CountryResultList/CountryResultList'
//
// interface IProps {
//   weatherData?: TravelOption[]
// }

const airportCities = [
  { label: 'Warszawa' },
  { label: 'Białystok' },
  { label: 'Wrocław' },
  { label: 'Gdańsk' },
  { label: 'Szczecin' },
  { label: 'Zakopane' },
  { label: 'Kraków' },
  { label: 'Radom' },
]

interface FormValues {
  yourCity: string
  airportCity: string
  minTemperature: number
  maxTemperature: number
  perfectWeather: number[]
}
export const DreamedWeatherForm = () => {
  const router = useRouter()
  const { control, handleSubmit, watch, setValue } = useForm<FormValues>({
    defaultValues: {
      airportCity: '',
      minTemperature: 0,
      maxTemperature: 0,
      perfectWeather: [],
    },
  })

  const handlePerfectWeatherClick = (id: number) => {
    if (watchedPerfectWeather.includes(id)) {
      const newValue = watchedPerfectWeather.filter((optionId) => {
        return optionId !== id
      })
      setValue('perfectWeather', newValue)
    } else {
      setValue('perfectWeather', [...watchedPerfectWeather, id])
    }
  }
  const watchedPerfectWeather = watch('perfectWeather')
  return (
    <Box>
      <form
        onSubmit={handleSubmit((data) => {
          router.push({ pathname: '/list', query: { ...data } })
        })}
      >
        <Controller
          name="airportCity"
          control={control}
          render={(renderProps) => {
            return (
              <BaseAutocomplete
                options={airportCities}
                placeholder={'Wybierz miasto wylotu'}
                {...renderProps}
              />
            )
          }}
        />
        <TypographySlogan align={'center'} text={'Twoja wymarzona pogoda'} />
        <Box
          sx={{
            mt: '20px',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <Controller
            name="minTemperature"
            control={control}
            render={({ field }) => {
              return <NumberInput {...field} label={'Od'} defaultValue={20} />
            }}
          />
          <Typography sx={{ mr: 2 }}>&#8451;</Typography>
          <Controller
            name="maxTemperature"
            control={control}
            render={({ field }) => {
              return <NumberInput {...field} label={'Do'} defaultValue={25} />
            }}
          />
          <Typography>&#8451;</Typography>
        </Box>
        <WeatherButtonContainer
          activeIds={watchedPerfectWeather}
          onClick={handlePerfectWeatherClick}
        />
        <BaseButton
          type={'submit'}
          variant={'contained'}
          sx={{ backgroundColor: '#1976d2' }}
        >
          Szukaj
        </BaseButton>
      </form>
    </Box>
  )
}
