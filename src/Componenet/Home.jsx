import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'



function Home() {
  return (
    <div>
        <h1>book</h1>
        <Link to="/booklist">
           <button>Open All Books</button>
        </Link>


    </div>
  )
}

export default Home