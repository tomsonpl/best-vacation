import { BaseInput } from './BaseInput'

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

export const YourCityWeatherInput = () => {
  return (
    <BaseInput
      options={cities}
      placeholder={'Sprawdź pogodę w Twoim mieście'}
    />
  )
}
