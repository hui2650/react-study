
const Exam = () => {

    const name = "함태희";
    const age = 20;
    const sub = ['HTML', 'CSS', 'JS', 'React']
    const isDarkMode = true;
    const user = [
      {id:1, name:'kim'},
      {id:2, name:'lee'}
    ]

  return (
    <div>
        <h1>안녕하세요, {name}님</h1>
        {age >= 20 ? <h2>성인입니다</h2> : <h2>미성년자입니다.</h2>}
        <ul>
          {sub.map((item, index)=>
            <li key={index}>{item}</li>
          )}
        </ul>

        <div style={{background: isDarkMode ? 'black' : 'white', color: isDarkMode ? 'white' : 'black' } }>다크모드</div>
        {user.map((item)=>
          <li key={item.id}>id:{item.id}, name: {item.name}</li>
        )}


    </div>
  )
}

export default Exam
