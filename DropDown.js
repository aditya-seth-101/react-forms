import React from 'react'
import { useState } from 'react'
const DropDown = () => {

    let temp ="Courses selected : "

    const [job,setJob] = useState("Please select Job :")
    const [loc,setLoc] = useState("Please select Locations :")
    const handelChange = (e)=>{
        temp +=e.target.value 
    }
  
    
    const show = (e)=>{
        let selectedValues ="Location Selected :  "
        let temp3 = document.getElementById("loc")
        for (let i = 0; i < temp3.options.length; i++) {
            if(temp3.options[i].selected)
            selectedValues  += temp3.options[i].value + ", ";
            
        }
        setJob(temp)
        setLoc(selectedValues)
        e.preventDefault();
    }
        
  return (
    <>
        <form action="none" onSubmit={show}>
            <label htmlFor="options1">Job :
                <select name="job" id="" onChange={handelChange}>
                    <option value="Web Designer">Web Designer</option>
                    <option value="Developer">Developer</option>
                    <option value="Programmer">Programmer</option>
                </select>
            </label>
            <label htmlFor="options1">Location :
                <select name="location" id="loc"  multiple size={3}>
                    <option value="Bhopal">Bhopal</option>
                    <option value="Hoshangabad">Hoshangabad</option>
                    <option value="Indore">Indore</option>
                </select>
            </label>
            <input type="submit" />
        </form>
        <div>{job}</div>
        <div>{loc}</div>
    </>
  )
}

export default DropDown