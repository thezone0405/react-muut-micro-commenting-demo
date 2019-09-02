import {createStore, applyMiddleware} from 'redux'
import reducers  from 'state/reducers'
import thunk from 'redux-thunk'
import setAuthorization from 'utils/setAuthorization'
import {setUser} from 'state/actions/actionAuthentication'

const store = createStore(reducers, applyMiddleware(thunk))

const {username, token, avatar} = localStorage
if(username && avatar){
    store.dispatch(setUser({username, avatar}))
}
setAuthorization(token)

export default store