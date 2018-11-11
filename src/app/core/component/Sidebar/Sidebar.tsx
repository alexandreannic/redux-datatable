import * as React from 'react'
import {createStyles, Paper, Slide, Theme, WithStyles, withStyles} from '@material-ui/core'
import {sidebarWith} from './SidebarLayout'
import SidebarHr from './SidebarHr'
import SidebarItem from './SidebarItem'
import {PaletteColor} from '@material-ui/core/styles/createPalette'
import {NavLink} from 'react-router-dom'
import {IconBtn} from 'react-components'

export const sidebarPalette = (t: Theme): PaletteColor => t.palette.primary

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
    // borderRight: `1px solid ${t.palette.divider}`,
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
        <Paper elevation={4} className={classes.root}>
          <main className={classes.main}>
            <SidebarItem to={basePath + 'home'} icon="home">
              Home
            </SidebarItem>
            <SidebarHr margin/>
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
        </Paper>
      </Slide>
    )
  }
}

export default withStyles(styles)(Sidebar)
