import * as React from 'react'
import {MenuItem, Select, TableCell, TableRow} from '@material-ui/core'
import {Datatable, DatatableBody, DatatableHead} from '../../../lib/Datatable/index'
import {TableSortCell} from 'react-components'
import {IUser, UserGender} from '../../core/type/user'
import DatatableRow from '../../../lib/Datatable/DatatableRow'
import {PaginateAction} from '../../../lib/Datatable/redux/datatableAction'
import {fetchUsers} from '../../core/redux/userAction'
import {connect} from 'react-redux'

export const EXPENDABLE_DATATABLE = 'expendableDatatable'
const action = fetchUsers(EXPENDABLE_DATATABLE)
const paginateAction = new PaginateAction<IUser>(EXPENDABLE_DATATABLE, action)

const dispatch2props = (dispatch: any) => ({
  updateCriteria: (name: string, value: any) => dispatch(paginateAction.updateCriteria(name, value)),
})

const CustomDatatable = connect(null, dispatch2props)(({updateCriteria}: ReturnType<typeof dispatch2props>) => {

  const update = (name: string) => (event) => updateCriteria(name, event.target.value)

  // @ts-ignore
  const [gender, setGender] = React.useState('')

  return (
    <Datatable name={EXPENDABLE_DATATABLE} action={action}>
      <DatatableHead>
        <TableSortCell name="createdAt">Date</TableSortCell>
        <TableSortCell name="gender">First name</TableSortCell>
        <TableSortCell name="lastName">Last name</TableSortCell>
        <TableSortCell name="status">Validated</TableSortCell>
        <TableSortCell name="score">Score</TableSortCell>
      </DatatableHead>
      <DatatableBody renderRow={renderRow}>
        <TableRow>
          <TableCell>
          </TableCell>
          <TableCell>
            <Select value={gender} onChange={(e) => {update('gender')(e), setGender(e.target.value)}}>
              <MenuItem/>
              {Object.keys(UserGender).map(k =>
                <MenuItem key={k} value={k}>{UserGender[k]}</MenuItem>
              )}
            </Select>
          </TableCell>
          <TableCell>
            <input onChange={update('lastName')}/>
          </TableCell>
          <TableCell>
          </TableCell>
          <TableCell>
          </TableCell>
        </TableRow>
      </DatatableBody>
    </Datatable>
  )
})

const renderRow = (u: IUser) => {
  return (
    <DatatableRow>
      <TableCell>{new Date(u.createdAt).toLocaleDateString()}</TableCell>
      <TableCell>{u.gender}</TableCell>
      <TableCell>{u.lastName}</TableCell>
      <TableCell>{u.score}</TableCell>
      <TableCell>
        {u.status}
      </TableCell>
    </DatatableRow>
  )
}

export default CustomDatatable
