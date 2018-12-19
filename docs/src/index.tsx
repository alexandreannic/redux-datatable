// import * as React from 'react'
// import * as ReactDOM from 'react-dom'
// import {App} from './App'
// import {Provider} from 'react-redux'
// import {store} from './core/redux/store'
// import {HashRouter} from 'react-router-dom'
// import {createMuiTheme, MuiThemeProvider} from '@material-ui/core'
// import {muiTheme} from './core/theme/mui-theme'
//
// ReactDOM.render(
//   <Provider store={store}>
//     <HashRouter basename="">
//       <MuiThemeProvider theme={createMuiTheme(muiTheme())}>
//         <App/>
//       </MuiThemeProvider>
//     </HashRouter>
//   </Provider>,
//   document.getElementById('redux-datatable')
// )

import * as React from 'react'
import * as ReactDOM from 'react-dom'
import {HashRouter} from 'react-router-dom'
import {ThemeContextProvider, useTheme} from './core/theme/ThemeContext'
import {createMuiTheme, MuiThemeProvider} from '@material-ui/core'
import {muiTheme} from './core/theme/mui-theme'
import {App} from './App'
import {Provider} from 'react-redux'
import {store} from './core/redux/store'

const Root = () => {
  const isDarkTheme = useTheme()
  return (
    <MuiThemeProvider theme={createMuiTheme(muiTheme(isDarkTheme))}>
      <App/>
    </MuiThemeProvider>
  )
}

ReactDOM.render(
  <Provider store={store}>
    <ThemeContextProvider>
      <HashRouter basename="">
        <Root/>
      </HashRouter>
    </ThemeContextProvider>
  </Provider>,
  document.getElementById('redux-datatable')
)


