import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Image
          src="/japan_flag.jpg"
          alt="Japan Flag"
          width={1000}
          height={400}
          className={styles.heroImage}
        />
        <h1 className={styles.heroHeading}>Discover Japan</h1>
      </header>

      <section className={styles.section}>
        <h2 className={styles.redText}>About Japan</h2>
        <div className={styles.content}>
          <p>
            Japan, known as the *Land of the Rising Sun*, is a country rich in
            culture, history, and breathtaking landscapes. From ancient temples
            to modern cities, Japan offers a unique blend of tradition and
            innovation.
          </p>
          <Image
            src="/mt_fuji.jpg"
            alt="Mount Fuji"
            width={500}
            height={300}
            className={styles.image}
          />
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.whiteText}>Famous Destinations</h2>
        <div className={styles.content}>
          <div>
            <Image
              src="/tokyo.jpg"
              alt="Tokyo Cityscape"
              width={400}
              height={300}
              className={styles.image}
            />
            <p>Explore the vibrant streets of Tokyo.</p>
          </div>
          <div>
            <Image
              src="/kyoto.jpg"
              alt="Kyoto Temples"
              width={400}
              height={300}
              className={styles.image}
            />
            <p>Visit the serene temples of Kyoto.</p>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.blackText}>Cultural Highlights</h2>
        <p>
          Experience Japan unique culture through traditional tea ceremonies,
          sumo wrestling, cherry blossom festivals, and much more.
        </p>
        <Image
          src="/cherry_blossoms.jpg"
          alt="Cherry Blossoms"
          width={600}
          height={400}
          className={styles.image}
        />
      </section>
    </div>
  );
}
