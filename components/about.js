import Image from 'next/image';

import styles from './about.module.css'

export default function About() {
    return (
        <div className={styles.container}>
            <Image src={'/images/resto-indoor.jpg'} width={700} height={500} />
            <div className={styles.text}>
                <h1>About Us</h1>
                <p>Temporibus nulla eius aliquam porro adipisci sunt. Totam eum et sint facere maiores. Laboriosam veritatis expedita et impedit ut iste quibusdam.</p>
                <p>Consequatur sint et officia. Nisi aut quod et sed possimus ut a odio. Magni quaerat omnis vel odit necessitatibus dolor deleniti. Veniam perferendis veniam minima tempore ratione non sit sit. Magnam dolor eveniet ipsum eum unde et mollitia et.</p>
            </div>
        </div>
    )
}
