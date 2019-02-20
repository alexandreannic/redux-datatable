import * as React from 'react'
import {Link as ReactRouterLink} from 'react-router-dom'
import {createStyles, Theme, withStyles} from '@material-ui/core'
import classNames from 'classnames'

const styles = (t: Theme) => createStyles({
  root: {
    textDecoration: 'none', color: 'inherit'
  }
});

const Link = withStyles(styles)((props: any) => {
  const {className, classes, ...other} = props;
  return <ReactRouterLink className={classNames(classes.root, className)} {...other}/>;
});

export default Link;
