const initialState = {
    selection: '',
    popOverVisible: false,
    loadingThread: false,
    thread: {}
}

export default (state = initialState, action) => {
    switch(action.type){
        case 'TEXT_SELECTED':     
            return {
                ...state,
                popOverVisible: true,
                loadingThread: true,
                selection: action.payload
            }
            break
        case 'TEXT_UNSELECTED':      
            return {
                ...state,
                popOverVisible: false,
                loadingThread: false,
                selection: '',
                thread: {}
            }
            break
        case 'SELECTION_FETCHED':
            return {
                ...state,
                loadingThread: false,
                thread: action.payload,
            }
            break
    }
    return state 
}