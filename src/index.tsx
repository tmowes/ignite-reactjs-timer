import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import { CyclesProvider } from './contexts/CycleProvider'
import { AppRoutes } from './routes/app.routes'
import GlobalStyles from './styles/GlobalStyles'
import * as themes from './styles/themes'

export function App() {
  return (
    <ThemeProvider theme={themes.dark}>
      <GlobalStyles />
      <BrowserRouter>
        <CyclesProvider>
          <AppRoutes />
        </CyclesProvider>
      </BrowserRouter>
    </ThemeProvider>
  )
}
