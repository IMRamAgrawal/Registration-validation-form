import React from 'react'
import {Link} from "react-router-dom";

function Detail() {
  return (
    <>
    <h2>You are login Successfully</h2>
    
    <Link to="/"><button style={{textAlign:"center"}}>Logout</button></Link>
    </>
  )
}

export default Detail