import "@babel/polyfill"
import axios from 'axios'
import setAuthorization from 'utils/setAuthorization'

export const toggleModal = () => {
    return {
        type: 'TOGGLE_MODAL'
    }
}

export const setUser = (username) => {
    return {
        type: 'USER_LOGIN',
        payload: username
    }
}

export const logout = () => {
    return async (dispatch, getState) => {
        localStorage.removeItem('token')
        localStorage.removeItem('username')
        setAuthorization(false)
        dispatch(setUser(''))
    }
}
 
export const login = (creds) => {
    return async (dispatch, getState) => {
        try{
            const response = await axios.post('https://muut-server-demo.herokuapp.com/authenticate', creds, {
                headers: {
                    'Access-Control-Allow-Origin' : '*',
                    'Access-Control-Allow-Methods' : 'GET,PUT,POST,DELETE,PATCH,OPTIONS'
                }
            })
            localStorage.setItem('token', response.data.token)
            localStorage.setItem('username', creds.username)
            setAuthorization(response.data.token)
            dispatch(setUser(creds.username))
            dispatch(toggleModal())
        }catch(e){
            dispatch({type: 'LOGIN_ERROR', payload: "Incorrect username / password "})
        }
    }
}