import { Typography, Container } from '@mui/material'

export const Slogan = () => {
  return (
    <Container
      sx={{
        position: 'absolute',
        backgroundColor: 'red',
        marginTop: '80px',
      }}
    >
      <Typography
        variant="h1"
        sx={{
          fontSize: '15px',
          fontWeight: '600',
          color: 'white',
          mx: '20px',
          py: '10px',
          display: 'flex',
          justifyContent: 'center',
          textAlign: 'center',
          '@media (min-width: 768px)': {
            fontSize: '20px',
          },
        }}
      >
        Znajdź tanie loty w wymarzonej dla Ciebie pogodzie w przeciągu
        najbliższych 14 dni!
      </Typography>
    </Container>
  )
}
