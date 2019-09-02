import React from "react"
import styled from 'styled-components'

const HideSpinner = styled.div`
    display: none;
`
const SpinnerWrap = styled.div`
    max-width: 300px;
    margin:0 auto;
    text-align: center;
    img{
        width: 100%;
    }
`

export const Spinner = props => {   
    if(props.visible){
        return (
            <SpinnerWrap>
                <img src="https://loading.io/spinners/disqus/lg.discuss-messesage-preloader.gif" alt="Spinner" />
            </SpinnerWrap>
        )
    }
    return (
        <HideSpinner>
            <img src="https://loading.io/spinners/disqus/lg.discuss-messesage-preloader.gif" alt="Spinner" />
        </HideSpinner>
    )
}

export const Comment = props => { 
    return (
        <div className="bubble-wrap">
            <ul>
                <li><img src={props.user.avatar} alt={props.user.displayname}/></li>
                <li><h4>{props.user.displayname} <small>{props.ts}</small></h4></li>
            </ul>
            <div className="comment">
                <p>{props.body}</p>
            </div>
        </div>
    )
}

export const Comments = props => {
    const comments = props.comments.map((comment,index)=>{
        return ( <Comment {...comment} key={index} />)
    })
    return (<div className="comments-pad">{comments}</div>)
}