import { Box, Typography } from '@mui/material'

interface IProps {
  text: string
  price: number
  startDate: string
  endDate: string
}
export const SelectedDateAndPriceTypography = ({
  text,
  price,
  startDate,
  endDate,
}: IProps) => {
  return (
    <Box>
      <Typography variant={'h6'} sx={{ fontWeight: 700 }}>
        {text} {price} zł
      </Typography>
      <Typography variant={'h6'}>
        {startDate} - {endDate}
      </Typography>
    </Box>
  )
}
