import React from 'react'
import axios from 'axios'

function App() {
  let handlePostData=async(e)=>{
    e.preventDefault()
    let form=new FormData(e.target)
    let values=Object.fromEntries(form)
    console.log(values);
    try {
      let data=await axios.post("http://localhost:3000/",values)
      if(data){
        alert("uploaded sucessfully")
      }
    } catch (error) {
      
    }
    
  }
  return <>
  <form onSubmit={handlePostData}>
    <label htmlFor="">Name</label>
    <input type="text" name="name" />
    <button type='submit'>submit</button>
  </form>
  </>
}

export default App