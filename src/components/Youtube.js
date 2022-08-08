import styles from '../../styles/Youtube.module.css';

export default function Youtube(id) {
  return (
    <div className={styles.container}>
      <iframe
        src={`https://www.youtube.com/embed/${id}`}
        allow="autoplay; accelerometer;"
        title="Embedded from Youtube"
        className={styles.frame}
        frameBorder="0"
      />
    </div>
  );
}
