import { useEffect } from "react"

function FetchApi() {

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/todos")
        .then(responese=>responese.json())
        .then(json=>console.log(json))
    },[])
  return (
    <div>
      FETCH API USING FETCH
    </div>
  )
}

export default FetchApi
