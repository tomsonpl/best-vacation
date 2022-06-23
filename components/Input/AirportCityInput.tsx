import { BaseInput } from './BaseInput'

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

export const AirportCityInput = () => {
  return (
    <BaseInput options={airportCities} placeholder={'Wybierz miasto wylotu'} />
  )
}
