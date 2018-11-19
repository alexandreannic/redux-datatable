export function createReducer<T>(initialState: any, handlers: any): (state: any, action: any) => T {
  return function reducer(state = initialState, action) {
    if (handlers.hasOwnProperty(action.type)) {
      return handlers[action.type](state, action)
    } else {
      return state
    }
  }
}
