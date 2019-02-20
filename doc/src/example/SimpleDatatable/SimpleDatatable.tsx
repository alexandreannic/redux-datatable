import * as React from 'react'
import {Icon, TableCell} from '@material-ui/core'
import {Datatable, DatatableBody, DatatableHead, DatatableRow, DatatableSort} from '@alexandreannic/redux-datatable'
import {fetchUsers} from '../../core/redux/userAction'

export const SIMPLE_DATATABLE = 'simpleDatatable'

const SimpleDatatable = () => {
  return (
    <Datatable
      name={SIMPLE_DATATABLE}
      action={fetchUsers(SIMPLE_DATATABLE)}
      style={{border: `1px solid rgba(0, 0, 0, 0.12)`, borderRadius: 4,}}>
      <DatatableHead>
        <DatatableSort name="createdAt">Date</DatatableSort>
        <DatatableSort>First name</DatatableSort>
        <DatatableSort name="lastName">Last name</DatatableSort>
        <DatatableSort name="score">Score</DatatableSort>
        <DatatableSort name="status">Status</DatatableSort>
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
