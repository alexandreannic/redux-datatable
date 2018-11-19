import {cyan, purple, red} from '@material-ui/core/colors'

export const muiTheme = (): any => ({
  palette: {
    primary: purple,
    secondary: cyan,
    error: red,
    type: 'light'
  },
  typography: {
    fontFamily: '"Open Sans", sans-serif',
  },
  overrides: {
  },
})
