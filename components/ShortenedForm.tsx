import { SearchForm } from './SearchForm'
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
        <TypographySlogan align={'left'} text={'Zmień wyszukiwanie'} />
        <ClosingButton onClose={props.onClose} />
      </Box>
      <SearchForm showYourCityWeather={false} />
    </Container>
  )
}
