import React, { useState } from 'react'
import MediaCard from "./MediaCard";
const axios = require('axios')

export default function Home() {
    const [input, setInput] = useState("")
    const [picsInfo, setPicsInfo] = useState([])
    const handleInput = (e) => setInput(e.target.value)
    const handleSearch = async () => {
        const response = await axios.get(`https://images-api.nasa.gov/search?q=${input}`)
        let data = response.data.collection.items.map(m => {
            return {
              title: m.data[0].title,
              url: m.links[0].href,
              description: m.data[0].description 
            }
        }).slice(0, 20)
        setPicsInfo(data)
    }
    return (
        <div id="picOfDayInfo">
            <input value={input} onChange={handleInput} id="searchInput"></input>
            <button onClick={handleSearch} id="searchButton">Search</button><br></br>
            {picsInfo.map(p =><MediaCard  key={p.id}  picInfo={p} />)}
        </div>
    )
}