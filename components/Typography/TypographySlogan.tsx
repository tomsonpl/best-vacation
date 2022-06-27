import { Typography } from '@mui/material'
interface IProps {
  text: string
}
export const TypographySlogan = (props: IProps) => {
  return (
    <Typography variant="h1" sx={{ mt: 2, fontWeight: 700 }}>
      {props.text}
    </Typography>
  )
}
