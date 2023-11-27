import React from 'react';
import styles from './Post.module.css';

const Post = ({ id, title, body, onRemove }) => {
    return (
        <div className={styles.post}>
            <div className={styles.title}>{title}</div>
            <div className={styles.body}>{body}</div>
            <button className={styles.removeButton} onClick={() => onRemove(id)}>
                Remove
            </button>
        </div>
    );
};

export default Post;