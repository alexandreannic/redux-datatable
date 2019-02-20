import * as React from 'react'
import {Checkbox, createStyles, Icon, TableCell, TableRow, withStyles} from '@material-ui/core'
import {Datatable, DatatableBody, DatatableHead, DatatableRow, DatatableSort, PaginateAction} from '@alexandreannic/redux-datatable'
import {UserGender} from '../../core/type/user'
import {fetchUsers} from '../../core/redux/userAction'
import {connect} from 'react-redux'

export const CUSTOM_DATATABLE = 'customDatatable'
const action = fetchUsers(CUSTOM_DATATABLE)
const paginateAction = new PaginateAction(CUSTOM_DATATABLE, action)

const dispatch2props = dispatch => ({
  updateCriteria: (name, value) => dispatch(paginateAction.updateCriteria(name, value)),
})

const styles = t => createStyles({
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

const CustomDatatable = ({updateCriteria, classes}) => {
  const update = name => event => updateCriteria(name, event.target.value)
  return (
    <Datatable
      name={CUSTOM_DATATABLE}
      action={action}
      style={{border: `1px solid rgba(0, 0, 0, 0.12)`, borderRadius: 4,}}>
      <DatatableHead>
        <DatatableSort name="gender">Gender</DatatableSort>
        <DatatableSort name="lastName">Last name</DatatableSort>
        <DatatableSort name="score">Score</DatatableSort>
        <DatatableSort name="status">Status</DatatableSort>
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
          <TableCell className={classes.filterCell} numeric>
            <input onChange={update('scoreMin')} className={classes.input} style={{width: 40}} placeholder="Min"/>
            &nbsp;
            <input onChange={update('scoreMax')} className={classes.input} style={{width: 40}} placeholder="Max"/>
          </TableCell>
          <TableCell className={classes.filterCell}>
            <Checkbox onChange={(e, checked) => updateCriteria('validated', checked)} style={{width: 24}}/>
          </TableCell>
        </TableRow>
      </DatatableBody>
    </Datatable>
  )
}

const renderRow = u => (
  <DatatableRow>
    <TableCell>{u.gender}</TableCell>
    <TableCell>{u.lastName}</TableCell>
    <TableCell numeric>{u.score}</TableCell>
    <TableCell>
      {u.validated ? <Icon style={{color: 'green'}}>check</Icon> : <Icon style={{color: 'red'}}>block</Icon>}
    </TableCell>
  </DatatableRow>
)

export default withStyles(styles)(connect(null, dispatch2props)(CustomDatatable))
