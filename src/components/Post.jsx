import { format, formatDistanceToNow } from 'date-fns';
import React from 'react';

import { Avatar } from './Avatar';
import { Comment } from './Comment';
import styles from './Post.module.css';

export function Post({ author, content, publishedAt }) {
  const publishedDateFormatted = format(publishedAt, 'LLLL d, hh:mm bbbb');
  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    addSuffix: true,
  });

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time
          title={publishedDateFormatted}
          dateTime={publishedAt.toISOString()}
        >
          {publishedDateRelativeToNow}
        </time>
      </header>

      <div className={styles.content}>
        {content.map((line) => {
          if (line.type === 'paragraph') {
            return <p key={line.content}>{line.content}</p>;
          } else if (line.type === 'link') {
            return (
              <p key={line.content}>
                <a href="#">{line.content}</a>
              </p>
            );
          }
        })}

        {!!content.find((line) => line.type === 'hashtag') && (
          <p>
            {content.map((line) => {
              if (line.type === 'hashtag') {
                return (
                  <React.Fragment key={line.content}>
                    <a href="#">{line.content}</a>{' '}
                  </React.Fragment>
                );
              }
            })}
          </p>
        )}
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
      </div>
    </article>
  );
}
