import { Box, Container } from '@mui/material'
import * as React from 'react'
import { ClosingButton } from './Button/ClosingButton'
import { TypographySlogan } from './Typography/TypographySlogan'
import { ReactNode } from 'react'

interface IProps {
  onClose: () => void
  children: ReactNode
}

export const ModalBodyWrapper = (props: IProps) => {
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
      {props.children}
    </Container>
  )
}
