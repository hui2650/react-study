import React, { useState } from 'react'

export const ListLength = () => {

    const [items, setItems] = useState([]);
    const [text, setText] = usetState("");

    function List({items}){
        return(
            <div>
                <ul>
                    {items.map((it)=>{
                        <li key={it.id}>
                            {it.title}
                        </li>
                    })}
                </ul>
            </div>
        )
    }

  return (
    <div style={styles.page}>
        <h2 style={styles.h2}>배열 길이 기반 분기</h2>

        <div style={styles.row}>
            <input 
                style={styles.input}
                value={text}
                onChange={(e)=>setText(e.target.value)}
                placeholder='항목을 입력한다'/>
            <button style={styles.btn} onClick={()=>{} }>추가</button>
            <button style={styles.btn} onClick={()=>{} }>전체삭제</button>
        </div>

        {/* 배열의 길이가 0이면 결과없음 배열의 길이가 0이 아니면 배열을 List 컴포넌트의 props로 전달하여 렌더링 */}
        {items.length === 0 ? (
            <div style={styles.card}></div>
        ) : (
            <List items={items}/>
        )}

        
    </div>
  )

  
}
