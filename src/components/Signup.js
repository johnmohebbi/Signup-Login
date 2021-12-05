import React, { useState ,useEffect} from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { validate } from './validate';
import { notify } from './notify';
import styles from "./styles/signup.module.css"
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
        <div className={styles.container}>
            <form onSubmit={submitHandler} className={styles.formContainer} autoComplete="off">
                <h2>Sign Up</h2>
                <div className={styles.formField}>
                    <label className={styles.lbl}>username</label>
                    <input  className={errors.username && touched.username &&styles.invalide} type="text" name="username" value={data.username}  onChange={changeHandler} onFocus={focusHandler}/>
                    {errors.username && touched.username && <span>{errors.username}</span>}
                </div>
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
                <div className={styles.formField}>
                    <label className={styles.lbl}>confirmpassword</label>
                    <input  className={errors.confirmpassword && touched.confirmpassword &&styles.invalide} type="password" name="confirmpassword" value={data.confirmpassword}  onChange={changeHandler} onFocus={focusHandler}/>
                    {errors.confirmpassword && touched.confirmpassword && <span>{errors.confirmpassword}</span>}

                </div>
                <div className={styles.isAccepted}>
                    <label>your accept our rules</label>
                    <input type="checkbox" name="isAccepted"  value={data.isAccepted} onChange={changeHandler} onBlur={focusHandler}/>
                    {errors.isAccepted && touched.isAccepted &&  <span>{errors.isAccepted}</span>}
                    
                </div>
                <div className={styles.btnsContainer}>
                    <a href="/#">Login</a>
                    <button type="submit">SignUp</button>
                </div>
            </form>
            <ToastContainer/>
        </div>
    );
};

export default Signup;