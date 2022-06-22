import TextField from '@mui/material/TextField'
import Autocomplete from '@mui/material/Autocomplete'
import Box from '@mui/material/Box'

interface IProps {
  cities: { label: string }[]
  text: string
}

export const BaseInput = (props: IProps) => {
  return (
    <Box sx={{ marginTop: '20px', display: 'flex', justifyContent: 'center' }}>
      <Autocomplete
        disablePortal
        options={props.cities}
        sx={{ width: '100%' }}
        renderInput={(params) => <TextField {...params} label={props.text} />}
      />
    </Box>
  )
}
