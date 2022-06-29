import { Typography } from '@mui/material'
interface IProps {
  text: string
}
export const TypographySlogan = (props: IProps) => {
  return (
    <Typography
      variant="h5"
      align={'center'}
      sx={{ mt: 2, fontWeight: 700, fontSize: { sm: '25px' } }}
    >
      {props.text}
    </Typography>
  )
}
