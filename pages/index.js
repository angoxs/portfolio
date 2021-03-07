import Head from "next/head";
import styles from "../styles/Home.module.css";
import Fade from "react-reveal/Fade";
import Navigation from "../components/Navigation";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Portolio 2021</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600;700;800&display=swap');
      </style>
      <Navigation />
      <div className={styles.grid}>
        <div className={styles.frame}>
          <Fade up>
            <h1 className={styles.title}>Design & Code</h1>
          </Fade>
          <Fade up>
            <p className={styles.description}>
              I’m a front-end designer & developer based in Florida.
            </p>
          </Fade>
        </div>

        <div>
          <button className={styles.button}>Get a FREE proposal</button>
        </div>
      </div>
      <div className={styles.frame02}>
        <div className={styles.box}>
          <Fade up>
            <img
              className={styles.cool}
              src="https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1651&q=80"
            />
          </Fade>

          <div className={styles.spans}>
            <p>UI/UX Design</p>
            <span className={styles.span02}>Since 2015</span>
            <span className={styles.span03}>Design</span>
          </div>
          <Fade right>
            <img
              className={styles.avatar}
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1100&q=80"
            />
          </Fade>
        </div>
      </div>
    </div>
  );
}
