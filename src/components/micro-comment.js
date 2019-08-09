import React from "react"

export const MicroComments = props => {
    const comments = props.comments.map((comment,index)=>{
        return (
            <div className="bubble-wrap" key={index}>
                <h5>Username <small>Dec 12, 2019</small></h5>
                <p>User Message</p>
                <a href="#">Like</a>
            </div>
        )
    })
    return (<div className="comments-wrap">{comments}</div>)
}