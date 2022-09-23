import React, {useState} from 'react';
import styles from "../styles/RegisterForm.module.css"

const RegisterForm = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    fetch("http://localhost:3000/api/auth")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    });

    function submitRegisterForm(e:React.SyntheticEvent) {
        e.preventDefault();
        console.log("Password: " + password);
        const data = {
          name: name,
          email: email,
          password: password
        }
        fetch("http://localhost:3000/api/auth", {
            method:"POST",
            body: JSON.stringify(data)
          })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
          });
        /*
        fetch("http://10.111.1.158:3001/signup", {
          headers:{
            "Content-Type": "application/json"
          },
          method: "POST",
          mode: "cors",
          body: JSON.stringify(data)
        }).then(res=>res.json())
        .then((data) => {
          console.log(data);
          setToken(data.token)
        });*/
    }
  return (
    <div className={styles.card}>
        <h1>Register</h1>
        <form action="#" method="post" onSubmit={submitRegisterForm}>
        <input onChange={({target}) => {
            setName(target.value);
          }} type="text" name="txtName" placeholder="John Smith"/>
          <input onChange={({target}) => {
            setEmail(target.value);
          }} type="email" name="txtEmail" placeholder="yourname@email.com"/>
          <input onChange={({target}) => {
            setPassword(target.value);
          }} type="password" name="txtPassword" placeholder="Password"/>
          <button type="submit">Register</button>
        </form>
      </div>
  );
};

export default RegisterForm;