import React from 'react'
import styles from "../styles/Login.module.css";
import LoginForm from "../components/LoginForm";

const Login = () => {
  return (
    <div className={styles.main}>
      <LoginForm/>
    </div>
  )
}

export default Login;