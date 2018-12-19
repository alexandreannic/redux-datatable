import * as React from 'react'
import {createStyles, Icon, Switch, Theme, WithStyles, withStyles} from '@material-ui/core'
import {useTheme, useToggleTheme} from '../../theme/ThemeContext'
import {GitHubIcon, Sidebar, SidebarHeader, SidebarBody, SidebarFooter, SidebarItem} from 'mui-extension'

const styles = (t: Theme) => createStyles({
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
  basePath?: string
  className?: string
}

export const Menu = withStyles(styles)(({classes, className, basePath = ''}: IProps) => {
  const isDarkTheme = useTheme()
  const toggleDarkTheme = useToggleTheme()
  return (
    <Sidebar>
      <SidebarHeader>
        <SidebarItem to={basePath + 'home'} icon="home" large>
          Home
        </SidebarItem>
        <SidebarItem
          href="https://github.com/alexandreannic/redux-datatable"
          before={<GitHubIcon/>}
          target="_blank"
          large>
          GitHub
          <Icon className={classes.itemI}>
            open_in_new
          </Icon>
        </SidebarItem>
      </SidebarHeader>
      <SidebarBody>
        <SidebarItem large to={basePath + 'simple'}>Simple Datatable</SidebarItem>
        <SidebarItem large to={basePath + 'toolbar'}>Toolbar Datatable</SidebarItem>
        <SidebarItem large to={basePath + 'expendable'}>Expendable Datatable</SidebarItem>
        <SidebarItem large to={basePath + 'custom'}>Custom Datatable</SidebarItem>
      </SidebarBody>
      <SidebarFooter>
        <SidebarItem icon="brightness_3">
          Night mode
          <Switch
            color="primary"
            className={classes.itemI}
            checked={isDarkTheme}
            onChange={toggleDarkTheme}
            style={{marginTop: -4, marginBottom: -4}}/>
        </SidebarItem>
      </SidebarFooter>
    </Sidebar>
  )
})
