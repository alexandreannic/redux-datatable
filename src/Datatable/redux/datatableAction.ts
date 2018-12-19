import {Criteria, OrderByType} from '../../type/criteria'
import {IPaginateState} from './datatableReducer'

// TODO
export type RootState = any

const API_ = (name: string) => ({
  REQUEST: `${name}_REQUEST`,
  SUCCESS: `${name}_SUCCESS`,
  FAILURE: `${name}_FAILURE`,
})

export const PAGINATE_ = (name: string) => ({
  INIT: `PAGINATE_${name}_INIT`,
  NEXT_PAGE: `PAGINATE_${name}_NEXT_PAGE`,
  PREV_PAGE: `PAGINATE_${name}_PREV_PAGE`,
  GO_TO_PAGE: `PAGINATE_${name}_GO_TO_PAGE`,
  UPDATE_CRITERIA: `PAGINATE_${name}_UPDATE_CRITERIA`,
  SORT: `PAGINATE_${name}_SORT`,
  ...API_(`PAGINATE_${name}`)
})

export class PaginateAction<T> {

  constructor(private name: string,
              private action: (c?: Criteria) => (dispatch, getState: () => RootState) => any) {
  }

  nextPage = () => (dispatch, getState: () => RootState) => {
    dispatch({type: PAGINATE_(this.name).NEXT_PAGE})
    return this.fetch(dispatch, getState)
  }

  prevPage = () => (dispatch, getState: () => RootState) => {
    dispatch({type: PAGINATE_(this.name).PREV_PAGE})
    return this.fetch(dispatch, getState)
  }

  goToPage = (pageNumber: number) => (dispatch, getState: () => RootState) => {
    dispatch({type: PAGINATE_(this.name).GO_TO_PAGE, pageNumber})
    return this.fetch(dispatch, getState)
  }

  sort = (sortBy: string, orderBy: OrderByType) => (dispatch, getState: () => RootState) => {
    dispatch({type: PAGINATE_(this.name).SORT, sortBy, orderBy})
    return this.fetch(dispatch, getState)
  }

  updateCriteria = (name: string, value: any) => (dispatch, getState: () => RootState) => {
    dispatch({type: PAGINATE_(this.name).UPDATE_CRITERIA, name, value})
    return this.fetch(dispatch, getState)
  }

  private fetch(dispatch, getState: () => RootState) {
    return this.action(this.getState(getState).criteria)(dispatch, getState)
  }

  private getState(getState: () => RootState): IPaginateState<T> {
    return getState().paginate[this.name] as IPaginateState<T>
  }
}
