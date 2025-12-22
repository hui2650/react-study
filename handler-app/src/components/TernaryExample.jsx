import { useState } from "react"

const TernaryExample = () => {

const [ isLogin, setIsLogin ] = useState(false);

const styles = {
    page: {fontFamily: "sans-serif", padding: 20},
    h2: {margin: '0 0 10px 0'},
    row: {display: 'flex', gap: 8, margin: "12px 0", flexWrap: 'wrap'},
    card: {padding: 16, border: '1px solid #ddd', borderRadius: 12, maxWidth: 520},
    btn: {padding: '10px 12px', border: '1px solid #bbb', borderRadius: 10}
}

function LogoutView(){
    return (
        <div>
            <p style={{marginTop: 0}}>현재 로그아웃 상태입니다.</p>
            <button style={styles.btn} onClick={()=> setIsLogin(!isLogin)}>로그인</button>
        </div>
    )
}

function LoginView(){
    return (
        <div>
            <p style={{marginTop: 0}}>현재 로그인 상태입니다.</p>
            <button style={styles.btn} onClick={()=> setIsLogin(!isLogin)}>로그아웃</button>
        </div>
    )
}




  return (
    <div style={styles.page}>
        <h2 style={styles.h2}>삼항 연산자 예제</h2>
        <div style={styles.card}>
            {isLogin ? (<LogoutView />) : (<LoginView />) }
        </div>
    </div>
  )
}

export default TernaryExample