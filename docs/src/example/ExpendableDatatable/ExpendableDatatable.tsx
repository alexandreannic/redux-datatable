import * as React from 'react'
import {Icon, TableCell} from '@material-ui/core'
import {Datatable, DatatableBody, DatatableHead} from '../../../../src/Datatable/index'
import {TableSortCell} from 'react-components'
import DatatableRow from '../../../../src/Datatable/DatatableRow'
import {fetchUsers} from '../../core/redux/userAction'

export const EXPENDABLE_DATATABLE = 'expendableDatatable'

const ExpendableDatatable = () => {
  return (
    <Datatable
      name={EXPENDABLE_DATATABLE}
      action={fetchUsers(EXPENDABLE_DATATABLE)}
      style={{border: `1px solid rgba(0, 0, 0, 0.12)`, borderRadius: 4,}}>
      <DatatableHead>
        <TableSortCell name="createdAt">Date</TableSortCell>
        <TableSortCell name="firstName">First name</TableSortCell>
        <TableSortCell name="lastName">Last name</TableSortCell>
        <TableSortCell name="phone">Phone</TableSortCell>
        <TableSortCell name="status">Status</TableSortCell>
      </DatatableHead>
      <DatatableBody renderRow={renderRow}/>
    </Datatable>
  )
}

const renderRow = u => (
  <DatatableRow expendRow={renderExpendedRow(u)}>
    <TableCell>{new Date(u.createdAt).toLocaleDateString()}</TableCell>
    <TableCell>{u.firstName}</TableCell>
    <TableCell>{u.lastName}</TableCell>
    <TableCell>{u.phone}</TableCell>
    <TableCell>
      {u.validated ? <Icon style={{color: 'green'}}>check</Icon> : <Icon style={{color: 'red'}}>block</Icon>}
    </TableCell>
  </DatatableRow>
)

const renderExpendedRow = u => (
  <div>{u.firstName}</div>
)

export default ExpendableDatatable
