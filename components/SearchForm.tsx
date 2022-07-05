import { WeatherCardsContainer } from './WeatherCardsContainer/WeatherCardsContainer'
import { TypographySlogan } from './Typography/TypographySlogan'
import { NumberInput } from './Input/NumberInput'
import { Typography, Box } from '@mui/material'
import { WeatherButtonContainer } from './Button/WeatherButtonContainer/WeatherButtonContainer'
import * as React from 'react'
import CloudyDay1 from '../assets/WeatherIcons/CloudyDay1.svg'
import { useForm, Controller } from 'react-hook-form'
import { BaseButton } from './Button/Button'
import { useRouter } from 'next/router'
import { BaseAutocomplete } from './Input/BaseAutocomplete'

interface IProps {
  showYourCityWeather: boolean
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
const weatherData = [
  {
    id: 1,
    date: '01.03.2022',
    weatherImage: CloudyDay1,
    temperatureDay: 27,
    temperatureNight: 12,
  },
  {
    id: 2,
    date: '02.03.2022',
    weatherImage: CloudyDay1,
    temperatureDay: 31,
    temperatureNight: 10,
  },
  {
    id: 3,
    date: '03.03.2022',
    weatherImage: CloudyDay1,
    temperatureDay: 25,
    temperatureNight: 17,
  },
  {
    id: 4,
    date: '04.03.2022',
    weatherImage: CloudyDay1,
    temperatureDay: 31,
    temperatureNight: 15,
  },
  {
    id: 5,
    date: '05.03.2022',
    weatherImage: CloudyDay1,
    temperatureDay: 25,
    temperatureNight: 17,
  },
  {
    id: 6,
    date: '06.03.2022',
    weatherImage: CloudyDay1,
    temperatureDay: 31,
    temperatureNight: 15,
  },
  {
    id: 7,
    date: '07.03.2022',
    weatherImage: CloudyDay1,
    temperatureDay: 25,
    temperatureNight: 17,
  },
  {
    id: 8,
    date: '08.03.2022',
    weatherImage: CloudyDay1,
    temperatureDay: 31,
    temperatureNight: 15,
  },
  {
    id: 9,
    date: '08.03.2022',
    weatherImage: CloudyDay1,
    temperatureDay: 31,
    temperatureNight: 15,
  },
  {
    id: 9,
    date: '08.03.2022',
    weatherImage: CloudyDay1,
    temperatureDay: 31,
    temperatureNight: 15,
  },
]

interface FormValues {
  yourCity: string
  airportCity: string
  minTemperature: number
  maxTemperature: number
  perfectWeather: number[]
}
export const SearchForm = ({ showYourCityWeather }: IProps) => {
  const router = useRouter()
  const { control, handleSubmit, watch, setValue } = useForm<FormValues>({
    defaultValues: {
      yourCity: '',
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
          console.log({ data })
          router.push({ pathname: '/list', query: { ...data } })
        })}
      >
        {showYourCityWeather && (
          <>
            <Controller
              name="yourCity"
              control={control}
              render={(renderProps) => {
                console.log('wiadomosc', renderProps)
                return (
                  <BaseAutocomplete
                    options={cities}
                    placeholder={'Sprawdź pogodę w Twoim mieście'}
                    {...renderProps}
                  />
                )
              }}
            />
            <WeatherCardsContainer
              weatherAndFlight={weatherData}
              sx={{ overflowY: 'scroll' }}
            />
          </>
        )}
        <Controller
          name="airportCity"
          control={control}
          render={(renderProps) => {
            console.log({ renderProps })
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
              console.log({ field })
              return <NumberInput {...field} label={'Od'} defaultValue={20} />
            }}
          />
          <Typography sx={{ mr: 2 }}>&#8451;</Typography>
          <Controller
            name="maxTemperature"
            control={control}
            render={({ field }) => {
              console.log({ field })
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
