import { Layout } from "../Layout/Layout";
import styles from "./Home.module.css";

export const Home = () => {
  return (
    <Layout background="light">
      <div className={styles.home}>
        <div className={styles["home-content"]}>
          <b>Hello, Welcome</b>
          <h2>I am Luka</h2>
          <p>
            There are many variations of passages ofLorem Ipsum available, but
            the majority havesuffered alteration in some form, by injected
            humour.
          </p>
          <button>Contact us</button>
        </div>
        <img
          src="/personal-photo.png"
          alt="personal photo"
          className={styles["home-image"]}
        />
      </div>
    </Layout>
  );
};
