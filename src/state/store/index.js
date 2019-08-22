import {createStore, applyMiddleware} from 'redux'
import reducers  from 'state/reducers'
import thunk from 'redux-thunk'
import setAuthorization from 'utils/setAuthorization'
import {setUser} from 'state/actions/actionAuthentication'

const store = createStore(reducers, applyMiddleware(thunk))

const {username, token} = localStorage
if(username){
    store.dispatch(setUser(username))
}
setAuthorization(token)

export default store