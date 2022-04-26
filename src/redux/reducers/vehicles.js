const vehiclesState = {
  vehicles: [],
  pageInfo: {},
  isLoading: false,
  isError: false,
};

const vehicles = (state=vehiclesState, action)=> {
  switch(action.type){
  case 'ADD_ITEM_PENDING': {
    state.isLoading =true;
    state.isError = false;
    return {...state};
  }
  case 'ADD_ITEM_FULFILLED': {
    const {data} = action.payload;
    state.vehicles = data.results;
    state.pageInfo = data.info;
    state.isLoading = false;
    state.isError = false;
    return {...state};
  }
  case 'ADD_ITEM_REJECTED': {
    const {message} = action.payload.response.data;
    state.isLoading = false;
    state.isError = true;
    state.vehicles = [];
    state.errorMsg = message;
    return {...state};
  }
  default: {
    return {...state};
  }
  }
};

export default vehicles;