import { useEffect, useState } from "react"

const GithubUserCard = () => {

    const [input, setInput] = useState("")
    const [username, setUsername] = useState(null)
    const [user, setUser] = useState(null)
    const [status, setStatus] = useState("idle")

    useEffect(()=>{
        
        let ignore = false;

        async function getGitHub(){
            
            if(!username)
                return;

            setStatus("loading")

            try{   
                const res = await fetch(`https://api.github.com/users/${username}`)
                const data = await res.json();
                if(!ignore){
                    setUser(data);
                    setStatus("success")
                    console.log(data)
                }

            }catch(error){
                setStatus("error")
            }
        }
        getGitHub();
        return(()=>{
            ignore = true;
        })

    }, [username])

  return (
    <div>
      <input type="text" value={input} onChange={(e)=> setInput(e.target.value)} />
      <button onClick={()=> setUsername(input)}>프로필 불러오기</button>
      
        <div >
            <p >status: {status}</p>
            <p>username: {username}</p>
            {user && (
                <div>
                <p >이름: {user.name}</p>
                <p>팔로워수: {user.followers}</p>
                <img style={{borderRadius: '50%' }} src={user.avatar_url} alt="" />
                </div>
            )}
        </div>
    </div>
  )
}

export default GithubUserCard
