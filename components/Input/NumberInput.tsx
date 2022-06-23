import TextField from '@mui/material/TextField'
interface IProps {
  label: string
  defaultValue: number
}

export const NumberInput = (props: IProps) => {
  return (
    <TextField
      type="number"
      name="paid"
      label={props.label}
      variant="outlined"
      defaultValue={props.defaultValue}
      sx={{ width: '100px' }}
      // onChange={event => handleChangeInput(inputField.id, event)}
    />
  )
}
