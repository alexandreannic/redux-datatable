import * as React from 'react'
import {createStyles, Theme, WithStyles, withStyles} from '@material-ui/core'
import classNames from 'classnames'

const styles = (t: Theme) => createStyles({
  root: {
    height: 1,
    background: t.palette.divider,
  },
  rootMargin: {
    marginTop: t.spacing.unit,
    marginBottom: t.spacing.unit,
  }
})

interface IProps extends WithStyles<typeof styles> {
  className?: any;
  margin?: boolean;
}

class SidebarHr extends React.Component<IProps, {}> {

  render() {
    const {className, margin, classes} = this.props
    return (
      <div className={classNames(classes.root, className, margin && classes.rootMargin)}/>
    )
  }
}

export default withStyles(styles)(SidebarHr)
