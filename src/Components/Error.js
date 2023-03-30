import React from 'react'
import {Link} from "react-router-dom";
function Error() {
  return (
    <>
    <div>404 Error</div>
  
    <Link to="/"><button >redirect to Register form</button></Link><br/>
    </>
  )
}

export default Error