import React, { useState } from 'react'

const DarkModeToggle = () => {

    const [isDark, setIsDark] = useState(true)

  return (
    <div style={{background: isDark? '#000' : '#fff'}}>
      <p style={{color: isDark? '#fff' : '#000'}}>{isDark? "다크모드입니다" : "라이트모드입니다" }</p>
      <button onClick={()=> setIsDark(!isDark)}>{isDark? "라이트로" : "다크로" }</button>
    </div>
  )
}

export default DarkModeToggle
