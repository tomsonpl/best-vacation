import TextField from '@mui/material/TextField'
interface IProps {
  label: string
  defaultValue: number
}

export const NumberInput = (props: IProps) => {
  return (
    <TextField
      {...props}
      type="number"
      label={props.label}
      defaultValue={props.defaultValue}
      sx={{ width: '100px' }}
    />
  )
}
