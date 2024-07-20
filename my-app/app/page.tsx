import styles from "./page.module.css";
import Weather from "./WeatherApp/WeatherApp";
export default function Home() {
  return (
    <main className={styles.main}>
      <Weather/>
    </main>
  );
}
