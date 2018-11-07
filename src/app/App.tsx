import * as React from 'react'
import {ReactChild} from 'react'
import {Card, createStyles, Icon, TableCell, Theme, WithStyles, withStyles} from '@material-ui/core'
import {compose} from 'redux'
import autobind from 'autobind-decorator'
import {connect} from 'react-redux'
import {PaginateAction} from '../lib/Datatable/redux/datatableAction'
import {fetchUsers} from './core/redux/userAction'
import {Datatable, DatatableBody, DatatableHead, DatatableToolbar} from '../lib/Datatable'
import {TableSortCell} from 'react-components'
import {IUser} from './core/type/user'
import DatatableRow from '../lib/Datatable/DatatableRow'

const styles = (t: Theme) => createStyles({
  claimed: {
    color: 'green',
  },
  notClaimed: {
    color: t.palette.error.main,
  }
})

interface IProps extends WithStyles<typeof styles> {
  dispatch: any;
}

const paginateName = 'users'
const paginateAction = fetchUsers
const actions = new PaginateAction<IUser>(paginateName, paginateAction)

class Users extends React.Component<IProps & ReturnType<typeof dispatch2props>, {}> {

  render() {
    return (
      <>
        <Card>
          <Datatable
            dispatch={() => {}}
            name={paginateName}
            action={paginateAction}
            onSelect={console.log}>
            <DatatableToolbar search="global_search"/>
            <DatatableHead>
              <TableSortCell name="created_at">Date</TableSortCell>
              <TableSortCell name="first_name">First name</TableSortCell>
              <TableSortCell name="last_name">Last name</TableSortCell>
              <TableSortCell name="email">Email</TableSortCell>
              <TableSortCell name="phone">Phone</TableSortCell>
              <TableSortCell name="roles">Validated</TableSortCell>
            </DatatableHead>
            <DatatableBody renderRow={this.renderRow}/>
          </Datatable>
        </Card>
      </>
    )
  }

  @autobind
  private renderRow(u: IUser) {
    const {classes} = this.props
    return (
      <DatatableRow expendedChild={this.renderExpendedRow(u)}>
        <TableCell>{u.created_at}</TableCell>
        <TableCell>{u.first_name}</TableCell>
        <TableCell>{u.last_name}</TableCell>
        <TableCell>{u.email}</TableCell>
        <TableCell>{u.phone}</TableCell>
        <TableCell>
          {u.has_been_claimed ?
            <Icon className={classes.claimed}>check</Icon> :
            <Icon className={classes.notClaimed}>clear</Icon>
          }
        </TableCell>
      </DatatableRow>
    )
  }

  private renderExpendedRow(u: IUser): ReactChild {
    return (
      <>
        {u.address &&
        <div>
          {u.address.number}
          {u.address.street}
          {u.address.city}
          {u.address.zip}
          {u.address.country}
        </div>
        }
        {u.bio}
      </>
    )
  }

  @autobind
  private updateCriteria(name: string) {
    return (event) => this.props.updateCriteria(name, event.target.value)
  }
}

const dispatch2props = (dispatch: any) => ({
  updateCriteria: (name: string, value: any) => dispatch(actions.updateCriteria(name, value)),
})

export default compose(
  withStyles(styles),
  connect(null, dispatch2props),
)(Users)
