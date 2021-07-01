import MenuItem from './menu-item';
import {menuItems} from '../../data';

import Link from 'next/link'

import styles from './menu-list.module.css';

export default function MenuList() {
    return (
        <div className={styles.menu_list}>
            {menuItems.map(menuItem => <Link href={`/menu/${menuItem.id}`} key={menuItem.id}><a><MenuItem item={menuItem} /></a></Link>)}
        </div>
    )
}
