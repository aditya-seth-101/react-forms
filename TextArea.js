import React from 'react'

const TextArea = () => {
   const makeDisable =(e)=>{
        if(e.target.value.length>=20){
            let btn = document.getElementById("txtBx")
            btn.setAttribute("disabled","")
        }
   }
  return (
    <div>
      
        <textarea name="" id='txtBx' onChange={makeDisable} cols="30" rows="10"> Enter less than 20 characters : </textarea>
       
    </div>
  )
}

export default TextArea