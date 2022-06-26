import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { Post } from './Post';

import styles from './App.module.css';

import './global.css';

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          <Post author="Renato Marques" content="Good morning!" />
          <Post author="Diego Fernandes" content="Good night!" />
        </main>
      </div>
    </div>
  );
}
