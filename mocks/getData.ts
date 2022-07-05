import { warsawWeather } from './warsawWeather'
import CloudyDay1 from '../assets/WeatherIcons/CloudyDay1.svg'
import { maltaWeather } from './maltaWeather'

export const getData = () => {
  return [
    {
      city: warsawWeather.city_name,
      country: warsawWeather.timezone,
      weatherAndFlight: warsawWeather.data.map((day) => {
        return {
          date: day.datetime,
          weatherImage: CloudyDay1,
          temperatureDay: day.high_temp,
          temperatureNight: day.low_temp,
          departurePrice: 500,
          arrivalPrice: 600,
        }
      }),
    },
    {
      city: maltaWeather.city_name,
      country: maltaWeather.timezone,
      weatherAndFlight: maltaWeather.data.map((day) => {
        return {
          date: day.datetime,
          weatherImage: CloudyDay1,
          temperatureDay: day.high_temp,
          temperatureNight: day.low_temp,
          departurePrice: 500,
          arrivalPrice: 600,
        }
      }),
    },
  ]
}
