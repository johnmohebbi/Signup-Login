import React, { useState ,useEffect} from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { validate } from './validate';
import { notify } from './notify';
import styles from "./styles/login.module.css";
const Login = () => {
    const [data,setData] = useState({
        email:"",
        password:"",
    })
    const [errors,setErrors] = useState({});
    const [touched,setTouch] = useState({});

    const changeHandler = (event) => {
            setData({...data,[event.target.name]:event.target.value})
        
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
                email:true,
                password:true,
                
            })
        }
    }
    useEffect(()=>{
        setErrors(validate(data));
    },[data])
    return (
        <div className={styles.container}>
            <form onSubmit={submitHandler} className={styles.formContainer} autoComplete="off">
                <h2>Login</h2>
                <div className={styles.formField}>
                    <label className={styles.lbl}>email</label>
                    <input className={errors.email && touched.email &&styles.invalide} type="email" name="email" value={data.email}  onChange={changeHandler} onFocus={focusHandler}/>
                    {errors.email && touched.email && <span>{errors.email}</span>}

                </div>
                <div className={styles.formField}>
                    <label className={styles.lbl}>password</label>
                    <input  className={errors.password && touched.password &&styles.invalide} type="password" name="password" value={data.password}  onChange={changeHandler} onFocus={focusHandler}/>
                    {errors.password && touched.password && <span>{errors.password}</span>}
                </div >
               
                
                <div className={styles.btnsContainer}>
                    <Link to="/signup">Signup</Link>
                    <button type="submit">SignUp</button>
                </div>
            </form>
            <ToastContainer/>
        </div>
    );
};

export default Login;