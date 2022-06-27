import { HandsClapping, Trash } from 'phosphor-react';
import styles from './Comment.module.css';

export function Comment() {
  return (
    <div className={styles.comment}>
      <img src="https://avatars.dicebear.com/api/personas/pqs.svg?b=%23fbffc7" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Chico Santana</strong>
              <time
                title="June 27, 2022 at 11:08 AM"
                dateTime="2022-06-27 11:08:30"
              >
                9min ago
              </time>
            </div>

            <button title="Delete comment">
              <Trash size={24} />
            </button>
          </header>

          <p>Thanks!! I'm already making $100k a day 💰</p>
        </div>

        <footer>
          <button>
            <HandsClapping />
            Clap <span>1</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
