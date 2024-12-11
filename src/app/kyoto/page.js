"use client";

import React, { useState } from "react";
import Image from "next/image";

import styles from "./kyoto.module.css";

export default function Kyoto() {
  const [showKyotoInfo, setShowKyotoInfo] = useState(false);

  return (
    <section className={styles.section}>
      <h2 className={styles.redText}>Discover Kyoto</h2>
      <div className={styles.content}>
        <p>
          Kyoto, once the imperial capital of Japan, is known for its stunning
          temples, traditional wooden houses, and beautiful geisha district. The
          city is a cultural treasure trove, offering a glimpse into Japans rich
          history and heritage.
        </p>
        <div className={styles.imageContainer}>
          <Image
            src="/kyoto_temple.jpg"
            alt="Kyoto Temple"
            width={500}
            height={300}
            className={styles.image}
          />
          <p className={styles.imageCaption}>
            A serene view of Kinkaku-ji, the Golden Pavilion.
          </p>
        </div>
        <p>
          Visitors can enjoy traditional tea ceremonies, explore the Arashiyama
          Bamboo Grove, and marvel at the breathtaking cherry blossoms during
          spring. Kyoto is also home to some of Japans most iconic landmarks like
          Fushimi Inari Shrine with its thousands of red torii gates.
        </p>
        <div className={styles.imageContainer}>
          <Image
            src="/fushimi_inari.jpg"
            alt="Fushimi Inari Shrine"
            width={500}
            height={300}
            className={styles.image}
          />
          <p className={styles.imageCaption}>
            The famous torii gates of Fushimi Inari Shrine.
          </p>
        </div>
        <button
          className={styles.toggleButton}
          onClick={() => setShowKyotoInfo(!showKyotoInfo)}
        >
          {showKyotoInfo ? "Show Less" : "Show More"}
        </button>
        {showKyotoInfo && (
          <div className={styles.additionalInfo}>
            <h3 className={styles.redText}>More About Kyoto</h3>
            <p>
              Kyoto is known for its incredible festivals, such as Gion Matsuri,
              held annually in July. It is also famous for its cuisine, including
              kaiseki dining and matcha-flavored treats. Kyotos serene gardens,
              traditional crafts, and stunning autumn foliage make it a must-visit
              destination in Japan.
            </p>
           
          </div>
        )}
      </div>
    </section>
  );
}
