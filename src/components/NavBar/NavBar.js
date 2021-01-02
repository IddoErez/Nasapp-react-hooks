import React, { Component, useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import {MenuItems} from "./MenuItems"
import "./NavBar.css"
export default function NavBar() {
return (
     <nav className="NavBarItems">
         <a  className="menu-icon" href="https://www.nasa.gov/">
         <img src="https://www.nasa.gov/sites/all/themes/custom/nasatwo/images/nasa-logo.svg"></img>
         </a>
         <ul className="nav-menu">
            {MenuItems.map((item, index) =>{
                return (
                <li  key={index}>
                <Link to={item.url} className={item.cName}>{item.title}</Link>
                </li>
                )
            })}
        </ul>
     </nav>
 )
}

