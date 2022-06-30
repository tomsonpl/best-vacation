import { Typography, Box } from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import MailIcon from '@mui/icons-material/Mail'

// import { useRouter } from 'next/router'

export const Footer = () => {
  // const router = useRouter()
  //   '#f1f1f1' '#dedddc'
  return (
    <Box sx={{ mt: '100px', height: 'auto', backgroundColor: '#e8e6e6' }}>
      <Typography>CopyRights 2022</Typography>
      <MailIcon />
      <Typography>zaniewskamagdalena@wp.pl</Typography>
      <GitHubIcon />
      <Typography>https://github.com/FrontendMagdalena</Typography>
      <LinkedInIcon />
      <Typography>
        https://www.linkedin.com/in/magdalena-zaniewska-ciecierska-154b56101/
      </Typography>
    </Box>
  )
}
