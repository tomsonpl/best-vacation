import IconButton from '@mui/material/IconButton'
import CloseIcon from '@mui/icons-material/Close'

interface IProps {
  onClose: () => void
}

export const ClosingButton = (props: IProps) => {
  const { onClose } = props
  return (
    <IconButton onClick={onClose} aria-label="close" sx={{ mt: 2 }}>
      <CloseIcon />
    </IconButton>
  )
}
