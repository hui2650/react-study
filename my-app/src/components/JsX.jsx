import React from 'react'

const JsX = () => {
    const element = <h1>Hello,  world! 변수에 담긴 태그</h1>

    const name = 'Tae hui';
    const age = 20;
    const boxStyle = {
      color: 'yellow',
      fontSize: '28px',
      border: '2px solid green'

    }

    const isLogin = true;
    const hasMessage = true;
    const fruits = ["사과", "오렌지", "바나나", "수박", "포도"];

  return (
    <div>
        {element}
        <h2>이름 : {name}</h2>
        <h2>나이 : {age}</h2>
        <h2>내년나이 : {age + 1}</h2> 
        <div className='container'>박스</div>
        <div className='container' style={{'color':'red', fontSize:'20px'} } >스타일박스</div>
        <div style={boxStyle}>스타일박스2</div>
        {isLogin ? <h1>환영합니다</h1> : <h1>로그인 해주세요</h1>}
        {/* 조건이 true일때만 렌더링하기 */}
        <div>{hasMessage && <p>새 메세지가 있습니다</p>}</div>
        <ul>
          {fruits.map((item, index)=> 
          // react가 각 li를 구분할때 key의 속성을 용도로 쓰기 때문에 key값을 넣어줘야함
            <li key={index}>{item}</li>
          )}
        </ul>
    </div> 
  )
  
}

export default JsX
