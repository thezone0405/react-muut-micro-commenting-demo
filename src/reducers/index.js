import {combineReducers} from 'redux'

const init = (initialState,action) => {
    return {
        welcomeText: "HEY WORKING"
    }
}

const reducers = combineReducers({
    initialState: init
})

export default reducers