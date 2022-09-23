import { useState } from "react";
import styles from "../styles/CircleButton.module.css";

type Props = {
  color: string
}

const CircleButton = (props:Props) => {
  const [isOn, setIsOn] = useState(false);

  const ChangeColor = () => {
    setIsOn(!isOn);
  }

  return (
    <div className={styles.container}>
      <div className={styles.circle} style={{
        backgroundColor: isOn ? props.color : undefined
      }}></div>
      <button onClick={ChangeColor}>Change</button>
    </div>
  );
};

export default CircleButton;