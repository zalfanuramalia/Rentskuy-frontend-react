const profilState = {
  pageInfo: {},
  isLoading: false,
  isError: false,
};

const profil = (state=profilState, action)=>{
  switch(action.type){
  case 'UPDATE_PROFIL_PENDING': {
    state.isLoading = true;
    state.isError = false;
    return {...state};
  }
  case 'UPDATE_PROFIL_FULFILLED': {
    const {data} = action.payload;
    console.log(data);
    state.detail = data.results;
    state.pageInfo = data.info;
    state.isLoading = false;
    return {...state};
  }
  case 'UPDATE_PROFIL_REJECTED': {
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