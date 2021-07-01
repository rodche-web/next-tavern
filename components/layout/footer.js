import styles from './footer.module.css'

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div>
                <h3>Opening Hours</h3>
                <p>Monday to Saturday</p>
                <p>11AM - 12PM</p>
            </div>
            <div>
                <h3>Contact Us</h3>
                <p>2207 Northwest Boulevard</p>
                <p>Ramsey, New Jersey(NJ), 07446</p>
                <p>201-934-1474</p>
            </div>
        </footer>
    )
}
