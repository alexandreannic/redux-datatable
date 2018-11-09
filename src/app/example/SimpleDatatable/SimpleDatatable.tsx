import * as React from 'react'
import {Icon, TableCell} from '@material-ui/core'
import {fetchUsers} from '../../core/redux/userAction'
import {Datatable, DatatableBody, DatatableHead} from '../../../lib/Datatable/index'
import {TableSortCell} from 'react-components'
import {IUser} from '../../core/type/user'
import DatatableRow from '../../../lib/Datatable/DatatableRow'

export const SIMPLE_DATATABLE = 'simpleDatatable'

const SimpleDatatable = () => {
  return (
    <Datatable name={SIMPLE_DATATABLE} action={fetchUsers(SIMPLE_DATATABLE)}>
      <DatatableHead>
        <TableSortCell name="createdAt">Date</TableSortCell>
        <TableSortCell name="firstName">First name</TableSortCell>
        <TableSortCell name="lastName">Last name</TableSortCell>
        <TableSortCell name="score">Score</TableSortCell>
        <TableSortCell name="status">Status</TableSortCell>
      </DatatableHead>
      <DatatableBody renderRow={renderRow}/>
    </Datatable>
  )
}

const renderRow = (u: IUser) => {
  return (
    <DatatableRow>
      <TableCell>{new Date(u.createdAt).toLocaleDateString()}</TableCell>
      <TableCell>{u.firstName}</TableCell>
      <TableCell>{u.lastName}</TableCell>
      <TableCell>{u.score}</TableCell>
      <TableCell>
        {u.validated ? <Icon style={{color: 'green'}}>check</Icon> : <Icon style={{color: 'red'}}>block</Icon>}
      </TableCell>
    </DatatableRow>
  )
}

export default SimpleDatatable
