import React, { useState, useRef } from 'react'
import FormpracDisplay from './FormpracDisplay'
const Formprac1 = () => {
    const [enblCheck, setEnabled] = useState(true)
    // const swtch = useRef(null)
    const [rollNo,setRollno] = useState(0);
    const [fees,setFees] = useState(0);
    const [nme,setNme] = useState("");
    const [branch,setBranch] = useState("");
    const [dis,setDis] = useState(null);
   

    const handelSwitch = (e) => {
        setEnabled(!e.target.checked)
    }
    const handelNum = (e) => {
        let reg = /^[0-9]+$/
        setRollno(e.target.value)
        if (!reg.test(e.target.value)) {
            //swtch.checked = false // Not working !!!
            setEnabled(true)
        }
    }
    const handelNum2 = (e) => {
        let reg = /^[0-9]+$/
        setFees(e.target.value)
        if (!reg.test(e.target.value)) {
            //swtch.checked = false // Not working !!!
            setEnabled(true)
        }
    }
    const handelStr = (e) => {
        setNme(e.target.value)
        let reg = /^[a-zA-Z ]+$/
        if (!reg.test((e.target.value))) {
            //swtch.checked = false // Not working !!!
            setEnabled(true)
        }
    }
    const handelSelect = (e) => {
        setBranch(e.target.value)
    }
    const display = (e) => {
 setDis(<FormpracDisplay nme ={nme} fees={fees} branch = {branch} rollno={rollNo}/>)
        e.preventDefault();
    }

    

    return (
        <div>
            <form action="">
                <div className="form-check form-switch">
                    <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onChange={handelSwitch} />
                    <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Default switch checkbox input</label>
                </div>
                <label htmlFor="rollno">Roll No : &emsp;
                    <input disabled={enblCheck} type="text" onChange={handelNum} />
                </label> <br />
                <label htmlFor="name">Name :&emsp;
                    <input disabled={enblCheck} type="text" onChange={handelStr} />
                </label> <br />
                <label htmlFor="branch">Branch :&emsp;
                    <select disabled={enblCheck} name="" id="" onChange={handelSelect}>
                        <option value="">Select</option>
                        <option value="ME">ME</option>
                        <option value="CSE">CSE</option>
                        <option value="IT">IT</option>
                    </select>
                </label> <br />
                <label htmlFor="fees">Fees :&emsp;
                    <input disabled={enblCheck} type="text" onChange={handelNum2} />
                </label> <br />
                <button disabled={enblCheck}  onClick={display}>Submit </button>
                
            </form>
            <br />
            {dis}

        </div>
    )
}

export default Formprac1