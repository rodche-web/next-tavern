import Image from 'next/image';
import Link from 'next/link';

import Footer from './footer';

import styles from './layout.module.css';

export default function Layout({children}) {
    return (
        <>
            <header className={styles.header}>
                <Image src={'/images/tavern-logo.png'} alt={'tavern-logo'} width={150} height={150} />
                <nav>
                    <ul className={styles.nav_links}>
                        <li><Link href="/"><a>Home</a></Link></li>
                        <li><Link href="/about"><a>About</a></Link></li>
                        <li><Link href="/menu"><a>Menu</a></Link></li>
                    </ul>
                </nav>
            </header>
            {children}
            <Footer />
        </>
        
    )
}
