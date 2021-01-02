import React, { useState, useEffect } from 'react'
import MediaCard from "./MediaCard";
import Media from "./Media";
const axios = require('axios')

export default function Home() {
    const [picInfo, setPicInfo] = useState([])
    useEffect(() => {
        (async () => {
            const response = await axios.get('https://api.nasa.gov/planetary/apod?api_key=031jYzeQwvqiiiLtc9vjxTwKDRTLIIOWZccC6qFO')
            setPicInfo(response.data);
        })()
    }, [])
    return (
        <div id="picOfDayInfo">
            {picInfo.media_type === "image"
            ? <MediaCard key={picInfo.id} picInfo={picInfo} />
            : <Media  key={picInfo.id}  picInfo={picInfo} />}
        </div>
    )
}
