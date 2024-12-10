"use client";
import React, { useState } from "react";
import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  const [showMore, setShowMore] = useState(false);

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
          Experience Japans unique culture through traditional tea ceremonies,
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

   
      <section className={styles.section}>
        <button
          className={styles.toggleButton}
          onClick={() => setShowMore(!showMore)}
        >
          {showMore ? "Show Less" : "Show More"}
        </button>

        {showMore && (
          <div className={styles.additionalInfo}>
            <h3 className={styles.redText}>Did You Know?</h3>
            <p>
              Japan has the worlds third-largest economy and is known for its
              cutting-edge technology, anime, and robotics. The Shinkansen, or
              bullet train, symbolizes its innovation, traveling at speeds up
              to 320 km/h!
            </p>
          </div>
        )}
      </section>
    </div>
  );
}
