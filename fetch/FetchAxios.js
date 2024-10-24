import React from 'react'
import axios from "axios"
import { useEffect } from "react"

function FetchAxios() {
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/todos")
        .then((responese)=>console.log(responese.data))
    },[])
  return (
    <div>
      DIFFERENT WAY TO FETCH API USING FETCH axios
    </div>
  );
}

export default FetchAxios
