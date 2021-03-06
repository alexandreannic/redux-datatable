import * as React from 'react'
import {
  Checkbox,
  createStyles,
  Icon,
  IconButton,
  Menu,
  MenuItem,
  Theme,
  WithStyles,
  withStyles
} from '@material-ui/core'
import autobind from 'autobind-decorator'
import {datatableConsumer, IDatatableContext} from '../Datatable'

const styles = (t: Theme) => createStyles({
  root: {
    background: t.palette.background.default,
    borderBottom: `1px solid ${t.palette.divider}`,
    minHeight: 48,
    paddingRight: t.spacing.unit * 2,
    paddingLeft: t.spacing.unit * 2,
  },
  hiddenBadge: {
    display: 'none',
  },
  menuItem: {
    paddingTop: t.spacing.unit,
    paddingRight: t.spacing.unit,
    paddingBottom: t.spacing.unit,
    paddingLeft: 0,
  }
})

interface IProps extends IDatatableContext, WithStyles<typeof styles> {
}

class DatatableColumnsFilter extends React.Component<IProps> {

  state = {
    anchorEl: null,
  }

  render() {
    const {columns, isColumnVisible, classes} = this.props
    return (
      <div>
        <IconButton onClick={this.open}>
          {/*<Badge badgeContent="1" classes={{badge: this.allColumnsHidden() ? classes.hiddenBadge : ''}} color="primary">*/}
          <Icon>remove_red_eye</Icon>
          {/*</Badge>*/}
        </IconButton>
        <Menu
          anchorEl={this.state.anchorEl}
          open={!!this.state.anchorEl}
          onClose={this.close}
        >
          {columns.map((c, i) =>
            <MenuItem key={i} onClick={this.pick(i)} className={classes.menuItem}>
              <Checkbox checked={isColumnVisible(i)}/>
              {c.label}
            </MenuItem>
          )}
        </Menu>
      </div>
    )
  }

  @autobind
  private pick(index: number) {
    const {onToggleColumnVisibility} = this.props
    return () => onToggleColumnVisibility(index)
  }

  @autobind
  private open(event) {
    this.setState({anchorEl: event.currentTarget})
  }

  @autobind
  private close() {
    this.setState({anchorEl: null})
  }

  // private allColumnsHidden(): boolean {
  //   const {hiddenColumnsIndexes} = this.props
  //   return hiddenColumnsIndexes.length > 0 && hiddenColumnsIndexes.every(i => i === false)
  // }
}

export default datatableConsumer(withStyles(styles)(DatatableColumnsFilter))
