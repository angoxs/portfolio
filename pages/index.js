import Head from "next/head";
import styles from "../styles/Home.module.css";
import Fade from "react-reveal/Fade";
import {
  Navigation,
  Header,
  Projects,
  Brief,
  Clients,
  Footer,
} from "../components";

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
      <Header />
      <Projects />
      <Brief />
      <Clients />
      <Footer />
    </div>
  );
}
