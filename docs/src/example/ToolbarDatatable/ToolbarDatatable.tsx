import * as React from 'react'
import {Icon, TableCell} from '@material-ui/core'
import {fetchUsers} from '../../core/redux/userAction'
import {Datatable, DatatableBody, DatatableHead, DatatableToolbar} from '../../../../src/Datatable/index'
import {TableSortCell} from 'react-components'
import DatatableRow from '../../../../src/Datatable/DatatableRow'

export const TOOLBAR_DATATABLE = 'toolbarDatatable'

const ToolbarDatatable = () => {
  return (
    <Datatable
      name={TOOLBAR_DATATABLE}
      action={fetchUsers(TOOLBAR_DATATABLE)}
      toolbar={<DatatableToolbar search="global_search"/>}
      style={{border: `1px solid rgba(0, 0, 0, 0.12)`, borderRadius: 4,}}>
      <DatatableHead>
        <TableSortCell name="createdAt">Date</TableSortCell>
        <TableSortCell name="gender">Gender</TableSortCell>
        <TableSortCell name="firstName">First name</TableSortCell>
        <TableSortCell name="lastName">Last name</TableSortCell>
        <TableSortCell name="email">Email</TableSortCell>
        <TableSortCell name="phone">Phone</TableSortCell>
        <TableSortCell name="score">Score</TableSortCell>
        <TableSortCell name="status">Status</TableSortCell>
      </DatatableHead>
      <DatatableBody renderRow={renderRow}/>
    </Datatable>
  )
}

const renderRow = (u) => {
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
