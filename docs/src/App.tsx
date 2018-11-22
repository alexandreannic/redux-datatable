import * as React from 'react'
import {ReactElement} from 'react'
import {createStyles, Theme, WithStyles, withStyles} from '@material-ui/core'
import {TableSortCell} from 'react-components'
import {SimpleDatatableDoc} from './example/SimpleDatatable/SimpleDatatableDoc'
import {Sidebar} from './core/component/Sidebar/index'
import SidebarLayout from './core/component/Sidebar/SidebarLayout'
import {Redirect, Route, RouteComponentProps, Switch, withRouter} from 'react-router'
import {css} from './core/theme/style'
import {ToolbarDatatableDoc} from './example/ToolbarDatatable/ToolbarDatatableDoc'
import {ExpendableDatatableDoc} from './example/ExpendableDatatable/ExpendableDatatableDoc'
import {CustomDatatableDoc} from './example/CustomDatatable/CustomDatatableDoc'

const styles = (t: Theme) => createStyles({
  '@global': {
    body: {
      fontFamily: t.typography.fontFamily,
    },
    code: {
      background: '#f5f2f0',
      borderRadius: 3,
      padding: '.2em .4em'
    },
    ul: {
      marginTop: '.5em'
    },
    h1: t.typography.h4,
    h2: {
      ...t.typography.h6,
      marginBottom: 0,
    },
    p: t.typography.body1
  },
  root: {
    maxWidth: css.pageWidth,
    margin: '30px auto',
  },
})

interface IProps extends WithStyles<typeof styles>, RouteComponentProps<any> {
}

export const App = withStyles(styles)(withRouter(({classes, match}: IProps): ReactElement<IProps> => {

  const route = (path: string = '') => match.url + path

  return (
    <SidebarLayout>
      <Sidebar basePath={match.url}/>
      <Switch>
        <Route path={route('home')} component={SimpleDatatableDoc}/>
        <Route path={route('simple')} component={SimpleDatatableDoc}/>
        <Route path={route('toolbar')} component={ToolbarDatatableDoc}/>
        <Route path={route('expendable')} component={ExpendableDatatableDoc}/>
        <Route path={route('custom')} component={CustomDatatableDoc}/>
        <Redirect exact from={route('')} to={route('home')}/>
      </Switch>
    </SidebarLayout>
  )
}))
