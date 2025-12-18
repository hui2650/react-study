import { useState, useEffect } from 'react';

const Timer = () => {
    const [isShow, setIsShow] = useState(true)
    const [time, setTime] = useState(0);

  useEffect(()=>{

    const id = setInterval(()=>{
        setTime((prev)=> prev +1);
    }, 1000)

    return()=>{
        clearInterval(id)
    }

  }, [])

  return (
    <div>
        {isShow && <h2>{time}초</h2>}
        <button onClick={()=>{
            setIsShow(!isShow)
        }}>{isShow ? "타이머 숨기기" : "타이머보이기"}</button>
    </div>
  )
}

export default Timer
