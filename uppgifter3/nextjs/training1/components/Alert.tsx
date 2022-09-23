import React, { useState } from 'react';

const Alert: React.FC = () => {
    const [text, SetText] = useState("");

    const ShowAlert = () => {
        alert(text);
    }

    return (
        <div>
            <input type="text" 
            onChange={(e) => {
                SetText(e.target.value);
            }}
            />
            <button onClick={ShowAlert}>Alert</button>
        </div>
    );
};

export default Alert;