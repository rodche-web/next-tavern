import {useRouter} from 'next/router';
import {menuItems} from '../../data';
import ItemDetail from '../../components/item-detail';

export default function ProductDetail() {
    const router = useRouter();
    const menuItem = menuItems.find(item => item.id === router.query.productId)
    return (
        <>
            <ItemDetail name={menuItem.name} price={menuItem.price} image={menuItem.image} description={menuItem.description} />
        </>
    )
}