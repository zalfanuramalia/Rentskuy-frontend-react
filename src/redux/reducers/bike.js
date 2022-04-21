const bikeState = {
  bike: [],
  pageInfo: {},
  isLoading: false,
  isError: false,
}

const bike = (state=bikeState, action)=> {
switch(action.type){
  case 'GET_BIKE_PENDING': {
    state.isLoading =true
    state.isError = false
    return {...state}
  }
  case 'GET_BIKE_FULFILLED': {
      const {data} = action.payload
      state.bike = data.results
      state.pageInfo = data.info
      state.isLoading = false
      state.isError = false
      return {...state}
  }
  case 'GET_BIKE_REJECTED': {
      const {message} = action.payload.response.data
      state.isLoading = false
      state.isError = true
      state.bike = []
      state.errorMsg = message
      return {...state}
  }
    default: {
        return {...state}
    }
}
}

export default bike