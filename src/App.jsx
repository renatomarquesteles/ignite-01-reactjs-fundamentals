import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { Post } from './components/Post';

import styles from './App.module.css';

import './global.css';

const posts = [
  {
    id: 1,
    author: {
      avatarUrl:
        'https://avatars.dicebear.com/api/personas/dollar.svg?b=%23228785',
      name: 'Carlos Santana',
      role: 'Bitcoin Whale',
    },
    content: [
      { type: 'paragraph', content: 'Hey guys!' },
      { type: 'paragraph', content: 'Remember to always buy the dip 😁' },
      {
        type: 'paragraph',
        content:
          'Also, check out my new course on how to get rich by investing in crypto:',
      },
      { type: 'link', content: 'https://totallynotascam.com/get-rich' },
      { type: 'hashtag', content: '#bitcoin' },
      { type: 'hashtag', content: '#crypto' },
      { type: 'hashtag', content: '#tothemoon' },
    ],
    comments: [
      {
        id: 1,
        author: {
          avatarUrl:
            'https://avatars.dicebear.com/api/personas/pqs.svg?b=%23fbffc7',
          name: 'Chico Santana',
        },
        content: [
          {
            type: 'paragraph',
            content: "Thanks!! I'm already making $100k a day 💰",
          },
        ],
        publishedAt: new Date('2022-06-27 20:35:55'),
      },
    ],
    publishedAt: new Date('2022-06-27 20:29:18'),
  },
  {
    id: 2,
    author: {
      avatarUrl:
        'https://avatars.dicebear.com/api/personas/klkslhklsh.svg?b=%234a75ba',
      name: 'Michael Kyle',
      role: 'Gym Bro',
    },
    content: [
      {
        type: 'paragraph',
        content: "I'll do one push-up for every Clap on this post",
      },
      { type: 'paragraph', content: "Let's go! 💪" },
      { type: 'hashtag', content: '#gym' },
      { type: 'hashtag', content: '#fitness' },
    ],
    comments: [
      {
        id: 1,
        author: {
          avatarUrl:
            'https://avatars.dicebear.com/api/personas/klkslhklsh.svg?b=%234a75ba',
          name: 'Michael Kyle',
        },
        content: [
          {
            type: 'paragraph',
            content: 'Clap here!',
          },
        ],
        publishedAt: new Date('2022-06-27 13:38:54'),
      },
    ],
    publishedAt: new Date('2022-06-27 13:37:54'),
  },
];

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          {posts.map((post) => (
            <Post
              key={post.id}
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
              postComments={post.comments}
            />
          ))}
        </main>
      </div>
    </div>
  );
}
