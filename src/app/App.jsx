import styles from "./app.module.css";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import Player from "../player/Player";
function App() {
  return (
    <div className={styles.appGrid}>
      <Header />
      <Player />
      <Footer />
    </div>
  );
}

export default App;
