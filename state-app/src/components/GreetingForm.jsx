import React, { useState } from 'react'

const GreetingForm = () => {

    const [name, setName] = useState("") 
    const [age, setAge] = useState(0) 
    const [submitted, setSubmitted] = useState(false)

  return (
    <div>
      <h3>이름과 나이를 입력 후 버튼을 클릭하시오</h3>
      <input onChange={(e)=> setName(e.target.value)} type="text" placeholder='이름' />
      <input onChange={(e)=> setAge(e.target.value)} type="text" placeholder='나이'/>
      <button onClick={()=> setSubmitted(true)}>클릭!</button>
    {submitted && (<p>안녕하세요, {name}님. {age}살이시군요.</p>)}
    </div>
  )
}

export default GreetingForm
