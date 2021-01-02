import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Switch, useLocation } from "react-router-dom";
const axios = require('axios')
export default function MediaCard(props) {
     const savePic = async () => {
        alert("picture saved to favorites")
        return await axios.post("http://localhost:4200/image", props.picInfo)
    }
    const deletePic = async () => {
             props.deletePic(props.pics._id)
             console.log(props.pics._id)
             console.log(props)
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
                    <img className="picOfDay" src={props.pics.url} id="pic"></img>
                    <i className="fas fa-thumbs-down fa-2x"  id="unLikeButton" onClick={deletePic}></i>
                    </div>)
                : <div>Favorites/Id</div>
            }
        </div>
    )
}

