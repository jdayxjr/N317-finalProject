// pages/tokyo.js

import styles from './tokyo.module.css';

export default function Tokyo() {
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <h1 className={styles.title}>Discover Tokyo</h1>
            </header>

            <section className={styles.introSection}>
                <p className={styles.text}>
                    Tokyo, Japan's bustling capital, is a captivating blend of traditional culture and cutting-edge modernity. From ancient temples to towering skyscrapers, Tokyo offers an endless array of sights, sounds, and experiences.
                </p>
                <img className={styles.image} src="../images/downtown_JP.jpg" alt="Tokyo cityscape" />
            </section>

            <section className={styles.section}>
                <h2 className={styles.subTitle}>Iconic Landmarks</h2>
                <p className={styles.text}>
                    Explore landmarks like the historic Senso-ji Temple, the iconic Tokyo Tower, and the futuristic Shibuya Crossing, where tradition and modern life coexist in perfect harmony.
                </p>
                <img className={styles.image} src="/placeholder2.jpg" alt="Senso-ji Temple" />
            </section>

            <section className={styles.section}>
                <h2 className={styles.subTitle}>Vibrant Culture</h2>
                <p className={styles.text}>
                    Tokyo is a city of contrasts. Wander through serene gardens, savor sushi at a traditional eatery, or experience the neon-lit nightlife in areas like Shinjuku and Roppongi.
                </p>
                <img className={styles.image} src="/placeholder3.jpg" alt="Neon streets of Tokyo" />
            </section>

            <footer className={styles.footer}>
                <p className={styles.footerText}>© 2024 Explore Tokyo</p>
            </footer>
        </div>
    );
}
