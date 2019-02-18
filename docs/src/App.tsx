import * as React from 'react'
import {ReactElement} from 'react'
import {createStyles, Theme, WithStyles, withStyles} from '@material-ui/core'
import {Layout, TableSort} from 'mui-extension'
import {SimpleDatatableDoc} from './example/SimpleDatatable/SimpleDatatableDoc'
import {Redirect, Route, RouteComponentProps, Switch, withRouter} from 'react-router'
import {ToolbarDatatableDoc} from './example/ToolbarDatatable/ToolbarDatatableDoc'
import {ExpendableDatatableDoc} from './example/ExpendableDatatable/ExpendableDatatableDoc'
import {CustomDatatableDoc} from './example/CustomDatatable/CustomDatatableDoc'
import {Menu} from './core/component/Menu/Menu'
import {Home} from './page/Home/Home'

const styles = (t: Theme) => createStyles({
  '@global': {
    'input, textarea, select, button': {
      color: 'inherit',
    },
    body: {
      fontFamily: t.typography.fontFamily,
      background: t.palette.background.paper,
      margin: 0,
      color: t.palette.text.primary,
    },
    ul: {
      marginTop: '.5em'
    },
    h1: t.typography.h4,
    h2: {
      ...t.typography.h6,
      marginBottom: 0,
    },
    p: {
      ...t.typography.body1,
      textAlign: 'justify',
      fontSize: '1rem',
    },
    a: {
      color: 'inherit',
      textDecoration: 'none',
    },
    ':focus': {
      outline: 0,
    },
    '.link': {
      color: t.palette.primary.main,
      textDecoration: 'underline',
    }
  },
  title: {
    whiteSpace: 'nowrap'
  }
})

interface IProps extends WithStyles<typeof styles>, RouteComponentProps<any> {
}

export const App = withStyles(styles)(withRouter(({classes, match}: IProps): ReactElement<IProps> => {

  const route = (path: string = '') => match.url + path

  return (
    <Layout sidebar={Menu} title={<div className={classes.title}>Redux-datatable</div>}>
      <Switch>
        <Route path={route('home')} component={Home}/>
        <Route path={route('simple')} component={SimpleDatatableDoc}/>
        <Route path={route('toolbar')} component={ToolbarDatatableDoc}/>
        <Route path={route('expendable')} component={ExpendableDatatableDoc}/>
        <Route path={route('custom')} component={CustomDatatableDoc}/>
        <Redirect exact from={route('')} to={route('home')}/>
      </Switch>
    </Layout>
  )
}))
