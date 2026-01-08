import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Loginform=()=>{
    const [email, setEmail] =useState('')
    const navigate=useNavigate()
    const handlesubmit= (e)=>{
        e.preventdefault()


        console.log(e)
        // console.log(e.target.elements.email.value)
        
    } 
    const handleEmailChange =(e)=>{

        setEmail(e.target.value)

    }
    return(
        <div className="loginform">
        <form  onSubmit={handlesubmit}>
            <input type="email" onChange={handleEmailChange} placeholder="email" name="email"/>
            <button type="submit">Login Button</button>
        </form>
        <div className="enteredvalue">
            <h1>email:{email}</h1>
        </div>
        </div>
    )
}

export default Loginform;