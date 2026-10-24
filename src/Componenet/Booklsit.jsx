import React from 'react'
import { Link } from 'react-router-dom'
import { useState,useEffect } from 'react'

function Booklsit() {
    const [book,setBook]=useState([])
    const [loading,setLoading]=useState(true)
    const [error,setError]=useState("")
    const [search,setSearch]=useState("")
    useEffect(()=>{
        fetch(" https://dummyjson.com/users?limit=30")
        .then((Response)=>{
            if(!Response.ok){
                throw new Error("data not render")
            }
            return Response.json();
            
        })
        .then((data)=>{
            setBook(data)
            setLoading(false)
                
        })
        .catch((error)=>{
            setError("failed to load");
            setLoading(false);
        })


    },[])
    if (loading){
        return <h2>loading show....</h2>;
    }
    if(error){
        return <h2>{error}</h2>
    }
    const filteredBook=Book.filter((item)=>
        item.name.toLowerCase().includes(search.toLowerCase())
    )
  return (
    <div>Booklsit</div>
  )
}

export default Booklsit