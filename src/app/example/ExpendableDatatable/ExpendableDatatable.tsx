import * as React from 'react'
import {Icon, TableCell} from '@material-ui/core'
import {Datatable, DatatableBody, DatatableHead} from '../../../lib/Datatable/index'
import {TableSortCell} from 'react-components'
import {IUser} from '../../core/type/user'
import DatatableRow from '../../../lib/Datatable/DatatableRow'
import {fetchUsers} from '../../core/redux/userAction'

export const EXPENDABLE_DATATABLE = 'expendableDatatable'

const ExpendableDatatable = () => {
  return (
    <Datatable name={EXPENDABLE_DATATABLE} action={fetchUsers(EXPENDABLE_DATATABLE)}>
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

const renderRow = (u: IUser) => {
  return (
    <DatatableRow expendRow={ExpendedRow(u)}>
      <TableCell>{new Date(u.createdAt).toLocaleDateString()}</TableCell>
      <TableCell>{u.firstName}</TableCell>
      <TableCell>{u.lastName}</TableCell>
      <TableCell>{u.phone}</TableCell>
      <TableCell>
        {u.validated ? <Icon style={{color: 'green'}}>check</Icon> : <Icon style={{color: 'red'}}>block</Icon>}
      </TableCell>
    </DatatableRow>
  )
}

const ExpendedRow = (u: IUser) => {
  return (
    <div>{u.firstName}</div>
  )
}

export default ExpendableDatatable
