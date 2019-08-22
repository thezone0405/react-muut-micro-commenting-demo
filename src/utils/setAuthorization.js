import axios from 'axios'

export default (token) => {
    if(token){
        axios.defaults.headers.common['x-muut-token'] = token
    }else{
        delete axios.defaults.headers.common['x-muut-token']
    }
}