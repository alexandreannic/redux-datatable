import * as React from 'react'
import {ReactElement} from 'react'
import {Checkbox, TableBody, TableCell} from '@material-ui/core'
import autobind from 'autobind-decorator'
import {datatableConsumer, IDatatableContext} from './Datatable'
import {connect} from 'react-redux'
import {RootState} from './redux/datatableAction'

interface IProps extends IDatatableContext {
  children?: any;
  renderRow: (d: any) => ReactElement<any>;
}

class DatatableBody extends React.Component<IProps & ReturnType<typeof state2props>> {

  render() {
    const {children, isColumnVisible, renderRow, selected, data, onSelect} = this.props
    return (
      <TableBody>
        {children}
        {data ? data.map((d, i) => {
          const row = renderRow(d)
          return React.cloneElement(row, {key: d.id, index: i}, [
            onSelect &&
            <TableCell key={1}>
              <Checkbox checked={selected.indexOf(i) !== -1} onClick={this.handleSelect(i)}/>
            </TableCell>,
            React.Children.map(row.props.children, (c, j) => isColumnVisible(j) && c)
          ])
        }) : <></>}
      </TableBody>
    )
  }

  @autobind
  private handleSelect(i: number) {
    return (event) => {
      event.stopPropagation()
      const {onSelect, selected} = this.props
      const x = selected.indexOf(i)
      if (x === -1) {
        selected.push(i)
      } else {
        selected.splice(x, 1)
      }
      onSelect([...selected])
    }
  }
}

const state2props = (state: RootState, ownProps: IProps) => {
  const paginateState = state.paginate[ownProps.name]
  return {
    data: paginateState.entities,
  }
}

export default datatableConsumer(connect(state2props)(DatatableBody))
