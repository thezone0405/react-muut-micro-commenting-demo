import {combineReducers} from 'redux'
import authentication from 'state/reducers/auth'
import microComments from 'state/reducers/micro-comment'

const mainState = (state,action) => {
    return {
        ...state,
        message: "HEY WORKING",
        title: "Muut - Micro Commenting Demo",
        contents: [
            "The quick brown fox jumps over the lazy dog",
            "Peter Piper picked a peck of pickled peppers. A peck of pickled peppers Peter Piper picked. If Peter Piper picked a peck of pickled peppers, Where's the peck of pickled peppers Peter Piper picked",
            "test-thread",
            "How much wood would a woodchuck chuck if a woodchuck could chuck wood?"
        ]
    }
}

const reducers = combineReducers({
    init: mainState,
    auth: authentication,
    thread: microComments
})

export default reducers