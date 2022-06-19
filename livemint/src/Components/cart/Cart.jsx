import React from 'react'
import axios from 'axios'
import { useState } from 'react'
const Cart = () => {
    const [data,setData]=useState([])
    const getData=()=>{
axios.get("https://newsapi.org/v2/top-headlines?country=in&apiKey=5bc1ee537d4148149edcb3c4ba139125&q=india")
.then((res)=>{
    setData(res.data.articles)
})
    }
  return (
  <>
  <button onClick={getData}>click me</button>

  <div className='container'> 
  <div className='row'>
   {
         data.map((value)=>{
                return(
                    <div className="col-3"> 
                    <div class="card" style={{width: "18rem"}}>
                  <img src={value.urlToImage} class="card-img-top" alt="..."/>
                  <div className="card-body">
                    <h5 className="card-title">{value.title}</h5>
                    <p className="card-text">{value.description}</p>
                    <a href="#" className="btn btn-primary">Main News</a>
                  </div>
                </div>
                    </div>
                )
            })
}    
    </div>
    </div>
   
  </>
  )
}

export default Cart