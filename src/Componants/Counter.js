import {React,useState} from 'react'
import './Counter.css'

let counter = 0;

export default function Counter() {

    let [counter,setCounter] = useState(0) 

const handleChange1 =() => {
    setCounter(counter+2);
}

const handleChange2 =() => {
    if(counter != 0) setCounter(counter-2);

}


  return (
    <div>
        <h1>{counter}</h1>
        <button onClick={handleChange1} style={{ backgroundColor: "aqua" }}>+</button>    
        <button onClick={handleChange2} style={{ backgroundColor: "tomato" }}>-</button>    
    </div>
  )
}
