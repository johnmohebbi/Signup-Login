import React, { useState ,useEffect} from 'react';
import { validate } from './validate';
const Signup = () => {
    const [data,setData] = useState({
        username:"",
        email:"",
        password:"",
        confirmpassword:"",
        isAccepted:false,
    })
    const [errors,setErrors] = useState({})

    const changeHandler = (event) => {
        if (event.target.name === 'isAccepted') {
            setData({...data,[event.target.name]:event.target.checked})
        }else{

            setData({...data,[event.target.name]:event.target.value})
        }
        
    }
    useEffect(()=>{
        setErrors(validate(data,'signup'));
    },[data])
    useEffect(()=>{
        console.log(errors);
    },[errors])
    return (
        <div>
            <form>
                <div>
                    <label>username</label>
                    <input type="text" name="username" value={data.username}  onChange={changeHandler}/>
                </div>
                <div>
                    <label>email</label>
                    <input type="email" name="email" value={data.email}  onChange={changeHandler}/>
                </div>
                <div>
                    <label>password</label>
                    <input type="password" name="password" value={data.password}  onChange={changeHandler}/>
                </div>
                <div>
                    <label>confirmpassword</label>
                    <input type="password" name="confirmpassword" value={data.confirmpassword}  onChange={changeHandler}/>
                </div>
                <div>
                    <label>your accept our rules</label>
                    <input type="checkbox" name="isAccepted"  value={data.isAccepted} onChange={changeHandler}/>
                </div>
                <div>
                    <a href="/#">login</a>
                    <button type="submit">signUp</button>
                </div>
            </form>
        </div>
    );
};

export default Signup;