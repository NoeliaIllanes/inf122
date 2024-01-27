import styles from "./page.module.css";
import Profile from "./components/profile";
import Stats from "./components/stats";
import Buttons from "./components/buttons";
import Skills from "./components/skills";
import Tabs from "./components/tabs";

export default function Home() {
  return (
    <div className={styles.main}>
      <Profile />
      <Stats />
      <Buttons />
      <Skills />
      <Tabs />
    </div>
  );
}