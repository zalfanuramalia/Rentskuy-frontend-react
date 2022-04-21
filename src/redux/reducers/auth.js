const initialState = {
    token: null,
    userData: {},
    isLoading: false,
    isError: false,
    errorMsg: ''
}

const auth = (state=initialState, action)=>{
    switch(action.type){
        case 'AUTH_LOGIN_PENDING': {
            state.isLoading = true
            state.isError = false
            return {...state}
        }
        case 'AUTH_LOGIN_FULFILLED': {
            const {data} = action.payload
            console.log(data)
            state.isLoading = false
            state.isError = false
            state.token = data.results.token
            window.localStorage.setItem('token', state.token)
            return {...state}
        }
        case 'AUTH_LOGIN_REJECTED': {
          const {message} = action.payload.response.data
          state.isLoading = false
          state.isError = true
          state.errorMsg = message
          return {...state}
        }
        case 'AUTH_LOGOUT': {
          state.token = null
          window.localStorage.removeItem('token')
          return {...state}
        }
        case 'POST_FORGOT_PASSWORD_PENDING': {
          state.isLoading = true
          state.isError = false
          return {...state}
        }
        case 'POST_FORGOT_PASSWORD_FULFILLED': {
          const {data} = action.payload
          console.log(data)
          state.isLoading = false
          state.isError = false
          window.localStorage.setItem('token', state.token)
          return {...state}
        }
        case 'POST_FORGOT_PASSWORD_REJECTED': {
          const {message} = action.payload.response.data
          state.isLoading = false
          state.isError = true
          state.errorMsg = message
          return {...state}
        }
        case 'POST_CHANGE_PASSWORD_PENDING': {
          state.isLoading = true
          state.isError = false
          return {...state}
        }
        case 'POST_CHANGE_PASSWORD_FULFILLED': {
          const {data} = action.payload
          console.log(data)
          state.isLoading = false
          state.isError = false
          return {...state}
        }
        case 'POST_CHANGE_PASSWORD_REJECTED': {
          const {message} = action.payload.response.data
          state.isLoading = false
          state.isError = true
          state.errorMsg = message
          return {...state}
        }
        case 'AUTH_USERDATA_PENDING': {
          state.isLoading = true
          return {...state}
        }
        case 'AUTH_USERDATA_FULFILLED': {
          const {data} = action.payload
          state.isLoading = false
          state.userData = data.results
          return {...state}
        }
        default: {
          return {...state}
        }
    }
}

export default auth