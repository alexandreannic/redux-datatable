import * as React from 'react'
import {Checkbox, createStyles, Icon, TableCell, TableRow, Theme, withStyles, WithStyles} from '@material-ui/core'
import {Datatable, DatatableBody, DatatableHead, DatatableToolbar} from '../../../lib/Datatable/index'
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

interface IProps extends WithStyles<typeof styles>, ReturnType<typeof dispatch2props> {
}

const styles = (t: Theme) => createStyles({
  input: {
    height: 28,
    width: '100%',
    border: 'none',
    background: t.palette.background.default,
    borderRadius: 4,
    paddingRight: t.spacing.unit,
    paddingLeft: t.spacing.unit,
  },
  filterCell: {
    paddingTop: 0,
    paddingBottom: 0,
  }
})

const CustomDatatable = ({updateCriteria, classes}: IProps) => {
  const update = (name: string) => (event) => updateCriteria(name, event.target.value)
  return (
    <Datatable
      name={EXPENDABLE_DATATABLE}
      action={action}
      toolbar={
        <DatatableToolbar search="global_search"/>
      }>
      <DatatableHead>
        <TableSortCell name="gender">Gender</TableSortCell>
        <TableSortCell name="lastName">Last name</TableSortCell>
        <TableSortCell name="score">Score</TableSortCell>
        <TableSortCell name="status">Status</TableSortCell>
      </DatatableHead>
      <DatatableBody renderRow={renderRow}>
        <TableRow>
          <TableCell className={classes.filterCell}>
            <select onChange={update('gender')} className={classes.input} placeholder="Gender">
              <option/>
              {Object.keys(UserGender).map(k =>
                <option key={k} value={k}>{UserGender[k]}</option>
              )}
            </select>
          </TableCell>
          <TableCell className={classes.filterCell}>
            <input onChange={update('lastName')} className={classes.input} placeholder="Last name"/>
          </TableCell>
          <TableCell className={classes.filterCell}>
            <div style={{display: 'flex'}}>
              <input onChange={update('scoreMin')} className={classes.input} style={{width: 40}} placeholder="Min"/>
              &nbsp;
              <input onChange={update('scoreMax')} className={classes.input} style={{width: 40}} placeholder="Max"/>
            </div>
          </TableCell>
          <TableCell className={classes.filterCell}>
            <Checkbox onChange={(e, checked) => updateCriteria('validated', checked)} style={{width: 24}}/>
          </TableCell>
        </TableRow>
      </DatatableBody>
    </Datatable>
  )
}

const renderRow = (u: IUser) => {
  return (
    <DatatableRow>
      <TableCell>{u.gender}</TableCell>
      <TableCell>{u.lastName}</TableCell>
      <TableCell numeric>{u.score}</TableCell>
      <TableCell>
        {u.validated ? <Icon style={{color: 'green'}}>check</Icon> : <Icon style={{color: 'red'}}>block</Icon>}
      </TableCell>
    </DatatableRow>
  )
}

export default withStyles(styles)(connect(null, dispatch2props)(CustomDatatable))
