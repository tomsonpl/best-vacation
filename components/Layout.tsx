import { Navbar } from './Navbar/Navbar'
import { Footer } from './Footer'

interface IProps {
  children: JSX.Element
}

export const Layout = ({ children }: IProps) => {
  return (
    <>
      <Navbar text={'POGODA NA TANIE WAKACJE'} />
      {children}
      <Footer />
    </>
  )
}
