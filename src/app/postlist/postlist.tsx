import styles from './postlist.module.scss';

/* eslint-disable-next-line */
export interface PostlistProps {}

export function Postlist(props: PostlistProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Postlist!</h1>
    </div>
  );
}

export default Postlist;
