import { Navbar } from './Navbar'
import { Footer } from './Footer'

interface IProps {
  children: JSX.Element
}

export const Layout = ({ children }: IProps) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  )
}
