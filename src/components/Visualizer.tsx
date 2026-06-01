import styles from '../css/visualizer.module.css';

const Visualizer = () => {
  const strokes = [];
  for (let s = 23; s >= 1; s -= 2) strokes.push(s);
  for (let s = 3; s <= 23; s += 2) strokes.push(s);
  return (
    <>
      {
        strokes.map((stroke, i) => (
          <article key={i} className={styles.strokeContainer}>
            <span style={{ "--stroke": stroke } as React.CSSProperties} className={styles.strokeContainer__filler}></span>
          </article>
        ))
      }
    </>
  );
};

export default Visualizer;
