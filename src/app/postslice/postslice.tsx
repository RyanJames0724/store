import styles from './postslice.module.scss';

/* eslint-disable-next-line */
export interface PostsliceProps {}

export function Postslice(props: PostsliceProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Postslice!</h1>
    </div>
  );
}

export default Postslice;
