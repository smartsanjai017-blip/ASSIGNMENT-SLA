import { useState } from "react"

const Rang = ()=>{
    const [email, setEmail] =useState('')
const handleSubmit =(e)=>{
    console.log(e)
}
const handleEmailChange = (e)=>{
    setEmail(e.target.value)
}
    return(
        <div className="LoginForm">
<form action=" " onSubmit={handleSubmit} >
    <input type="email" placeholder="enter email" onChange={handleEmailChange} />
<input type="password" placeholder="password" />
<button type="sumbit"> Login Button</button>
</form>
<div className="enteredvalue">
    <h1> email: {email}</h1>
</div>
        </div>
    )
}

export default Rang;
