import type { AppProps } from 'next/app'
import { Layout } from '../components/Layout'
import { ThemeProvider } from '@mui/material'
import { theme } from '../themes/theme'
import { Provider } from 'react-redux'
import { store } from '../app/store'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </Provider>
    </>
  )
}

export default MyApp
