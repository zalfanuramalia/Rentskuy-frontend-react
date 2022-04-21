const initialState = {
  register: {},
  isLoading: false,
  isError: false,
  errorMsg: ''
};

const register = (state=initialState, action)=>{
  switch(action.type){
  case 'AUTH_REGISTER_PENDING': {
    state.isLoading = true;
    state.isError = false;
    return {...state};
  }
  case 'AUTH_REGISTER_FULFILLED': {
    const {data} = action.payload;
    state.register = data.result;
    console.log(data);
    state.isLoading = false;
    state.isError = false;
    return {...state};
  }
  case 'AUTH_REGISTER_REJECTED': {
    const {message} = action.payload.response.data;
    state.isLoading = false;
    state.isError = true;
    state.errorMsg = message;
    return {...state};
  }
  default: {
    return {...state};
  }
  }
};

export default register;