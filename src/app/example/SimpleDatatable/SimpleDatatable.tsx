import * as React from 'react'
import {Card, Icon, TableCell} from '@material-ui/core'
import {fetchUsers, SIMPLE_DATATABLE} from '../../core/redux/userAction'
import {Datatable, DatatableBody, DatatableHead} from '../../../lib/Datatable/index'
import {TableSortCell} from 'react-components'
import {IUser} from '../../core/type/user'
import DatatableRow from '../../../lib/Datatable/DatatableRow'

const SimpleDatatable = () => {
  return (
    <div>
      <Card>
        <Datatable name={SIMPLE_DATATABLE} action={fetchUsers}>
          <DatatableHead>
            <TableSortCell name="created_at">Date</TableSortCell>
            <TableSortCell name="first_name">First name</TableSortCell>
            <TableSortCell name="last_name">Last name</TableSortCell>
            <TableSortCell name="email">Email</TableSortCell>
            <TableSortCell name="phone">Phone</TableSortCell>
            <TableSortCell name="roles">Validated</TableSortCell>
          </DatatableHead>
          <DatatableBody renderRow={renderRow}/>
        </Datatable>
      </Card>
    </div>
  )
}

const renderRow = (u: IUser) => {
  return (
    <DatatableRow>
      <TableCell>{new Date(u.created_at).toLocaleDateString()}</TableCell>
      <TableCell>{u.first_name}</TableCell>
      <TableCell>{u.last_name}</TableCell>
      <TableCell>{u.email}</TableCell>
      <TableCell>{u.phone}</TableCell>
      <TableCell>
        {u.has_been_claimed ?
          <Icon style={{color: 'green'}}>check</Icon> :
          <Icon style={{color: 'red'}}>clear</Icon>
        }
      </TableCell>
    </DatatableRow>
  )
}

export default SimpleDatatable
