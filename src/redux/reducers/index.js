import { combineReducers } from "redux";

const initState = {
    token: null
}

const counterState = {
    num: 0
}

// const dataState = {
//     character: [],
//     pageInfo: {},
//     isLoading: false,
//     error: false
// }


const rootReducer = combineReducers ({ 
    auth: (state = initState, action) => {
        switch(action.type) {
            case 'LOGIN': {
                const {email, password} = action.payload
                if(email==='admin@mail.com' && password === '1234'){
                    state.token = 'abc'
                    return state
                }else{
                    alert('Wrong username or password!')
                    state.token = null
                    return state
                }
            }
            case 'LOGOUT' : {
                state.token = null
                return state
            }
            default: {
                return state
            }
        }
    },
    counter: (state=counterState, action) => {
        switch(action.type){
            case 'INCREMENT': {
                state.num = state.num + 1
                return state
            }
            case 'DECREMENT': {
                state.num = state.num - 1
                return state
            }
            default: {
                return {...state}
            }
        }
    }
})

export default rootReducer