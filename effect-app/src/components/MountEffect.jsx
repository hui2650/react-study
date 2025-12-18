import { useEffect } from "react"

export default function MountEffect() {

    // 비어있는 의존성 배열
    // 컴포넌트가 화면에 최초로 렌더링 될때(mount) useEffect의 콜백함수가 1회 실행이 된다
    // 언제 사용? -> 초기 설정을 할때, API 초기 호출 할때
    useEffect(()=>{
        console.log("컴포넌트 최초 실행")
    }, [])

    return(
        <>
            <h3>Mount Effect 컴포넌트</h3>
        </>
    )
}