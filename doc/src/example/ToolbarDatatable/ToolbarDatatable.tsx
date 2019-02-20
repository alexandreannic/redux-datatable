import React from 'react'
import {Icon, TableCell} from '@material-ui/core'
import {fetchUsers} from '../../core/redux/userAction'
import {Datatable, DatatableRow, DatatableBody, DatatableHead, DatatableSort, DatatableToolbar} from '@alexandreannic/redux-datatable'

export const TOOLBAR_DATATABLE = 'toolbarDatatable'

const ToolbarDatatable = () => {
  return (
    <Datatable
      name={TOOLBAR_DATATABLE}
      action={fetchUsers(TOOLBAR_DATATABLE)}
      toolbar={<DatatableToolbar search="globalSearch"/>}
      style={{border: `1px solid rgba(0, 0, 0, 0.12)`, borderRadius: 4,}}>
      <DatatableHead>
        <DatatableSort name="createdAt">Date</DatatableSort>
        <DatatableSort name="gender">Gender</DatatableSort>
        <DatatableSort name="firstName">First name</DatatableSort>
        <DatatableSort name="lastName">Last name</DatatableSort>
        <DatatableSort name="email">Email</DatatableSort>
        <DatatableSort name="phone">Phone</DatatableSort>
        <DatatableSort name="score">Score</DatatableSort>
        <DatatableSort name="status">Status</DatatableSort>
      </DatatableHead>
      <DatatableBody renderRow={renderRow}/>
    </Datatable>
  )
}

const renderRow = u => {
  return (
    <DatatableRow>
      <TableCell>{new Date(u.createdAt).toLocaleDateString()}</TableCell>
      <TableCell>{u.gender}</TableCell>
      <TableCell>{u.firstName}</TableCell>
      <TableCell>{u.lastName}</TableCell>
      <TableCell>{u.email}</TableCell>
      <TableCell>{u.phone}</TableCell>
      <TableCell>{u.score}</TableCell>
      <TableCell>
        {u.validated ? <Icon style={{color: 'green'}}>check</Icon> : <Icon style={{color: 'red'}}>block</Icon>}
      </TableCell>
    </DatatableRow>
  )
}

export default ToolbarDatatable
