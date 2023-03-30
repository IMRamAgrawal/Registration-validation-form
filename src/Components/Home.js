import React, {useState} from 'react'
import {Link} from "react-router-dom";
import { useNavigate } from 'react-router-dom';

function Home () {
  const history = useNavigate();
  const [inputvalue, setInputvalue] = useState({
    Name : "",
    email: "",
    date: "",
    password:""
 });
const [data, setData] = useState([]);
const getdata =(e)=>{
  // const value = e.target.value;
  const {value, name} = e.target;
  // const name = e.target.value;
  setInputvalue(()=>{
    return{
      ...inputvalue,
      [name]: value
      
    }
  })
  console.log(inputvalue)
}

  const addData = (e) => {

    const {Name, email,date,password} = inputvalue;
    if ( Name ===""){
     alert("Please enter your name")
    }
     if ( email === ""){
      alert("Please enter your email")
     }
     else if ( !email.includes("@")){
      alert("Please enter a valid email")
     }
    else  if (date ===""){
      alert("Please enter your date")
     }
     else if ( password === ""){
      alert("Please enter your Password")
     }
     else if (password.length<5){
      alert("The length of password should be minimum 5 characters")
     }
     else{
     history("/login")
      localStorage.setItem("user",JSON.stringify([...data,inputvalue]))
      // localStorage.setItem(`${Name}`,JSON.stringify([...data,inputvalue]))
      
     }
   
  }
  return (
    <div className='signup'>
  <h2 style={{textAlign:"center"}}>Sign up</h2>
  <input type="text" name="Name" onChange={getdata} placeholder='Your Name'></input><br/>
  <input type="email" name="email" onChange={getdata} placeholder='Your Email'></input><br/>
  <input type="Date"  name="date" onChange={getdata}></input><br/>
  <input  type="Password" name="password" onChange={getdata} placeholder='Your Password'></input><br/>
  <button  onClick={addData}>Submit</button><br/>

  <p style={{marginLeft:"20px"}}>Already have an Account<span><Link to="/login">SignIn</Link></span></p>
 
 </div>
  )
}

export default Home
