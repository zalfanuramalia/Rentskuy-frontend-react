import { combineReducers } from "redux";
import auth from './auth'
import buttons from "./buttons";
import detail from "./detail";
import register from "./register";
import payment from "./payment";
import history from "./history";
import popular from "./popular";

const dataState = {
    car: [],
    motorbike: [],
    bike: [],
    pageInfo: {},
    isLoading: false,
    isError: false,
}


const rootReducer = combineReducers ({ 
    auth,
    buttons,
    detail,
    register,
    payment,
    history,
    popular,
    car: (state=dataState, action)=> {
      switch(action.type){
          case 'GET_CAR_PENDING': {
              state.isLoading =true
              state.isError = false
              return {...state}
          }
          case 'GET_CAR_FULFILLED': {
              const {data} = action.payload
              state.car = data.results
              state.pageInfo = data.info
              state.isLoading = false
              state.isError = false
              return {...state}
          }
          case 'GET_CAR_REJECTED': {
              const {message} = action.payload.response.data
              state.isLoading = false
              state.isError = true
              state.car = []
              state.errorMsg = message
              return {...state}
          }
          default: {
              return {...state}
          }
      }
    },
    motorbike: (state=dataState, action)=> {
        switch(action.type){
            case 'GET_MOTORBIKE_PENDING': {
                state.isLoading =true
                state.isError = false
                return {...state}
            }
            case 'GET_MOTORBIKE_FULFILLED': {
                const {data} = action.payload
                state.motorbike = data.results
                state.pageInfo = data.info
                state.isLoading = false
                state.isError = false
                return {...state}
            }
            case 'GET_MOTORBIKE_REJECTED': {
                const {message} = action.payload.response.data
                state.isLoading = false
                state.isError = true
                state.motorbike = []
                state.errorMsg = message
                return {...state}
            }
            default: {
                return {...state}
            }
        }
    },
    bike: (state=dataState, action)=> {
        switch(action.type){
            case 'GET_BIKE_PENDING': {
                state.isLoading =true
                state.isError = false
                return {...state}
            }
            case 'GET_BIKE_FULFILLED': {
                const {data} = action.payload
                state.bike = data.results
                state.pageInfo = data.info
                state.isLoading = false
                state.isError = false
                return {...state}
            }
            case 'GET_BIKE_REJECTED': {
                const {message} = action.payload.response.data
                state.isLoading = false
                state.isError = true
                state.bike = []
                state.errorMsg = message
                return {...state}
            }
            default: {
                return {...state}
            }
        }
    }
})

export default rootReducer