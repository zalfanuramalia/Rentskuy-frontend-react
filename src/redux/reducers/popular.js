const popularState = {
  popular: [],
  pageInfo: {},
  isLoading: false,
  isError: false,
}

const popular = (state = popularState, action) => {
  switch (action.type) {
    case 'GET_POPULAR_PENDING': {
      state.isLoading = true
      state.isError = false
      return {...state}
    }
    case 'GET_POPULAR_FULFILLED': {
      const {data} = action.payload
      state.popular = data.results
      state.pageInfo = data.info
      state.isLoading = false
      state.isError = false
      return {...state}
    }
    case 'GET_POPULAR_REJECTED': {
      const {message} = action.payload.response.data
      state.isLoading = false
      state.isError = true
      state.errorMsg = message
      return {...state}
    }
    default: {
      return {...state}
    }
  }
}

export default popular