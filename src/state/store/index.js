import {createStore} from 'redux'
import reducers  from 'state/reducers'

const store = createStore(reducers)

export default store