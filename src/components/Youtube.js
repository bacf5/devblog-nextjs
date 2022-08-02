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

// https://www.youtube.com/watch?v=mSSW8Kz1rVs
// <iframe width="768" height="432" src="https://www.youtube.com/embed/NiLUGy1Mh4U" title="Reduce: 10 Different Examples. JavaScript Fundamentals." frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
