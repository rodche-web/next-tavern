import Image from 'next/image';

import styles from './menu-item.module.css';

export default function MenuItem({item}) {
    return (
        <div className={styles.card}>
            <Image src={item.image} width={200} height={200} />
            <div className={styles.text}>
                <h3>{item.name}</h3>
                <p>{item.price}</p>
            </div>
        </div>
    )
}
