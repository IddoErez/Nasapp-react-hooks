import React, { useState, useEffect } from 'react'
import MediaCard from "./MediaCard";
const axios = require('axios')
export default function Home() {
  const [pics, setPics] = useState([])

  const deletePic = async (id) => {
    alert("picture deleted from favorites")
    console.log(id)
    const response =  await axios.delete(`http://localhost:4200/image/${id}`)
    setPics(response.data)
    }
 useEffect(() => {
  (async () => {
      const response = await axios.get('http://localhost:4200/images')
      console.log(response.data)
      setPics(response.data);
  })()
}, [])
  return(
    <div>
      {pics.map(p =><MediaCard deletePic={deletePic} pics={p}/>)}
    </div>
    )
  }
