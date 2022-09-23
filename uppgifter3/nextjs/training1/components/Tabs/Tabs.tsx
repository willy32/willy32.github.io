import React, { Children, CSSProperties, useState } from 'react';
import Tab from './Tab';
import styles from "./Tabs.module.css";

type TabProps = {
  children: any,
  style?: CSSProperties
};


const Tabs:React.FC<TabProps> = ({children, style}:TabProps) => {

  const [activeIndex, setActiveIndex] = useState(0);

  const childArray:any[] = Children.map(children, (child) => {
    if(child.type !== Tab) throw new Error("Invalid child type, got " + child.type);
    return child;
  });

  return (
    <div className={styles.tabs} style={style}>
      <div className={styles.topbar}>
        {childArray.map((child, index) => (
          <button 
            key={child.props.label}
            className={index === activeIndex ? styles.active : ""}
            onClick={() => setActiveIndex(index)}
          >
            {child.props.label}
          </button>
        ))}
      </div>
      <div className={styles.content}>
        {childArray[activeIndex]}
      </div>
    </div>
  );
};

export default Tabs;