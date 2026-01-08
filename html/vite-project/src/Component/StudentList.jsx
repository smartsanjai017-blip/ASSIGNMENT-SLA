import { useState } from "react";
function StudentList(){
    const [count,setCount]=useState(0)
    
    return(
        <div>

<button  onClick={()=>setCount(count+1)}>inc</button>

<br/>
<button onClick={()=>setCount(count-1)} >dec</button>
<br/>
{count}

        </div>
    )
}
export default StudentList;
