import React, {useState} from 'react'
import {Link} from "react-router-dom";
import {useNavigate} from "react-router-dom";

function Login() {
    const history = useNavigate();
    const [inputvalue, setInputvalue] = useState({
  
        email: "",
     
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
    //   console.log([...data, inputvalue])
    }
 const addData = (e) => {
const getuserArr = localStorage.getItem("user")
// const getuserArr = localStorage.getItem(`${Name}`)


// console.log(getuserArr)
        const {email,password} = inputvalue;
      
         if ( email === ""){
          alert("Please enter your email")
         }
         else if ( !email.includes("@")){
          alert("Please enter a valid email")
         }
   
         else if ( password === ""){
          alert("Please enter your Password")
         }
         else if (password.length < 5){
          alert("The length of password should be minimum 5 characters")
         }
         else{
     if(getuserArr && getuserArr.length){
        const userdata = JSON.parse(getuserArr);
        // console.log(userdata)
        const userlogin = userdata.filter((e)=>{
            return e.email === email && e.password === password
            
        })
    if(userlogin.length === 0){
        alert("invalid details")
     }else{
        history ("/detail")
        localStorage.setItem("user-login",JSON.stringify(userlogin))
     }
    }
    }
       
      }
      return (
        <>
        <div className='signup'>
      <h2 style={{textAlign:"center"}}>Sign In</h2>
    
      <input type="email" name="email" onChange={getdata} placeholder='Your Email'></input><br/>
  
      <input  type="Password" name="password" onChange={getdata} placeholder='Your Password'></input><br/>
      {/* <Link to="/detail"><button  onClick={addData}>Submit</button></Link><br/> */}
      <button  onClick={addData}>Submit</button><br/>
      
      <p style={{marginLeft:"20px"}}>Created an Account<span><Link to="/">SignUp</Link></span></p>
     </div>
     </>
      )
    }
    
 

export default Login
