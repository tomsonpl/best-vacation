import { TextField, Autocomplete, Box } from '@mui/material'
import React from 'react'

interface IProps {
  type?: 'submit'
  options: { label: string }[]
  placeholder: string
  field: {
    onChange: (SyntheticEvent: React.SyntheticEvent) => void
    value: string
  }
}

export const BaseAutocomplete = (props: IProps) => {
  return (
    <Box sx={{ marginTop: '20px', display: 'flex', justifyContent: 'center' }}>
      <Autocomplete
        {...props}
        value={{ label: props.field.value }}
        disablePortal
        options={props.options}
        sx={{ width: '100%' }}
        onChange={(event) => {
          // eslint-disable-next-line
          props.field.onChange((event.target as any).textContent)
        }}
        renderInput={(params) => {
          return <TextField {...params} label={props.placeholder} />
        }}
      />
    </Box>
  )
}
