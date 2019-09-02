const initState = {
    username: '',
    loginError: '',
    modalOpen: false
}

export default (state = initState, action) => {
    switch(action.type){
        case 'USER_LOGIN':
            return {
                ...state,
                username: action.payload.username,
                avatar: action.payload.avatar,
                loginError: ''
            }
            break
        case 'LOGIN_ERROR':
            return {
                ...state,
                loginError: action.payload
            }
            break
        case 'TOGGLE_MODAL':
            const open = state.modalOpen? false: true
            return {
                ...state,
                modalOpen: open
            }
            break
    }
    return state
}