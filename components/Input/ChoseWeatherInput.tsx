import CloudyDay1 from '../../assets/WeatherIcons/CloudyDay1.svg'
import TextField from '@mui/material/TextField'
import Autocomplete from '@mui/material/Autocomplete'

const weather = [
  {
    label: CloudyDay1,
  },
  {
    label: CloudyDay1,
  },
  {
    label: CloudyDay1,
  },
]

export const ChoseWeatherInput = () => {
  return (
    <Autocomplete
      disablePortal
      options={weather}
      // sx={{ width: '100%' }}
      defaultValue={CloudyDay1}
      renderInput={(params) => (
        <TextField
          {...params} // label={'ble'}
        />
      )}
    />
  )
}
