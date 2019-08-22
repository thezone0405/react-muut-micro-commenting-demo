import React from "react"

export const ContentParagraphs = props => {
    const paragraphs = props.content.map((info,index)=>{
        return (
            <p key={index} onMouseUp={ () => props.action(window.getSelection().toString()) }>{info}</p>
        )
    })
    return (<div className="content-wrap">{paragraphs}</div>)
}