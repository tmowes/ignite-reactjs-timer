import { ThemeProvider } from 'styled-components'

import { Home } from './pages/Home'
import GlobalStyles from './styles/GlobalStyles'
import * as themes from './styles/themes'

export function App() {
  return (
    <ThemeProvider theme={themes.dark}>
      <GlobalStyles />
      <Home />
    </ThemeProvider>
  )
}
