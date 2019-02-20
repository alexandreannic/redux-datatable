import {IPagination} from '../../type/paginated'
import {Criteria} from '../../type/criteria'
import {range} from '../../utils/common'
import {createReducer} from './createReducer'
import {PAGINATE_} from './datatableAction'

export interface IPaginateState<T> {
  route?: Promise<IPagination<T>>;
  isFetching: boolean;
  entities?: T[];
  criteria: Criteria;
  total_size?: number;
  error?: string
}

const defaultState: IPaginateState<any> = {
  route: undefined,
  isFetching: false,
  entities: undefined,
  total_size: undefined,
  criteria: {limit: 10, offset: 0, orderBy: 'asc'},
  error: undefined,
}

const request = <T>(state: IPaginateState<T>, action) => ({
  ...state,
  isFetching: true,
})

const success = <T>(state: IPaginateState<T>, action) => ({
  ...state,
  isFetching: false,
  entities: action.data.data,
  total_size: action.data.total_size,
})

const failure = <T>(state: IPaginateState<T>, action) => ({
  ...state,
  isFetching: false,
  error: action.error,
})

const nextPage = <T>(state: IPaginateState<T>, action) => ({
  ...state,
  criteria: {
    ...state.criteria,
    offset: Math.min(state.criteria.offset + state.criteria.limit, state.total_size || 0)
  },
})

const prevPage = <T>(state: IPaginateState<T>, action) => ({
  ...state,
  criteria: {
    ...state.criteria,
    offset: Math.max(state.criteria.offset - state.criteria.limit, 0)
  },
})

const goToPage = <T>(state: IPaginateState<T>, action) => {
  const offset = action.pageNumber * state.criteria.limit
  return ({
    ...state,
    criteria: {
      ...state.criteria,
      offset: range(0, state.total_size || 0)(offset)
    },
  })
}

const updateCriteria = <T>(state: IPaginateState<T>, action) => ({
  ...state,
  criteria: {
    ...state.criteria,
    [action.name]: action.value
  },
})

const sort = <T>(state: IPaginateState<T>, action) => ({
  ...state,
  criteria: {
    ...state.criteria,
    sortBy: action.sortBy,
    orderBy: action.orderBy,
  },
})

export const datatableReducer = <T>(name: string) => {
  const ACTION = PAGINATE_(name)
  return createReducer<IPaginateState<T>>(defaultState, {
    [ACTION.REQUEST]: request,
    [ACTION.SUCCESS]: success,
    [ACTION.FAILURE]: failure,
    [ACTION.NEXT_PAGE]: nextPage,
    [ACTION.PREV_PAGE]: prevPage,
    [ACTION.GO_TO_PAGE]: goToPage,
    [ACTION.UPDATE_CRITERIA]: updateCriteria,
    [ACTION.SORT]: sort,
  })
}
