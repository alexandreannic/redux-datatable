import {IPagination} from '../../type/paginated'
import {Criteria} from '../../type/criteria'
import {range} from '../../utils/common'
import {createReducer} from './createReducer'
import {_PAGINATE} from './datatableAction'

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
  criteria: {limit: 10, offset: 0, order_by: 'asc'},
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
    sort_by: action.sortBy,
    order_by: action.orderBy,
  },
})

export default <T>(name: string) => createReducer<IPaginateState<T>>(defaultState, {
  [_PAGINATE(name).REQUEST]: request,
  [_PAGINATE(name).SUCCESS]: success,
  [_PAGINATE(name).FAILURE]: failure,
  [_PAGINATE(name).NEXT_PAGE]: nextPage,
  [_PAGINATE(name).PREV_PAGE]: prevPage,
  [_PAGINATE(name).GO_TO_PAGE]: goToPage,
  [_PAGINATE(name).UPDATE_CRITERIA]: updateCriteria,
  [_PAGINATE(name).SORT]: sort,
})
