import * as React from 'react'
import {PageTitle} from '../../shared/PageTitle/PageTitle'
import {Theme} from '@material-ui/core'
import {makeStyles, useTheme} from '@material-ui/styles'
import {Page} from 'mui-extension'
import logo from '../../asset/redux-datatable.png'
import classNames from 'classnames'

const useStyles = makeStyles((t: Theme) => ({
  root: {
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    padding: 0,
  },
  logo: {
    height: 150,
  },
  logoLight: {
    filter: 'invert(1)',
  }
}))

export const Home = () => {
  // @ts-ignore
  const classes = useStyles()
  const theme = useTheme() as Theme

  return (
    <Page className={classes.root}>
      <div>
        <img src={logo} className={classNames(classes.logo, theme.palette.type === 'dark' && classes.logoLight)}/>
        <PageTitle>Redux-datatable</PageTitle>
        Powerful and flexible datatable library.
      </div>
    </Page>
  )
}
