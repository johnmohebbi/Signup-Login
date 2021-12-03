import React, { useState ,useEffect} from 'react';
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { validate } from './validate';
import { notify } from './notify';
const Signup = () => {
    const [data,setData] = useState({
        username:"",
        email:"",
        password:"",
        confirmpassword:"",
        isAccepted:false,
    })
    const [errors,setErrors] = useState({});
    const [touched,setTouch] = useState({});

    const changeHandler = (event) => {
        if (event.target.name === 'isAccepted') {
            setData({...data,[event.target.name]:event.target.checked})
        }else{

            setData({...data,[event.target.name]:event.target.value})
        }
        
    }
    const focusHandler = (event) =>{
        setTouch({...touched,[event.target.name]:true})
    }
    
    const submitHandler = (e) =>{
        e.preventDefault()
        if (!Object.keys(errors).length) {
            notify('success')
        } else {
            notify('faild')
            setTouch({
                username:true,
                email:true,
                password:true,
                confirmpassword:true,
                isAccepted:true,
            })
        }
    }
    useEffect(()=>{
        setErrors(validate(data,'signup'));
    },[data])
    return (
        <div>
            <form onSubmit={submitHandler}>
                <div>
                    <label>username</label>
                    <input type="text" name="username" value={data.username}  onChange={changeHandler} onFocus={focusHandler}/>
                    {errors.username && touched.username && <span>{errors.username}</span>}
                </div>
                <div>
                    <label>email</label>
                    <input type="email" name="email" value={data.email}  onChange={changeHandler} onFocus={focusHandler}/>
                    {errors.email && touched.email && <span>{errors.email}</span>}

                </div>
                <div>
                    <label>password</label>
                    <input type="password" name="password" value={data.password}  onChange={changeHandler} onFocus={focusHandler}/>
                    {errors.password && touched.password && <span>{errors.password}</span>}
                    
                </div>
                <div>
                    <label>confirmpassword</label>
                    <input type="password" name="confirmpassword" value={data.confirmpassword}  onChange={changeHandler} onFocus={focusHandler}/>
                    {errors.confirmpassword && touched.confirmpassword && <span>{errors.confirmpassword}</span>}

                </div>
                <div>
                    <label>your accept our rules</label>
                    <input type="checkbox" name="isAccepted"  value={data.isAccepted} onChange={changeHandler} onBlur={focusHandler}/>
                    {errors.isAccepted && touched.isAccepted &&  <span>{errors.isAccepted}</span>}
                    
                </div>
                <div>
                    <a href="/#">login</a>
                    <button type="submit">signUp</button>
                </div>
            </form>
            <ToastContainer/>
        </div>
    );
};

export default Signup;