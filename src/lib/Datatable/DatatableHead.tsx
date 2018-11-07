import * as React from 'react'
import {ReactElement} from 'react'
import {TableSort, TableSortCell} from 'react-components'
import {Checkbox, createStyles, Theme, withStyles, WithStyles} from '@material-ui/core'
import autobind from 'autobind-decorator'
import {datatableConsumer, IDatatableContext} from './Datatable'
import {connect} from 'react-redux'
import {OrderByType} from '../type/criteria'
import {ITableSortCellProps} from '../type/lib/tableCellProps'
import {RootState} from './redux/datatableAction'

const styles = (t: Theme) => createStyles({
  root: {
    background: t.palette.background.default,
  }
})

interface IProps extends IDatatableContext, WithStyles<typeof styles> {
  dispatch: any
  children: ReactElement<any>
}

class DatatableHead extends React.Component<IProps & ReturnType<typeof state2props>> {

  render() {
    const {children, criteria, classes, selected, onSelect, isColumnVisible} = this.props
    return (
      <TableSort
        className={classes.root}
        sortBy={criteria.sort_by!}
        orderBy={criteria.order_by!}
        onSort={this.handleSortChange!}>
        {onSelect &&
        <TableSortCell>
          <Checkbox checked={selected.length === criteria.limit}
                    indeterminate={selected.length > 0 && selected.length < criteria.limit}
                    onChange={this.handleSelect}
                    style={{paddingTop: 0, paddingBottom: 0}}/>
        </TableSortCell>
        }
        {React.Children.map(children, (c, i) => isColumnVisible(i) && c)}
      </TableSort>
    )
  }

  componentDidMount() {
    this.publishColumns()
  }

  componentDidUpdate(prevProps: IProps) {
    if (prevProps.children !== this.props.children) {
      this.publishColumns()
    }
  }

  @autobind
  private handleSelect() {
    const {selected, onSelect, criteria} = this.props
    const newSelected: number[] = []
    if (selected.length === 0) for (let i = 0; i < criteria.limit; i++) newSelected.push(i)
    onSelect(newSelected)
  }

  @autobind
  private handleSortChange(sortBy: string, orderBy: OrderByType) {
    const {dispatch, actions} = this.props
    dispatch(actions.sort(sortBy, orderBy))
  }

  private publishColumns() {
    const {children, publishColumns} = this.props
    publishColumns(React.Children.map(children, (c: ReactElement<ITableSortCellProps>) => ({label: c.props.children})))
  }
}

const state2props = (state: RootState, ownProps: IProps) => {
  const paginateState = state.paginate[ownProps.name]
  return {
    criteria: paginateState.criteria,
    data: paginateState.entities,
  }
}

export default datatableConsumer(
  withStyles(styles)(connect(state2props)(DatatableHead))
)
