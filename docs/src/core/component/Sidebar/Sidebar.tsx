import * as React from 'react'
import {createStyles, Icon, Slide, Theme, WithStyles, withStyles} from '@material-ui/core'
import {sidebarWith} from './SidebarLayout'
import SidebarHr from './SidebarHr'
import SidebarItem from './SidebarItem'
import {IconBtn} from 'react-components'
import {SidebarTitle} from './SidebarTitle'

const styles = (t: Theme) => createStyles({
  root: {
    top: 0,
    left: 0,
    width: sidebarWith,
    paddingTop: t.spacing.unit,
    paddingBottom: t.spacing.unit,
    position: 'fixed',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    marginLeft: t.spacing.unit,
    borderRadius: 0,
  },
  main: {
    paddingTop: t.spacing.unit,
    paddingBottom: t.spacing.unit,
    flex: 1,
    overflowY: 'auto',
  },
  foot: {
    paddingTop: t.spacing.unit,
    paddingBottom: t.spacing.unit,
  },
  avatar: {
    background: t.palette.divider,
    margin: 'auto',
  },
  itemI: {
    marginLeft: 'auto',
    color: t.palette.text.disabled,
  }
})

interface IProps extends WithStyles<typeof styles> {
  basePath?: string;
}

class Sidebar extends React.Component<IProps, {}> {

  static defaultProps = {
    basePath: '',
  }

  render() {
    const {classes, basePath} = this.props
    return (
      <Slide direction="right" in={true} mountOnEnter unmountOnExit>
        <div className={classes.root}>
          <main className={classes.main}>
            <SidebarItem to={basePath + 'home'} icon="home">
              Home
            </SidebarItem>
            <SidebarItem href="https://github.com/alexandreannic/react-components" icon="home" target="_blank">
              Github
              <Icon className={classes.itemI}>
                open_in_new
              </Icon>
            </SidebarItem>
            <SidebarHr margin/>
            <SidebarTitle>Examples</SidebarTitle>
            <SidebarItem to={basePath + 'simple'}>
              Simple Datatable
            </SidebarItem>
            <SidebarItem to={basePath + 'toolbar'}>
              Toolbar Datatable
            </SidebarItem>
            <SidebarItem to={basePath + 'expendable'}>
              Expendable Datatable
            </SidebarItem>
            <SidebarItem to={basePath + 'custom'}>
              Custom Datatable
            </SidebarItem>
          </main>
          <SidebarHr/>
          <footer className={classes.foot}>

          </footer>
        </div>
      </Slide>
    )
  }
}

export default withStyles(styles)(Sidebar)
