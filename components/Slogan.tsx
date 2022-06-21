import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'

export const Slogan = () => {
  return (
    <Container
      sx={{
        marginTop: '30px',
        backgroundColor: 'red',
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
        }}
      >
        Znajdź tanie loty w wymarzonej dla Ciebie pogodzie w przeciągu
        najbliższych 14 dni!
      </Typography>
    </Container>
  )
}
