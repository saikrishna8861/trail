import React from 'react'
import {useState} from 'react'

function Precount() {
    const intial = 0;
    const [count,setCount]= useState(intial)
    const Increment5 = ()=>{
        for(let i=0;i<5;i++){
            setCount(count+5)
        }
    }
  return (
    <div>
        <center>
            <div>
                <input type="text" />
            </div>
            Count:{count}
            <button onClick={()=>setCount(intial)}>Rest</button>
            <button onClick={()=>setCount(count+1)}>Increment</button>
            <button onClick={()=>setCount(count-1)}>Decrement</button>
            <button onClick={Increment5}>inecrement5</button>
        </center>
    </div>
  )
}


export default Precount