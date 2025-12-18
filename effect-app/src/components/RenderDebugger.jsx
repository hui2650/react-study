import React, { useEffect, useState } from 'react'

const RenderDebugger = () => {
    const [count, setCount] = useState(0);

    useEffect(()=>{
        console.log(`렌더링 발생: ${{count, at: new Date().toLocaleDateString()}}`)
    }, [count])

  return (
    <div>
      <p>{count}</p>
      <button onClick={()=> setCount((p)=> p+1)}>+1</button>
    </div>
  )
}

export default RenderDebugger
