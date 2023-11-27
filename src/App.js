import React, { useState } from 'react';
import Post from './components/Post';
import styles from './App.module.css';

const DATA = [
  {
    id:1,
    title: " aziz",
    body:"london"
  },
  {
    id:2,
    title: " belek",
    body:"USA"
  },
  {
    id:3,
    title: "isi",
    body:"ROSSIA"
  },
  {
    id:4,
    title: "aman",
    body:"bishkek"
  },
  {
    id:5,
    title: "nurik",
    body:"JApan"
  }
]
const App = () => {
  const [posts, setPosts] = useState(DATA);
  const [titleInput, setTitleInput] = useState('');

  const handleAddPost = () => {
    const newPost = {
      id: Math.random(),
      title: titleInput,
    };

    setPosts([...posts, newPost]);
    setTitleInput('');
  };

  const handleRemovePost = (postId) => {
    const updatedPosts = posts.filter((post) => post.id !== postId);
    setPosts(updatedPosts);
  };

  return (
      <div className={styles.container}>
        <div className={styles.inputContainer}>
          <input
              type="text"
              value={titleInput}
              onChange={(e) => setTitleInput(e.target.value)}
              placeholder="Enter title"
          />
          <button onClick={handleAddPost}>Add</button>
        </div>
        {posts.map((post) => (
            <Post
                id={post.id}
                title={post.title}
                body={post.body}
                onRemove={handleRemovePost}
            />
        ))}
      </div>
  );
};

export default App;