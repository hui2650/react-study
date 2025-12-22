import { useState } from "react";

const HandlerCounter = () => {

    const [count, setCount] = useState(0);

    const handlePlus = () => {
        setCount((prev => prev + 1))
    };

    const handleMinus = () => {
        setCount((prev) => {
            if(prev - 1 < 0) return 0;
            return prev - 1 ;
        })

    };

    const styles = {
    card : { padding: 16, border: '1px solid #ddd', borderRadius: 12, maxWidth: 520 },
    h3: {marginTop: 0},
    btn : {marginRight: 8, padding: "10px 20px", border: "1px solid #bbb", borderRadius: 10}
}

  return (
    <div style={styles.card}>
        <h3 style={styles.h3}>핸들러 방식의 카운터</h3>
        <p>count: {count}</p>

        <button style={styles.btn} onClick={handlePlus}>
            +1
        </button>

        <button style={styles.btn} onClick={handleMinus}>
            -1 (0 미만 방지)
        </button>
    </div>
  )



}

export default HandlerCounter