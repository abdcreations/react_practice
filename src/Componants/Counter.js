import {React,useState} from 'react'
import './Counter.css'

let counter = 0;

export default function Counter() {

  return (
    <div>
        <h1>{counter}</h1>
    </div>
  )
}
