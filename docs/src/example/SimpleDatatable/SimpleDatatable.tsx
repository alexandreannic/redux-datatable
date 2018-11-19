import * as React from 'react'
import {Icon, TableCell} from '@material-ui/core'
import {fetchUsers} from '../../core/redux/userAction'
import {Datatable, DatatableBody, DatatableHead, DatatableRow, TableSortCell} from '../../../../src/index'

export const SIMPLE_DATATABLE = 'simpleDatatable'

const SimpleDatatable = () => {
  return (
    <Datatable
      name={SIMPLE_DATATABLE}
      action={fetchUsers(SIMPLE_DATATABLE)}
      style={{border: `1px solid rgba(0, 0, 0, 0.12)`, borderRadius: 4,}}>
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

const renderRow = u => (
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

export default SimpleDatatable
