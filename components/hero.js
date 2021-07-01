import styles from './hero.module.css';

export default function Hero() {
    return (
        <div className={styles.hero}>
            <div className={styles.text}>
                <h1>Welcome to Rodwin's Tavern</h1>
                <h3>The home of classic burgers and steaks</h3>
            </div>
        </div>
    )
}
