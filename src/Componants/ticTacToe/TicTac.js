import React,{useState} from 'react'
import './TicTac.css'

function TicTac() {

  const [state,setState] = useState(Array(9).fill(null));
  const [player,setPlayer] = useState("X");

  const handleOnClick = function(index) {
    const arr = Array.from(state);
    if(arr[index] === null) {
      arr[index] = player === "X" ? "X" : "O";
      setPlayer(() => player === "X" ? "O" : "X");
      setState(arr);
      if(arr[0] === arr[3] && arr[3] === arr[6] && arr[0]!= null) alert('Player' + player + "won");
      else if(arr[1] === arr[4] && arr[4] === arr[7] && arr[1]!= null) alert('Player  ' + player + " won");
      else if(arr[2] === arr[5] && arr[5] === arr[8] && arr[2]!= null) alert('Player  ' + player + " won");
      else if(arr[0] === arr[1] && arr[1] === arr[2] && arr[0]!= null) alert('Player  ' + player + " won");
      else if(arr[3] === arr[4] && arr[4] === arr[5] && arr[3]!= null) alert('Player  ' + player + " won");
      else if(arr[6] === arr[7] && arr[7] === arr[8] && arr[6]!= null) alert('Player  ' + player + " won");
      else if(arr[0] === arr[4] && arr[4] === arr[8] && arr[0]!= null) alert('Player  ' + player + " won");
      else if(arr[2] === arr[4] && arr[4] === arr[6] && arr[2]!= null) alert('Player  ' + player + " won");
    }
    console.log("hello",arr);
  }

  return (
    <div>

    <div className='block'>
        <div className='box' onClick={()=>handleOnClick(0)}>{state[0]}</div>
        <div className='box' onClick={()=>handleOnClick(1)}>{state[1]}</div>
        <div className='box' onClick={()=>handleOnClick(2)}>{state[2]}</div>   
    </div>

    <div className='block'>
        <div className='box' onClick={()=>handleOnClick(3)}>{state[3]}</div>
        <div className='box' onClick={()=>handleOnClick(4)}>{state[4]}</div>
        <div className='box' onClick={()=>handleOnClick(5)}>{state[5]}</div>   
    </div>

    <div className='block'>
        <div className='box' onClick={()=>handleOnClick(6)}>{state[6]}</div>
        <div className='box' onClick={()=>handleOnClick(7)}>{state[7]}</div>
        <div className='box' onClick={()=>handleOnClick(8)}>{state[8]}</div>   
    </div>

    </div>

  )
}

export default TicTac


