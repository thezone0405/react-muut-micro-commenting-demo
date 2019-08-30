import "@babel/polyfill"
import axios from 'axios'

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