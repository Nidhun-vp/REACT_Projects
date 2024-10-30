import React from 'react'
import './Header.css'
import { Link } from "react-router-dom"
export default function Header()
{

  return (
    <header>
       
       <Link to="/">Home</Link> {/*  //default page */}
       <Link to="/about">About</Link>
    </header>
  )
}
