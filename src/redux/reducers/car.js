const carState = {
  car: [],
  pageInfo: {},
  isLoading: false,
  isError: false,
};

const car = (state=carState, action)=> {
  switch(action.type){
  case 'GET_CAR_PENDING': {
    state.isLoading =true;
    state.isError = false;
    return {...state};
  }
  case 'GET_CAR_FULFILLED': {
    const {data} = action.payload;
    state.car = data.results;
    state.pageInfo = data.info;
    state.isLoading = false;
    state.isError = false;
    return {...state};
  }
  case 'GET_CAR_REJECTED': {
    const {message} = action.payload.response.data;
    state.isLoading = false;
    state.isError = true;
    state.car = [];
    state.errorMsg = message;
    return {...state};
  }
  default: {
    return {...state};
  }
  }
};

export default car;