import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { FaCartPlus } from 'react-icons/fa';
import { RootState } from '../../store/rootReducer';
import { addToCart } from '../Cart/CartSlice';
import styles from './ProductCard.module.css'

interface Props {
    shoeId: string;
}

export const ProductCard = ({ shoeId }: Props) => {
    const shoe: ShoeData = useSelector((state: RootState) => state.products.shoesById[shoeId]);

    const dispatch = useDispatch();
    const { category } = useParams();

    const add = () => {
        const item: CartItem = {    // CartItem is a type scriptLet see where it's comming from
            name: shoe.name,
            id: shoeId,
            price: +shoe.price.slice(1),
            image: shoe.images[0],
            category: shoe.category,
            quantity: 1,
            includedInSum: false,
        };
        dispatch( addToCart(item) );

    }

    return (
        <div className={styles.card}>
            <img src={shoe.images[0]} alt="Image Picture" title={shoe.name} className={styles.shoeImage}/>
            <p className={styles.shoeName}>{shoe.name}</p>
            <p className={styles.shoeCategory}>{`Category ${shoe.category}`}</p>
            <p className={styles.shoePrice}>{shoe.price}</p>
            <button
                onClick={() => add()}
                className={styles.addToCart}
            >
                <FaCartPlus /> Add To Card
            </button>
        </div>
    );
}
