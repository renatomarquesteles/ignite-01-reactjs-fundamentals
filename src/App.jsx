import { Header } from './components/Header';
import { Post } from './Post';

import './global.css';

export function App() {
  return (
    <div>
      <Header />
      <Post author="Renato Marques" content="Good morning!" />
      <Post author="Diego Fernandes" content="Good night!" />
    </div>
  );
}
