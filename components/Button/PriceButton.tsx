import { Button } from '@mui/material'

interface IProps {
  color: string
  borderColor: string
  price?: number
}

export const PriceButton = ({ color, borderColor, price }: IProps) => {
  return (
    <Button
      variant="outlined"
      sx={{
        fontSize: '12px',
        color: color,
        borderColor: borderColor,
        padding: '5px',
      }}
      onClick={(e) => e.stopPropagation()}
    >
      {price} zł
    </Button>
  )
}
