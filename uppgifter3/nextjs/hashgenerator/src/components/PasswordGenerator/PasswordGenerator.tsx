import React, { FormEvent, useState } from 'react';
import styles from "./PasswordGenerator.module.css";

const HashGenerator = () => {
    const charSet :string = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!\"#¤%&/()=?¡@£$€¥{[]}\\±";

    const [passwordLength, setPasswordLength] = useState(0);
    const [generatedPassword, setGeneratedPassword] = useState("")

    const generate = (): void => {
        const charSetArr: string[] = charSet.split("");
        let result: string = "";


        for(let i = 0; i < passwordLength; i++){
            result += charSetArr[Math.floor(Math.random() * charSetArr.length)];
        }

        setGeneratedPassword(result);
    };
    return (
        <div className={styles.container}>
            <h3>Password Generator</h3>
            <input type="number" value={passwordLength} placeholder="Password Length"
            onChange={e => setPasswordLength(parseInt(e.target.value))}/>
            <button onClick={generate} >Generate</button>
            <p>{generatedPassword}</p>
        </div>
    );
};

export default HashGenerator;