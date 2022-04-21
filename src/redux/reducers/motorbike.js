const motorbikeState = {
  motorbike: [],
  motorbikeFilter: [],
  pageInfo: {},
  isLoading: false,
  isError: false,
};

const motorbike = (state=motorbikeState, action)=> {
  switch(action.type){
  case 'GET_MOTORBIKE_PENDING': {
    state.isLoading =true;
    state.isError = false;
    return {...state};
  }
  case 'GET_MOTORBIKE_FULFILLED': {
    const {data} = action.payload;
    state.motorbike = data.results;
    state.pageInfo = data.info;
    state.isLoading = false;
    state.isError = false;
    return {...state};
  }
  case 'GET_MOTORBIKE_REJECTED': {
    const {message} = action.payload.response.data;
    state.isLoading = false;
    state.isError = true;
    state.motorbike = [];
    state.errorMsg = message;
    return {...state};
  }
  case 'FILTER_MOTORBIKE_PENDING': {
    state.isLoading =true;
    state.isError = false;
    return {...state};
  }
  case 'FILTER_MOTORBIKE_FULFILLED': {
    const {data} = action.payload;
    state.motorbikeFilter = data.results;
    state.pageInfo = data.info;
    state.isLoading = false;
    state.isError = false;
    return {...state};
  }
  case 'FILTER_MOTORBIKE_REJECTED': {
    const {message} = action.payload.response.data;
    state.isLoading = false;
    state.isError = true;
    state.motorbike = [];
    state.errorMsg = message;
    return {...state};
  }
  default: {
    return {...state};
  }
  }
};

export default motorbike;