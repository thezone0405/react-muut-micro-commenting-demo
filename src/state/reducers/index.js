import {combineReducers} from 'redux'

const initialState = (state,action) => {
    return {
        ...state,
        message: "HEY WORKING"
    }
}

const reducers = combineReducers({
    welcome: initialState
})

export default reducers