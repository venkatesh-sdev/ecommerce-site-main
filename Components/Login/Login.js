import React from 'react'
import { useStateContext } from '../../context/StateContext'
import styles from './Login.module.css'
import toast from "react-hot-toast";
import { runFireworks } from '../../lib/utils';

const Login = () => {
    const {setIsLogin,setUserName,setUserEmail,setUserPassword,userName,userEmail,userPassword} = useStateContext();

    const submitHandeler = (event)=>{
        event.preventDefault();
        if(userName==='test' && userEmail==='test@gmail.com' && userPassword ==='test@123'){
        setIsLogin(true);
        toast.success('Logged In')
    runFireworks();
        setUserName('');
        setUserEmail('');
        setUserPassword('');
    }
        else{
            toast.error('Enter The Valid Credentials')
        }
    }
  return (
    <div className={styles.loginContainer}>
        <h1>User Login</h1>
        <form onSubmit={submitHandeler} className={styles.login__form}>
            <input type="text" placeholder='Enter Name' onChange={(e)=>setUserName(e.target.value)} value={userName} />
            <input type="email" placeholder='Enter Email' onChange={(e)=>setUserEmail(e.target.value)} value={userEmail}/>
            <input type='password' placeholder='Enter Password' onChange={(e)=>setUserPassword(e.target.value)} value={userPassword}/>
            <button type='submit' className={styles.button}>Login</button>
        </form>
    </div>
  )
}

export default Login