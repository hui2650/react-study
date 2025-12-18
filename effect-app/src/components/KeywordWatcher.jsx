import React, { useEffect, useState } from 'react'

const KeywordWatcher = () => {

const [keyword, setKeyword] = useState("");

useEffect(()=>{
    console.log(`검색어 변경: ${keyword}`)
}, [keyword])

  return (
    <div>
      <h3>Keyword Watcher</h3>
      <input type="text" value={keyword} onChange={(e)=>setKeyword(e.target.value)} placeholder='검색어 입력' />
    </div>
  )
}

export default KeywordWatcher
