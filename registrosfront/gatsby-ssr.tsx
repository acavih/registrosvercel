import { ThemeProvider } from '@emotion/react'
import React from 'react'
import { Provider } from 'react-redux'
import { store } from './src/store'
import { theme } from './src/utils/theme'

export const wrapPageElement = ({ element }) => {
    return <Provider store={store}>
        <ThemeProvider theme={theme}>
            {element}
        </ThemeProvider>
    </Provider>
}
