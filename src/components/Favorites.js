import React, { useState, useEffect } from 'react'
import MediaCard from "./MediaCard";
const axios = require('axios')
export default function Home() {
const [pics, setPics] = useState([])
const deletePic = async (id) => {
    alert("picture deleted from favorites")
    const response = await axios.delete(`http://localhost:4200/image/${id}`)
    setPics(response.data)
}
const getDescription = async (id) => {
    const response = await axios.get(`http://localhost:4200/images/${id}`)
    alert(response.data.description)
    return (
    <div>
         <MediaCard picInfo={response.data}/>
    </div>
    )
}
 useEffect(() => {
  (async () => {
      const response = await axios.get('http://localhost:4200/images')
      setPics(response.data);
  })()
}, []) 
return (
    <div>
      {pics.map(p => <MediaCard key={p.id} deletePic={deletePic} getDescription={getDescription} pics={p} />)}
    </div>
  )
}
