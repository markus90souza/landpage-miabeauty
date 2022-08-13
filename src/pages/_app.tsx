import { CSSReset } from '@styles/boot'
import { defaultTheme } from '@styles/themes/default'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CSSReset />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default App
