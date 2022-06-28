import { Typography } from '@mui/material'
interface IProps {
  text: string
}
export const TypographySlogan = (props: IProps) => {
  return (
    <Typography variant="h2" align={'center'} sx={{ my: 2, fontWeight: 700 }}>
      {props.text}
    </Typography>
  )
}
