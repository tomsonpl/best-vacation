import { Typography, Box } from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import MailIcon from '@mui/icons-material/Mail'
import CopyrightIcon from '@mui/icons-material/Copyright'
import Link from 'next/link'

export const Footer = () => {
  return (
    <Box
      sx={{
        mt: '100px',
        height: '200px',
        backgroundColor: '#e8e6e6',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '10%',
      }}
    >
      <Typography>Contact me!</Typography>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          gap: '20%',
        }}
      >
        <Link href={'mailto: zaniewskamagdalena@wp.pl'}>
          <a target="_blank">
            <MailIcon fontSize={'large'} sx={{ color: '#1976d2' }} />
          </a>
        </Link>
        <Link href={'https://github.com/FrontendMagdalena'}>
          <a target="_blank">
            <GitHubIcon fontSize={'large'} sx={{ color: '#1976d2' }} />
          </a>
        </Link>
        <Link
          href={
            'https://www.linkedin.com/in/magdalena-zaniewska-ciecierska-154b56101/'
          }
        >
          <a target="_blank">
            <LinkedInIcon fontSize={'large'} sx={{ color: '#1976d2' }} />
          </a>
        </Link>
      </Box>
      <Box sx={{ display: 'flex', gap: '10px' }}>
        <CopyrightIcon />
        <Typography>2022</Typography>
      </Box>
    </Box>
  )
}
