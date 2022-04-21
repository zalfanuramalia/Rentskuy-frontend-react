const dataHistory = {
  history: [],
  historyUser: [],
  isError: false,
  isLoading: false,
  errMessage: null,
  message: null
};

const history = (state = dataHistory, action) => {
  switch (action.type) {
  case 'GET_HISTORY_PENDING':
  {
    state.isLoading = true;
    return {...state };
  }
  case 'GET_HISTORY_FULFILLED':
  {
    const { data } = action.payload;
    console.log(data);
    state.history = data.result;
    state.isLoading = false;
    state.isError = false;
    state.message = data.message;
    return {...state };
  }
  case 'GET_HISTORY_REJECTED':
  {
    const { data } = action.payload.response;
    state.isLoading = false;
    state.isError = true;
    state.errMessage = data.message;
    return {...state };
  }
  case 'HISTORY_USER_PENDING':
  {
    state.isLoading = true;
    return {...state };
  }
  case 'HISTORY_USER_FULFILLED':
  {
    const { data } = action.payload;
    console.log(data);
    state.historyUser = data.results;
    state.isLoading = false;
    state.isError = false;
    state.message = data.message;
    return {...state };
  }
  case 'HISTORY_USER_REJECTED':
  {
    const { data } = action.payload.response;
    state.isLoading = false;
    state.isError = true;
    state.errMessage = data.message;
    return {...state };
  }
  default:
  {
    return {...state };
  }
  }
};

export default history;