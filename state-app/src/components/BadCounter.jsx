import { useState } from "react";

export default function CounterBug(){
    
    const [count, setCount] = useState(0);

    return(
        <div>
            <h2>함수형 컴포넌트 카운터</h2>
            <p>현재 숫자: {count}</p>
            <button onClick={()=> {setCount((prev)=> prev +1)
            }}> +1 증가 </button>
        </div>
    )
}