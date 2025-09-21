// style
import styles from "./chart-container.module.css";

export default function ChartContainer({ title, children, className }) {
  return (
    <div className={`${styles.chartContainer} ${className}`}>
      <h3>{title}</h3>
      <div className={styles.chart}>
        <div className={styles.chartPlaceholder}>
          {children}
        </div>
      </div>
    </div>
  );
}
