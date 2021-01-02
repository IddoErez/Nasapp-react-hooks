import React from 'react'
export default function MediaCard(props) {
    return (
        <div id="picture">
        <h1 className="picTitle">{props.picInfo.title}</h1>
        <iframe className="vidOfDay" src={props.picInfo.url} width="420" height="345" id="vid"></iframe>
        <p className="picDescription">{props.picInfo.explanation}</p>
        </div>
    )
}