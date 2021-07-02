import Image from 'next/image';

import styles from './about.module.css'

export default function About() {
    return (
        <div className={styles.container}>
            <Image src={'/images/resto-indoor.jpg'} width={700} height={500} />
            <div className={styles.text}>
                <h1>About Us</h1>
                <p>Home of the finest classic burgers and steaks. Whether you come in for drinks before dinner or to enjoy a group of friends after a great game day, you will always find what you're looking for.</p>
                <p>Celebrate the good days by savoring the great food at Rodwin's Tavern. Our attentive staff's demeanor and welcoming atmosphere is the perfect accompaniment to your next night on the town. And our burgers and steaks are flanked with an array of fresh vegetables and other premium offerings. So stop in today with your friends, or make a reservation for the whole gang.</p>
            </div>
        </div>
    )
}
