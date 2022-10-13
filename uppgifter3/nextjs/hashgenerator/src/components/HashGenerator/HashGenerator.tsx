import React, { FormEvent, useState } from 'react';
import crypto from "crypto";
import styles from "./HashGenerator.module.css";

const HashGenerator = () => {
    const [txtText, setTxtText] = useState("");
    const [txtEncrypted, setTxtEncrypted] = useState("");
    /*
    const encrypt = () => {
        setTxtEncrypted(crypto.createHash('md5').update(txtText).digest('hex'));
    };
    */
    const submitEncrypt = async () => {
        const res = await fetch("http://localhost:3000/api/hash", {
            method: "POST",
            body: JSON.stringify({text: txtText})
        });
        const data = await res.json();

        setTxtEncrypted(data.hash);

    };
    return (
        <div className={styles.container}>
            <h3>Hash Generator</h3>
            <input type="text" value={txtText} placeholder="Text"
            onChange={e => setTxtText(e.target.value)}/>
            {/*<button onClick={encrypt} >Generate</button>*/}
            <button onClick={submitEncrypt}>Encrypt</button>
            <p>{txtEncrypted}</p>
        </div>
    );
};

export default HashGenerator;