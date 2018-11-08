import * as React from 'react'
import {createStyles, Theme, WithStyles, withStyles} from '@material-ui/core'
import {TableSortCell} from 'react-components'
import {SimpleDatatableDoc} from './example/SimpleDatatable/SimpleDatatableDoc'
import {Sidebar} from './core/component/Sidebar'
import SidebarLayout from './core/component/Sidebar/SidebarLayout'
import {ReactElement} from 'react'
import {Redirect, Route, RouteComponentProps, Switch, withRouter} from 'react-router'
import {css} from './core/theme/style'

const styles = (t: Theme) => createStyles({
  '@global': {
    'body': {
      fontFamily: t.typography.fontFamily,
    }
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
        <Redirect exact from={route('')} to={route('home')}/>
      </Switch>
    </SidebarLayout>
  )
}))
