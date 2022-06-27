import { Avatar } from './Avatar';
import { Comment } from './Comment';
import styles from './Post.module.css';

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src="https://avatars.dicebear.com/api/personas/dollar.svg?b=%23228785" />
          <div className={styles.authorInfo}>
            <strong>Carlos Santana</strong>
            <span>Bitcoin Whale</span>
          </div>
        </div>

        <time title="June 27, 2022 at 11:03 AM" dateTime="2022-06-27 11:03:30">
          14min ago
        </time>
      </header>

      <div className={styles.content}>
        <p>Hey guys!</p>
        <p>Remember to always buy the dip 😁</p>
        <p>
          Also, check out my new course on how to get rich by investing in
          crypto:
        </p>
        <p>
          <a href="#">https://totallynotascam.com/get-rich</a>
        </p>
        <p>
          <a href="#">#bitcoin</a> <a href="#">#crypto</a>{' '}
          <a href="#">#tothemoon</a>
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Leave your comment below</strong>

        <textarea placeholder="Your comment" />

        <footer>
          <button type="submit">Send</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  );
}
