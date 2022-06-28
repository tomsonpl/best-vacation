import { Form } from './Form'
import { BaseButton } from './Button/Button'
import { Box, Container } from '@mui/material'
import * as React from 'react'
import { ClosingButton } from './Button/ClosingButton'
import { TypographySlogan } from './Typography/TypographySlogan'

interface IProps {
  onClose: () => void
}

export const ShortenedForm = (props: IProps) => {
  return (
    <Container
      sx={{
        my: '20px',
        backgroundColor: 'white',
        width: '90%',
        height: 'auto',
        borderRadius: '10px',
        boxShadow: 3,
        pt: '1px',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <TypographySlogan text={'Zmień wyszukiwanie'} />
        <ClosingButton onClose={props.onClose} />
      </Box>
      <Form showYourCityWeather={false} />
      <BaseButton
        variant={'contained'}
        sx={{
          backgroundColor: '#1976d2',
        }}
      >
        Szukaj
      </BaseButton>
    </Container>
  )
}
