const profilState = {
  pageInfo: {},
  isLoading: false,
  isError: false,
  profile: {},
  updateProfile: {}
};

const profil = (state=profilState, action)=>{
  switch(action.type){
  case 'GET_PROFILE_PENDING': {
    state.isLoading = true;
    state.isError = false;
    return {...state};
  }
  case 'GET_PROFILE_FULFILLED': {
    const {data} = action.payload;
    console.log(data);
    state.profile = data.results;
    state.pageInfo = data.info;
    state.isLoading = false;
    return {...state};
  }
  case 'GET_PROFILE_REJECTED': {
    state.isLoading = false;
    state.isError = true;
    return {...state};
  }
  case 'UPDATE_PROFILE_PENDING': {
    state.isLoading = true;
    state.isError = false;
    return {...state};
  }
  case 'UPDATE_PROFILE_FULFILLED': {
    const {data} = action.payload;
    console.log(data);
    state.updateProfile = data.results;
    state.pageInfo = data.info;
    state.isLoading = false;
    return {...state};
  }
  case 'UPDATE_PROFILE_REJECTED': {
    state.isLoading = false;
    state.isError = true;
    return {...state};
  }
  default: {
    return {...state};
  }
  }
};

export default profil;