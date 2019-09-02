const initialState = {
    selection: '',
    popOverVisible: false,
    loadingThread: false,
    thread: {
        threads: []
    }
}

export default (state = initialState, action) => {
    let {threads} = state.thread
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
        case 'THREAD_CREATE':
            threads.push({
                post:{
                    body: action.payload.body,
                    ts: action.payload.datetime,
                    user:{
                        avatar: action.payload.avatar,
                        displayname: action.payload.username
                    }
                },
                replies:[]
            })
            return {
                ...state,
                thread:{
                    size: 1,
                    threads
                }
            }
            break
        case 'THREAD_REPLY':
            threads[0].replies.push({
                body: action.payload.body,
                ts: action.payload.datetime,
                user:{
                    avatar: action.payload.avatar,
                    displayname: action.payload.username
                }
            })
            return {
                ...state,
                thread:{
                    threads
                }
            }
            break
    }
    return state 
}