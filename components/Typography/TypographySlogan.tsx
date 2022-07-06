import { Typography } from '@mui/material'
interface IProps {
  text: string
  sx?: Record<string, unknown>
  align: 'center' | 'left'
}
export const TypographySlogan = (props: IProps) => {
  return (
    <Typography
      variant="h5"
      align={props.align}
      sx={{ ...props.sx, mt: 2, fontWeight: 700, fontSize: { sm: '25px' } }}
    >
      {props.text}
    </Typography>
  )
}
