import React, {ReactNode} from 'react';
import styles from '../styles/Layout.module.css';
import Header from './Header';
import Footer from './Footer';

interface Props {
  children: ReactNode
}

const Layout:React.FC<Props> = (props) => {
  return (
    <div className={styles.container}>
        <Header />
        <div>{props.children}</div>
        <Footer/>
    </div>
  );
};

export default Layout;