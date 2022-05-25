import React from 'react'
import { useState } from 'react';
const MarksheetLogic = () => {
    let [nme, setNme] = useState("")
    let [rollNo, setRollNo] = useState("")
    let [math, setMath] = useState("")
    let [che, setChe] = useState("")
    let [phy, setPhy] = useState("")
    let [eng, setEng] = useState("")
    let [hindi, setHindi] = useState("")


    let [dis, setDis] = useState("")
    const display = () => {
        setDis(<>
            <table>
                <thead>
                    <tr>
                        <th>
                            Name :&emsp;{nme}
                        </th>
                    </tr>
                    <tr>
                        <th>
                            Roll No :&emsp;{rollNo}
                        </th>
                    </tr>
                  </thead>
                <tbody>
                <tr>
                    <td>Maths</td>
                    <td>{math}</td>
                </tr>
                <tr>
                    <td>Physics</td>
                    <td>{phy}</td>
                </tr>
                <tr>
                    <td>Chemistry</td>
                    <td>{che}</td>
                </tr>
                <tr>
                    <td>English</td>
                    <td>{eng}</td>
                </tr>
                <tr>
                    <td>Hindi</td>
                    <td>{hindi}</td>
                </tr>
                <tr>
                    <th>Total :</th>
                    <th>{parseInt(math)+parseInt(che)+parseInt(phy)+ parseInt(eng)+ parseInt(hindi)}</th>
                </tr>
                </tbody>
            </table>
        </>)
    }

    const textSetter = (e) => {
        let gotId = e.target.id

        switch (gotId) {
            case "nme":
                setNme(e.target.value)
                console.log(nme)
                break;
            case "rollno":
                setRollNo(e.target.value)
                break;
            case "math":
                setMath(e.target.value)
                break;
            case "che":
                setChe(e.target.value)
                break;
            case "phy":
                setPhy(e.target.value)
                break;
            case "eng":
                setEng(e.target.value)
                break;
            case "hindi":
                setHindi(e.target.value)
                break;

            default:
                break;
        }

    }
    return (
        <div>
            <label htmlFor="Name" >Name :
                <input type="text" id='nme' onChange={textSetter} />
            </label> <br />
            <label htmlFor="rollNo">Roll No. :
                <input type="text" id='rollno' onChange={textSetter} />
            </label> <br />
            <label htmlFor="maths" >Maths :
                <input type="text" id='math' onChange={textSetter} />
            </label> <br />
            <label htmlFor="physics" >Physics :
                <input type="text" id='phy' onChange={textSetter} />
            </label> <br />
            <label htmlFor="chemistry" >Chemistry :
                <input type="text" id='che' onChange={textSetter} />
            </label> <br />
            <label htmlFor="english">English :
                <input type="text" id="eng" onChange={textSetter} />
            </label> <br />
            <label htmlFor="hindi">Hindi :
                <input type="text" id='hindi' onChange={textSetter} />
            </label> <br />
            <button onClick={display}>Show</button>
            <div>
                {dis}
            </div>
        </div>
    )
}

export default MarksheetLogic