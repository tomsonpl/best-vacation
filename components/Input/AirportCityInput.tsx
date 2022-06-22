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
  return <BaseInput cities={airportCities} text={'Wybierz miasto wylotu'} />
}
