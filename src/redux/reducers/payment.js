const detailState = {
  pageInfo: {},
  isLoading: false,
  isError: false,
}

const payment = (state=detailState, action)=>{
  switch(action.type){
    case 'POST_PAYMENT_PENDING': {
      state.isLoading = true
      state.isError = false
      return {...state}
    }
    case 'POST_PAYMENT_FULFILLED': {
      const {data} = action.payload
      console.log(data)
      state.detail = data.result
      state.pageInfo = data.info
      state.isLoading = false
      return {...state}
    }
    case 'POST_PAYMENT_REJECTED': {
      state.isLoading = false
      state.isError = true
      return {...state}
    }
    default: {
        return {...state}
    }
  }
}

export default payment