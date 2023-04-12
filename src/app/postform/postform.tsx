import styles from './postform.module.scss';
import { useState } from 'react';
/* eslint-disable-next-line */
export interface PostformProps { }

export function Postform(props: PostformProps) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e: React.FormEvent<EventTarget>): void => {
    e.preventDefault()
    console.log('Post Title:', title)
    console.log('Post Content:', content)
  }
  return (
    <div className={styles['container']}>
      <section>
        <h2>Add a New Post</h2>
        <form>
          <div>
            <label htmlFor="username">Title</label>
            <input
              type="text"
              name="title"
              id="title"
              value={title}
              onChange={e => setTitle(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="password">Content</label>
            <textarea
              name="password"
              id="password"
              cols="30"
              rows="10"
              value={content}
              onChange={e => setContent(e.target.value)}
            ></textarea>
          </div>
          <button onClick={handleSubmit}>Add Post</button>
        </form>
      </section>
    </div>
  );
}

export default Postform;
