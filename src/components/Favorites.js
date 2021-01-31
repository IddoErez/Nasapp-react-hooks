import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import MediaCard from "./MediaCard";
import axios from 'axios'

export default function Favorites(props) {
  const [pics, setPics] = useState([])
 
  const deletePic = async (id) => {
    alert("picture deleted from favorites")
    const response = await axios.delete(`/image/${id}`)
    setPics(response.data)
  }

   const getDescription = async (id) => {
    const response = await axios.get(`/images/${id}`)
    let picture = {}
    picture.description = response.data.description
    picture.title = response.data.title
    picture.url = response.data.url
    alert(picture.description)
  }

  useEffect(() => {
    (async () => {
      const response = await axios.get('/images')
      setPics(response.data);
    })()
  }, [])

  return (
    <div>
      <div> {pics.map(p => <MediaCard key={p._id} deletePic={deletePic} getDescription={getDescription} pic={p} />)} </div>
    </div>

  )
}
