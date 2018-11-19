import * as React from 'react'
import {ReactChild, ReactElement} from 'react'
import {LinearProgress, Table, TableBody, TablePagination, TableRow} from '@material-ui/core'
import autobind from 'autobind-decorator'
import {connect} from 'react-redux'
import {Criteria, OrderByType} from '../type/criteria'
import {PaginateAction, RootState} from './redux/datatableAction'
import {LocalStorageEntity} from '../utils/localStorage'

const DatatableContext = React.createContext({})
export const datatableConsumer = <P extends object>(
  Component: React.ComponentType<P & IDatatableContext>
): React.SFC<any> => (props: Pick<P, Exclude<keyof P, keyof IDatatableContext>>) => (
  <DatatableContext.Consumer>
    {(ctx: any) => <Component {...props} {...ctx}/>}
  </DatatableContext.Consumer>
)

interface IProps {
  name: string
  action: (c?: Criteria) => (dispatch, getState: () => RootState) => void
  dispatch?: any
  children: Array<ReactElement<any>>
  toolbar?: ReactElement<any>
  onSelect?: (indexes: number[]) => void
  style?: object
  className?: string
}

export interface IDatatableColumn {
  label: ReactChild;
}

export interface IDatatableContext {
  name: string
  actions: PaginateAction<any>
  selected: number[]
  onSelect: (indexes: number[]) => void
  columns: IDatatableColumn[]
  publishColumns: (columns: IDatatableColumn[]) => void
  hiddenColumnsIndexes: boolean[]
  onToggleColumnVisibility: (index: number) => void
  isColumnVisible: (index: number) => boolean
  expendedRow?: number
  expendRow: (id: number) => void
}

class Datatable extends React.Component<IProps & ReturnType<typeof state2props>, IDatatableContext> {

  private storage: LocalStorageEntity<boolean[]>

  constructor(props) {
    super(props)
    this.storage = new LocalStorageEntity<boolean[]>('datatable_columns_' + name)
    this.state = {
      name: props.name,
      actions: new PaginateAction<any>(props.name, props.action),
      selected: [],
      onSelect: props.onSelect && this.handleSelect,
      columns: [],
      publishColumns: this.handlePublishColumns,
      hiddenColumnsIndexes: this.storage.load() || [],
      onToggleColumnVisibility: this.ToggleColumnVisibility,
      isColumnVisible: this.isColumnVisible,
      expendRow: this.expendRow,
    }
  }

  render() {
    const {children, isFetching, toolbar, criteria, size, page, className, style} = this.props
    return (
      <DatatableContext.Provider value={this.state}>
        <div className={className} style={style}>
          {toolbar}
          <div style={{overflowX: 'auto', overflowY: 'hidden', width: '100%', position: 'relative'}}>
            {isFetching && <LinearProgress style={{position: 'absolute', top: 0, left: 0, right: 0}}/>}
            <Table style={{borderCollapse: 'initial' /* Fix bug when apply transform on <tr> */}}>
              {children}
            </Table>
          </div>
          <Table>
            <TableBody>
              <TableRow>
                <TablePagination
                  count={size || 0}
                  rowsPerPage={criteria.limit}
                  page={page}
                  onChangePage={this.handleChangePage}
                  onChangeRowsPerPage={this.handleChangeRowsPerPage}
                />
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </DatatableContext.Provider>
    )
  }

  componentDidMount() {
    const {data} = this.props
    if (!data) this.search()
  }

  private async search() {
    const {dispatch, criteria, action} = this.props
    // TODO Handle progress and error
    dispatch(action(criteria))
  }

  @autobind
  private handleChangeRowsPerPage(event) {
    const {dispatch} = this.props
    this.resetExpendedRow()
    if (this.state.actions)
      dispatch(this.state.actions.updateCriteria('limit', event.target.value))
  }

  @autobind
  private handleSortChange(sortBy: string, orderBy: OrderByType) {
    this.resetExpendedRow()
    const {dispatch} = this.props
    dispatch(this.state.actions.sort(sortBy, orderBy))
  }

  @autobind
  private handleChangePage(e, newPage: number) {
    this.resetExpendedRow()
    const {dispatch} = this.props
    if (this.state.actions)
      dispatch(this.state.actions.goToPage(newPage))
  }

  @autobind
  private handleSelect(selected: number[]) {
    const {onSelect} = this.props
    this.setState({selected})
    if (onSelect) onSelect(selected)
  }

  @autobind
  private handlePublishColumns(columns: IDatatableColumn[]) {
    this.setState({columns})
  }

  @autobind
  private isColumnVisible(i: number): boolean {
    const {hiddenColumnsIndexes} = this.state
    return !hiddenColumnsIndexes[i]
  }

  @autobind
  private ToggleColumnVisibility(i: number) {
    const {hiddenColumnsIndexes} = this.state
    hiddenColumnsIndexes[i] = !hiddenColumnsIndexes[i]
    this.setState({hiddenColumnsIndexes: [...hiddenColumnsIndexes]}, this.persistHiddenColumns)
  }

  @autobind
  private expendRow(id: number) {
    this.setState(state => ({expendedRow: state.expendedRow !== id ? id : undefined}))
  }

  private resetExpendedRow() {
    if (this.state.expendedRow)
      this.setState({expendedRow: undefined})
  }

  private persistHiddenColumns() {
    this.storage.save(this.state.hiddenColumnsIndexes)
  }
}

const state2props = (state: RootState, ownProps: IProps) => {
  const paginateState = state.paginate[ownProps.name]
  return {
    isFetching: paginateState.isFetching,
    page: paginateState.criteria.offset / paginateState.criteria.limit,
    criteria: paginateState.criteria,
    size: paginateState.total_size,
    data: paginateState.entities,
  }
}

export default connect(state2props)(Datatable)
