import React from 'react'
const axios = require('axios')
export default function MediaCard(props) {
     const savePic = async () => {
        alert("picture saved to favorites")
        return await axios.post("http://localhost:4200/image", props.picInfo)
    }
    const getDescription = async () => {
        props.getDescription(props.pics._id)
    }
    const deletePic = async () => {
             props.deletePic(props.pics._id)
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
                ? (<div><h2 className="picTitle">{props.pics.title}</h2>
                    <img className="picOfDay" src={props.pics.url} onClick={getDescription} id="pic"></img>
                    <i className="fas fa-thumbs-down fa-2x"  id="unLikeButton" onClick={deletePic}></i>
                    </div>)
                :(<div>
                    <h2 className="picTitle">{props.picInfo.title}</h2>
                    <img className="picOfDay" src={props.picInfo.url} id="pic"></img>
                    <p className="picDescription">{props.picInfo.description}</p>
                </div>)
            }
        </div>
    )
}

