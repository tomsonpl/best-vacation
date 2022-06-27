import type { AppProps } from 'next/app'
import { Layout } from '../components/Layout'
import { ThemeProvider } from '@mui/material'
import { theme } from '../themes/theme'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  )
}

export default MyApp
