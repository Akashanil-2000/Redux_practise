import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '../redux/counter/counterAction'

const Counter = () => {
    const count=useSelector((state)=> state.count)
    const dispatch=useDispatch()
  return (
    <div>
        Count : {count}
        <button onClick={()=>dispatch(increment())}>Increment</button>
        <button onClick={()=>dispatch(decrement())}>Decrement</button>
    </div>
  )
}

export default Counter