import * as React from 'react'
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  IconButton,
  CssBaseline,
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import NavSunnyIcon from '../../assets/NavSunnyIcon.svg'
import Image from 'next/image'
import { useRouter } from 'next/router'

interface IProps {
  text: string
}
export const Navbar: React.FC<IProps> = ({ text }) => {
  const router = useRouter()
  return (
    <>
      <CssBaseline />
      <AppBar position="fixed">
        <Container maxWidth="xl">
          <Toolbar sx={{ paddingLeft: 0 }}>
            <Container sx={{ display: 'flex', alignItems: 'center' }}>
              <Typography
                variant="h1"
                component="div"
                noWrap
                sx={{
                  fontWeight: '700',
                  paddingLeft: '0px',
                  marginRight: '10px',
                  cursor: 'pointer',
                }}
                onClick={() => {
                  router.push('/')
                }}
              >
                {text}
              </Typography>
              <Image
                src={NavSunnyIcon}
                width={30}
                height={40}
                alt="logo firmy Pogoda na tanie wakacje"
                onClick={() => {
                  router.push('/')
                }}
              />
            </Container>
            <IconButton edge="end" color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  )
}
