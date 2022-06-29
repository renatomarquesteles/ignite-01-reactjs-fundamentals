import { HandsClapping, Trash } from 'phosphor-react';
import { format, formatDistanceToNow } from 'date-fns';

import { Avatar } from './Avatar';
import styles from './Comment.module.css';

export function Comment({
  author,
  commentId,
  content,
  publishedAt,
  deleteComment,
}) {
  const publishedDateFormatted = format(publishedAt, 'LLLL d, hh:mm bbbb');
  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    addSuffix: true,
  });

  function handleDeleteComment() {
    deleteComment(commentId);
  }

  return (
    <div className={styles.comment}>
      <Avatar src={author.avatarUrl} hasBorder={false} />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>{author.name}</strong>
              <time
                title={publishedDateFormatted}
                dateTime={publishedAt.toISOString()}
              >
                {publishedDateRelativeToNow}
              </time>
            </div>

            <button title="Delete comment" onClick={handleDeleteComment}>
              <Trash size={24} />
            </button>
          </header>

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
