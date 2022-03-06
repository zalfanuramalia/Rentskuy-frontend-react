import { combineReducers } from "redux";
import auth from './auth'
import buttons from "./buttons";
import detail from "./detail";

const dataState = {
    popular: [],
    car: [],
    motorbike: [],
    bike: [],
    pageInfo: {},
    isLoading: false,
    error: false
}


const rootReducer = combineReducers ({ 
    auth,
    buttons,
    detail,
    popular: (state=dataState, action)=> {
      switch(action.type){
          case 'GET_POPULAR_PENDING': {
              state.isLoading =true
              return state
          }
          case 'GET_POPULAR_FULFILLED': {
              const {data} = action.payload
              state.popular = data.result
              state.pageInfo = data.info
              state.isLoading = false
              return state
          }
          case 'GET_POPULAR_REJECTED': {
              state.isLoading = false
              state.isError = true
              return state
          }
          default: {
              return state
          }
      }
    },
    car: (state=dataState, action)=> {
        switch(action.type){
            case 'GET_CAR_PENDING': {
                state.isLoading =true
                return state
            }
            case 'GET_CAR_FULFILLED': {
                const {data} = action.payload
                state.car = data.results
                state.pageInfo = data.info
                state.isLoading = false
                return state
            }
            case 'GET_CAR_REJECTED': {
                state.isLoading = false
                state.isError = true
                return state
            }
            default: {
                return state
            }
        }
    },
    motorbike: (state=dataState, action)=> {
        switch(action.type){
            case 'GET_MOTORBIKE_PENDING': {
                state.isLoading =true
                return state
            }
            case 'GET_MOTORBIKE_FULFILLED': {
                const {data} = action.payload
                state.motorbike = data.results
                state.pageInfo = data.info
                state.isLoading = false
                return state
            }
            case 'GET_MOTORBIKE_REJECTED': {
                state.isLoading = false
                state.isError = true
                return state
            }
            default: {
                return state
            }
        }
    },
    bike: (state=dataState, action)=> {
        switch(action.type){
            case 'GET_BIKE_PENDING': {
                state.isLoading =true
                return state
            }
            case 'GET_BIKE_FULFILLED': {
                const {data} = action.payload
                state.bike = data.results
                state.pageInfo = data.info
                state.isLoading = false
                return state
            }
            case 'GET_BIKE_REJECTED': {
                state.isLoading = false
                state.isError = true
                return state
            }
            default: {
                return state
            }
        }
    }
})

export default rootReducer