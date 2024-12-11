// pages/tokyo.js

import styles from './tokyo.module.css';
import Image from 'next/image';
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
                <img className={styles.image} src="/downtown_JP.jpg" alt="Tokyo cityscape" />

            </section>

            <section className={styles.section}>
                <h2 className={styles.subTitle}>Iconic Landmarks</h2>
                <p className={styles.text}>
                    Modeled after the Eiffel Tower in Paris and painted bright orange and white, Tokyo Tower is the second-tallest structure in Japan. Start your adventure in FootTown, the tower’s four-story shopping plaza located at the base of the structure. Then make your way up to two observation decks, the first at about 492 feet (150 meters) and the second at 819 feet (250 meters), to peer out over Minato and Zōjō-ji Temple in Shiba Park.
                </p>
                <img className={styles.image} src="/Tokyo-Tower.jpg" alt="Tokyo cityscape" />
            </section>

            <section className={styles.section}>
                <h2 className={styles.subTitle}>Vibrant Culture</h2>
                <p className={styles.text}>
                    Sensoji is perhaps the most famous and photographed of Tokyo's temples. It is the oldest Buddhist temple in the capital, and the five-story pagoda, trails of incense and vast eaves will take you back to a Tokyo of time gone by.The history of the temple is an interesting one. Legend states that two fisherman caught a golden statue of Kannon—the merciful nirvana achiever—in what is now the Sumida River. Despite trying to return the figure to the river multiple times it always came back to them. Being recognized as Kannon, it was enshrined. Although Sensoji Temple was founded in 628 the current crimson building is much more modern, as it was rebuilt after being destroyed in WW2.
                </p>
                <img className={styles.image} src="/temple.jpg" alt="Tokyo cityscape" />
            </section>

        </div>
    );
}
