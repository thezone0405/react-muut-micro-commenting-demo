import React from "react"

export const ContentParagraphs = props => {
    const paragraphs = props.content.map((info,index)=>{
        return (
            <p key={index}>{info}</p>
        )
    })
    return (<div class="content-wrap">{paragraphs}</div>)
}