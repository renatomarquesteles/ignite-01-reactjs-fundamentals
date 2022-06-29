import { format, formatDistanceToNow } from 'date-fns';
import React, { useState } from 'react';

import { Avatar } from './Avatar';
import { Comment } from './Comment';
import styles from './Post.module.css';

export function Post({ author, content, postComments, publishedAt }) {
  const [comments, setComments] = useState(postComments);
  const [newCommentText, setNewCommentText] = useState('');

  const publishedDateFormatted = format(publishedAt, 'LLLL d, hh:mm bbbb');
  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    addSuffix: true,
  });

  function handleCreateNewComment(e) {
    e.preventDefault();

    const newComment = {
      id: comments.length + 1,
      author: {
        avatarUrl: 'https://github.com/renatomarquesteles.png',
        name: 'Renato Marques Teles',
      },
      content: [{ type: 'paragraph', content: newCommentText }],
      publishedAt: new Date(),
    };

    setComments([...comments, newComment]);
    setNewCommentText('');
  }

  function handleNewCommentChange(e) {
    e.target.setCustomValidity(''); // Removes custom validation message
    setNewCommentText(e.target.value);
  }

  function handleNewCommentInvalid(e) {
    e.target.setCustomValidity('Please enter a valid comment'); // Adds custom validation message
  }

  function deleteComment(commentId) {
    setComments(comments.filter((comment) => comment.id !== commentId));
  }

  const isNewCommentEmpty = newCommentText.length === 0;

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

      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Leave your comment below</strong>

        <textarea
          name="comment"
          placeholder="Your comment"
          value={newCommentText}
          onChange={handleNewCommentChange}
          onInvalid={handleNewCommentInvalid}
          required
        />

        <footer>
          <button type="submit" disabled={isNewCommentEmpty}>
            Send
          </button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map((comment) => (
          <Comment
            key={comment.id}
            author={comment.author}
            commentId={comment.id}
            content={comment.content}
            publishedAt={comment.publishedAt}
            deleteComment={deleteComment}
          />
        ))}
      </div>
    </article>
  );
}
