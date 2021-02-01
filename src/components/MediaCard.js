import React from 'react'
import { Link } from 'react-router-dom'
const axios = require('axios')

export default function MediaCard(props) {
     const savePic = async () => {
        alert("picture saved to favorites")
        return await axios.post('/4500/image', props.picInfo)
    }
    const getDescription = async () => {
        props.getDescription(props.pic._id)
    }

        const deletePic = async () => {
             props.deletePic(props.pic._id)
     }

    return (
        <div id="picture">
                {window.location.pathname === "/home"
                ? (<div>
                    <h2 className="picTitle">{props.picInfo.title}</h2>
                    <img className="picOfDay" src={props.picInfo.url} id="pic"></img>
                    <p className="picDescription">{props.picInfo.explanation}</p>
                </div>)
                : window.location.pathname === "/search"
                ? (<div>
                    <h2 className="picTitle">{props.picInfo.title}</h2>
                    <img className="picOfDay" src={props.picInfo.url} id="pic"></img>
                    <i className="fas fa-thumbs-up fa-2x"  id="likeButton" onClick={savePic}></i>
                    </div>)
                : window.location.pathname === "/favorites"
                ? (<div><h2 className="picTitle">{props.pic.title}</h2>
                     <img className="picOfDay" src={props.pic.url} onClick={getDescription} id="pic"></img>
                    <i className="fas fa-thumbs-down fa-2x"  id="unLikeButton" onClick={deletePic}></i>
                    </div>)
                :(<div>
                    <h2 className="picTitle">{props.pic.title}</h2>
                    <img className="picOfDay" src={props.pic.url} id="pic"></img>
                    <p className="picDescription">{props.pic.description}</p>
                </div>)
            }
        </div>
    )
}

