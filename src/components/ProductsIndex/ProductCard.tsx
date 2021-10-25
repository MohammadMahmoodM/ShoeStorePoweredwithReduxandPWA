import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { FaCartPlus } from 'react-icons/fa';
import { RootState } from '../../store/rootReducer';
import { addToCart } from '../Cart/CartSlice';

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
        <div>
            <img src={shoe.images[0]} alt="Image Picture" title={shoe.name} />
            <p>{shoe.name}</p>
            <p>{`Category ${shoe.category}`}</p>
            <p>{shoe.price}</p>
            <button
                onClick={() => add()}
            >
                <FaCartPlus /> Add To Card
            </button>
        </div>
    );
}
