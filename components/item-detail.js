import Image from 'next/image';

import styles from './item-detail.module.css';

export default function ItemDetail({name, price, image, description}) {
    return (
        <div className={styles.container}>
            <Image src={image} alt={name} width={700} height={500} />
            <div className={styles.text}>
                <h1>{name}</h1>
                <p>{description}</p>
                <p>{price}</p>
            </div>
        </div>
    )
}
