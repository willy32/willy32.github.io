import React from 'react';
import styles from "./CourseContainer.module.css";

type CourseContainerProps = {
    children: any
}

const CourseContainer = ({children}: CourseContainerProps) => {
  return (
    <div className={styles.container}>
        {children}
    </div>
  );
};

export default CourseContainer;