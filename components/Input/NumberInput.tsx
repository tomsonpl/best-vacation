import TextField from '@mui/material/TextField'

export const NumberInput = () => {
  return (
    <TextField
      type="number"
      name="paid"
      // label=" "
      variant="outlined"
      defaultValue={25}
      sx={{ width: '80px' }}
      // onChange={event => handleChangeInput(inputField.id, event)}
    />
  )
}
