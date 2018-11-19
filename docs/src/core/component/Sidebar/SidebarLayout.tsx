import * as React from 'react'
import {createStyles, Theme, WithStyles, withStyles} from '@material-ui/core'

export const sidebarWith = 220;

const styles = (t: Theme) => createStyles({
  root: {
    position: 'relative',
    paddingLeft: sidebarWith
  }
});

interface IProps extends WithStyles<typeof styles> {
}

class SidebarLayout extends React.Component<IProps, {}> {

  render() {
    const {classes, children} = this.props;
    return (
      <div className={classes.root}>
        {children}
      </div>
    );
  }
}

export default withStyles(styles)(SidebarLayout);
