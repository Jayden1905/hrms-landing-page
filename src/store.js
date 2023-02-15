const initialState = {
  count: 0,
}

export const increment = (state) => ({
  ...state,
  count: state.count + 1,
})

export default initialState
