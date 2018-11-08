import * as React from 'react'
import * as ReactDOM from 'react-dom'
import {App} from './App'
import {Provider} from 'react-redux'
import {store} from './core/redux/store'
import {BrowserRouter} from 'react-router-dom'
import {createMuiTheme, MuiThemeProvider} from '@material-ui/core'
import {muiTheme} from './core/theme/mui-theme'

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter basename="">
      <MuiThemeProvider theme={createMuiTheme(muiTheme())}>
        <App/>
      </MuiThemeProvider>
    </BrowserRouter>
  </Provider>,
  document.getElementById('redux-datatable')
)
