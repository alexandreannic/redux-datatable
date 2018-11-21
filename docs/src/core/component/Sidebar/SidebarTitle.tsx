import * as React from 'react'
import {ReactChild} from 'react'
import {createStyles, Theme, Typography, WithStyles, withStyles} from '@material-ui/core'

const styles = (t: Theme) => createStyles({
  root: {
    fontWeight: t.typography.fontWeightMedium,
    textTransform: 'uppercase',
    letterSpacing: 1,
    color: t.palette.text.disabled,
    marginBottom: t.spacing.unit * 2,
  },
})

interface IProps extends WithStyles<typeof styles> {
  children: ReactChild
}

export const SidebarTitle = withStyles(styles)(({classes, children}: IProps) => {
  return (
    <Typography variant="caption" noWrap className={classes.root}>{children}</Typography>
  )
})
