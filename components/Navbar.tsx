import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import CssBaseline from '@mui/material/CssBaseline'
// import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import { IconButton } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import NavSunnyIcon from '../assets/NavSunnyIcon.svg'
import Image from 'next/image'

export const Navbar = () => {
  return (
    <>
      <CssBaseline />
      <AppBar position="fixed">
        <Container maxWidth="xl">
          <Toolbar sx={{ paddingLeft: 0 }}>
            <Container sx={{ display: 'flex', alignItems: 'center' }}>
              <Typography
                variant="h6"
                component="div"
                noWrap
                sx={{
                  fontSize: '15px',
                  fontWeight: '700',
                  paddingLeft: '0px',
                  marginRight: '10px',
                }}
              >
                POGODA NA TANIE WAKACJE
              </Typography>
              <Image
                src={NavSunnyIcon}
                width={30}
                height={40}
                alt="logo firmy Pogoda na tanie wakacje"
              />
            </Container>
            <IconButton edge="end" color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>
      {/*  delete container later */}
      {/*<Container>*/}
      {/*  <Box sx={{ my: 2 }}>*/}
      {/*    {[...new Array(40)]*/}
      {/*      .map(*/}
      {/*        () => `Cras mattis consectetur purus sit amet fermentum.*/}
      {/*Cras justo odio, dapibus ac facilisis in, egestas eget quam.*/}
      {/*Morbi leo risus, porta ac consectetur ac, vestibulum at eros.*/}
      {/*Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`*/}
      {/*      )*/}
      {/*      .join('\n')}*/}
      {/*  </Box>*/}
      {/*</Container>*/}
      {/*  delete container later */}
    </>
  )
}
