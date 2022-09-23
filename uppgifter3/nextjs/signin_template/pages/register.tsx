import React from 'react'
import styles from "../styles/Register.module.css";
import RegisterForm from "../components/RegisterForm";

const Register = () => {
  return (
    <div className={styles.main}>
      <RegisterForm/>
    </div>
  )
}

export default Register;