import React, {useState} from 'react';
import styles from "../styles/LoginForm.module.css"

const LoginForm = () => {
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [loginMessage, setLoginMessage] = useState("");

    function submitLoginForm(e:React.SyntheticEvent) {
        e.preventDefault();
        console.log("Password: " + password);

        const data = {
          email: email,
          password: password
        }

        fetch("http://localhost:3000/api/auth", {
            method:"PUT",
            body: JSON.stringify(data)
          })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
          });
        /*
        fetch("http://10.111.1.158:3001/login", {
          headers:{
            "Content-Type": "application/json"
          },
          method: "POST",
          mode: "cors",
          body: JSON.stringify(data)
        }).then(res=>res.json())
        .then((data) => {
          console.log(data);
          if(data.data.length > 0) setLoginMessage(data.message);
          else setLoginMessage("login failed");
        });*/
    }
  return (
    <div className={styles.card}>
        <h1>Login</h1>
        <form action="#" method="post" onSubmit={submitLoginForm}>
          <input onChange={({target}) => {
            setEmail(target.value);
          }} type="email" name="txtEmail" placeholder="yourname@email.com"/>
          <input onChange={({target}) => {
            setPassword(target.value);
          }} type="password" name="txtPassword" placeholder="Password"/>
          <button type="submit">Login</button>
          <div>{loginMessage}</div>
        </form>
      </div>
  );
};

export default LoginForm;