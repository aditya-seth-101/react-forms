import React from 'react'
import { useState } from 'react'
const CheckBox = () => {
    const [courses,setCourses] = useState("Please select courses")
    const [fees,setFees] = useState(0)
    let temp ="Courses selected : "
    let temp2 =0
   const handelChange = (e)=>{
        temp += e.target.name + ", "
        temp2 += parseInt(e.target.value )
   }

   const checkFees = (e)=>{
    setCourses(temp)
    setFees(temp2)
    e.preventDefault()
   }
  return (
    <>
        <form action="none" onSubmit={checkFees} >
            <label htmlFor="c"> C&emsp;
            <input type="checkbox" name="c" id="" value={1000} onChange={handelChange} />
            </label>&emsp;
            <label htmlFor="c++"> C++ &emsp;<input type="checkbox" value={2000} name="c++" id="" onChange={handelChange} /></label>&emsp;
            <label htmlFor="datatruture">Datastructure&emsp;
            <input type="checkbox" name="datastrcture" id="" value={3000} onChange={handelChange} />
            </label>&emsp;
            <input type="submit" placeholder="Submit" />
        </form>
        <div>{courses}</div>
        <div>Total Fees : {fees}</div>
    </>
  )
}

export default CheckBox