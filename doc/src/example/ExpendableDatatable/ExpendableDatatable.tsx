import * as React from 'react'
import {Icon, TableCell} from '@material-ui/core'
import {Datatable, DatatableRow, DatatableBody, DatatableHead, DatatableSort} from '@alexandreannic/redux-datatable'
import {fetchUsers} from '../../core/redux/userAction'

export const EXPENDABLE_DATATABLE = 'expendableDatatable'

const ExpendableDatatable = () => {
  return (
    <Datatable
      name={EXPENDABLE_DATATABLE}
      action={fetchUsers(EXPENDABLE_DATATABLE)}
      style={{border: `1px solid rgba(0, 0, 0, 0.12)`, borderRadius: 4,}}>
      <DatatableHead>
        <DatatableSort name="createdAt">Date</DatatableSort>
        <DatatableSort name="firstName">First name</DatatableSort>
        <DatatableSort name="lastName">Last name</DatatableSort>
        <DatatableSort name="phone">Phone</DatatableSort>
        <DatatableSort name="status">Status</DatatableSort>
      </DatatableHead>
      <DatatableBody renderRow={renderRow}/>
    </Datatable>
  )
}

const renderRow = u => (
  <DatatableRow expendedRow={renderExpendedRow(u)}>
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
