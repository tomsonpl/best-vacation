import { TypographySlogan } from '../Typography/TypographySlogan'
import { NumberInput } from '../Input/NumberInput'
import { Typography, Box } from '@mui/material'
import { WeatherButtonContainer } from '../Button/WeatherButtonContainer/WeatherButtonContainer'
import * as React from 'react'
import { useForm, Controller } from 'react-hook-form'
import { BaseButton } from '../Button/Button'
import { useRouter } from 'next/router'
import { BaseAutocomplete } from '../Input/BaseAutocomplete'
import { ErrorMessage } from '@hookform/error-message'

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
  airportCity: string
  minTemperature: number
  maxTemperature: number
  perfectWeather: number[]
}

export interface IQuery {
  airportCity?: string
  minTemperature?: string
  maxTemperature?: string
  perfectWeather?: string[]
}

interface IProps {
  query?: IQuery
  onClose?: () => void
}

export const DreamedWeatherForm = (props: IProps) => {
  const minTemperatureToNumber = Number(props.query?.minTemperature)
  const maxTemperatureToNumber = Number(props.query?.maxTemperature)
  const convertToNumber = () => {
    return props.query?.perfectWeather?.map((str) => {
      return parseInt(str, 10)
    })
  }

  const router = useRouter()
  const {
    control,
    handleSubmit,
    watch,
    setValue,
    setError,
    clearErrors,
    formState,
  } = useForm<FormValues>({
    defaultValues: {
      airportCity: props.query?.airportCity || '',
      minTemperature: props.query?.minTemperature ? minTemperatureToNumber : 18,
      maxTemperature: props.query?.maxTemperature ? maxTemperatureToNumber : 27,
      perfectWeather: props.query?.perfectWeather ? convertToNumber() : [],
    },
  })

  const { errors } = formState
  const watchedPerfectWeather = watch('perfectWeather')

  const handlePerfectWeatherClick = (id: number) => {
    if (watchedPerfectWeather.includes(id)) {
      const newValue = watchedPerfectWeather.filter((optionId) => {
        return optionId !== id
      })
      setValue('perfectWeather', newValue)
    } else {
      setValue('perfectWeather', [...watchedPerfectWeather, id])
    }
    if (watchedPerfectWeather.length > 0) {
      clearErrors()
    }
  }

  return (
    <Box>
      <form
        onSubmit={handleSubmit((data) => {
          if (data.perfectWeather.length < 2) {
            setError('perfectWeather', {
              message: 'Wybierz co najmniej 2 ikony pogody',
            })
            return
          }
          router.push({ pathname: '/list', query: { ...data } })
          props.onClose && props.onClose()
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
          showOnlyActive={false}
          sx={{ justifyContent: { xs: 'space-between', xl: 'center' } }}
        />
        <ErrorMessage
          errors={errors}
          name="perfectWeather"
          render={(error) => (
            <Typography
              sx={{
                pt: '10px',
                color: 'red',
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              {error.message}
            </Typography>
          )}
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
