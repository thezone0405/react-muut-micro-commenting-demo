import "@babel/polyfill"
import axios from 'axios'
import {getCurrentDatetime} from 'utils/time'

export const threadReply = (thread) => {
    return async (dispatch, getState) => {
        const key = thread.thread.replace(/[^a-zA-Z0-9\s\-]/g,'').replace(/\s+/g, '-').toLowerCase().trim()
        const path = new Buffer(`/muutesting/general:${key}`).toString('base64')
        const response = await axios.post(`https://api.muut.io/v1/muutest/projects/muutesting/threads/${path}/replies`,{
            post: {
                body: thread.comment
            }
        })

        const payload = {
            path: response.data.path,
            username: thread.username,
            avatar: thread.avatar,
            datetime: getCurrentDatetime(),
            body: thread.comment
        }
        dispatch({type: 'THREAD_REPLY', payload})
    }
}

export const threadCreate = (thread) => {
    return async (dispatch, getState) => {
        try{
            const key = thread.thread.replace(/[^a-zA-Z0-9\s\-]/g,'').replace(/\s+/g, '-').toLowerCase().trim()
            const path = '/muutesting/general'
            const response = await axios.post('https://api.muut.io/v1/muutest/projects/muutesting/threads', {
                path,
                post: {
                    key,
                    title: thread.thread,
                    body: thread.comment
                }
            })
            
            const payload = {
                path: response.data.path,
                username: thread.username,
                avatar: thread.avatar,
                datetime: getCurrentDatetime(),
                body: thread.comment
            }
            dispatch({type: 'THREAD_CREATE', payload})
        }catch(e){
            return {
                type: 'ERROR_CREATING_THREAD',
                payload: e
            }
        }
    }
}

export const threadSelect = (text) => {
    return async (dispatch, getState) =>{
        try{
            const key = text.replace(/\s+/g, '-').toLowerCase().trim()
            const path = `/muutesting/general:${key}`
            const response = await axios.post('https://api.muut.io/v1/muutest/projects/muutesting/content', { path })
            dispatch({type:'SELECTION_FETCHED', payload: response.data})
        }catch(e){
            return {
                type: 'ERROR_FETCHING',
                payload: e
            }
        }
    } 
}

export const textSelect = (text) => {
    return (dispatch, getState) =>{        
        if(text.trim()){
            dispatch({type: "TEXT_SELECTED", payload: text})
            dispatch(threadSelect(text))
        }        
    }
}