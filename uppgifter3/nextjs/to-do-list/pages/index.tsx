import type { NextPage } from 'next';
import styles from '../styles/Home.module.css';
import ToDoList from '../components/ToDoList/ToDoList';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <ToDoList />
    </div>
  );
};

export default Home;
