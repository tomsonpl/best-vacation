import { BaseInput } from './BaseInput'

const cities = [
  { label: 'Warszawa' },
  { label: 'Białystok' },
  { label: 'Wrocław' },
  { label: 'Gdańsk' },
  { label: 'Szczecin' },
  { label: 'Zakopane' },
  { label: 'Kraków' },
  { label: 'Radom' },
]

export const YourCityWeatherInput = () => {
  return <BaseInput cities={cities} text={'Sprawdź pogodę w Twoim mieście'} />
}
