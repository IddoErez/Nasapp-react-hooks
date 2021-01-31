import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Home from './/Home'
import Search from './Search'
import Favorites from './Favorites'

export default function Container() {
return(
    <>
       <Route exact path="/home" render={()=><Home/>}/>
       <Route exact path="/search" render={()=><Search/>}/>
       <Route exact path="/favorites" render={()=><Favorites/>}/>  
       <Route exact path="/favorites/:id" render={({match})=><Favorites key={Math.random()} match={match}/>}/>  
    </>
    )
}