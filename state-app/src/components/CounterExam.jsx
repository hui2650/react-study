import React, { useState } from 'react'

const CounterExam = () => {

    const [count, setCount] = useState(0);

  return (
    <div>
        <hr />
      <p>{count}</p>
      <button onClick={()=> setCount((prev)=> prev +1)}>+1</button>
      <button onClick={()=> setCount((prev)=> prev -1)}>-1</button>
      <button onClick={()=> setCount(0)}>Reset</button>
    </div>
  )
}

export default CounterExam
