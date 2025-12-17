import React, { useState } from 'react'

const TwoInputs = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

  return (
    <div>
      <h3>이메일과 비밀번호를 입력해주세요.</h3>
      <input value={email} onChange={(e)=> setEmail(e.target.value)} type="text" placeholder='email'/>
      <input value={password} onChange={(e)=> setPassword(e.target.value)} type="password"  placeholder='password'/>
      <p>email: {email}</p>
      <p>password: {password}</p>
    </div>
  )
}

export default TwoInputs
