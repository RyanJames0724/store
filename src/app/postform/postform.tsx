import styles from './postform.module.scss';

/* eslint-disable-next-line */
export interface PostformProps {}

export function Postform(props: PostformProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Postform!</h1>
    </div>
  );
}

export default Postform;
