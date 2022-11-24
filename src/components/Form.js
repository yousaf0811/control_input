import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
const Form = ()=>{
    const [name,setName] = useState();
    const [lname,setLname] = useState();
    const [age,setAge] = useState();
    const [num,setNum] = useState();
    const [mail,setMail] = useState();
    return(
        <div className="main_form" >
            <div className='left' >
                <h3>Enter Your Data</h3>
                <div>
                <label>Enter your First name:
                <input type="text" value={name} 
                onChange={(e)=>setName(e.target.value)} />
                </label>
                </div>
                <div>
                <label>Enter your last Name:
                <input type="text" value={lname} 
                onChange={(e)=>setLname(e.target.value)} />
                </label>
                </div>
                <div>
                <label>Enter your Age:
                <input type="number" value={age} 
                onChange={(e)=>setAge(e.target.value)} />
                </label>
                </div>
                <div>
                <label>Enter your Contact Number:
                <input type="number" value={num} 
                onChange={(e)=>setNum(e.target.value)} />
                </label>
                </div>
                <div>
                <label>Enter your Email:
                <input type="email" value={mail} 
                onChange={(e)=>setMail(e.target.value)} />
                </label>
                </div>
            </div>
            <div className='right' >
            <h3>Your Data</h3>
                <div>
                <p>{name}</p>
                </div>
                <div>
                <p>{lname}</p>
                </div>
                <div>
                <p>{age}</p>
                </div>
                <div>
                <p>{num}</p>
                </div>
                <div>
                <p>{mail}</p>
                </div>
            </div>
        </div>
    )

}
export default Form