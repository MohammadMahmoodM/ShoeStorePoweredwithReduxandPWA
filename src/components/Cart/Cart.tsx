// import React, {useState, useEffect} from 'react';
// import { RootState } from '../../store/rootReducer';
// import { CartItem } from './CartItem';
// import { batchRemove } from './CartSlice';
// import { useSelector, useDispatch } from 'react-redux';
// import { useNavigate } from 'react-router';

// export const Cart = ({}) => {
//     const cartItems : CartItem[] = useSelector((state: RootState) =>(state.cart));
//     const dispatch = useDispatch();
//     const navigateTo = useNavigate();
//     const [numPreviousItems, setNumPreviousItems] = useState(cartItems.length);
    
//     useEffect(() => {
//         if (cartItems.length < numPreviousItems){
//             setNumPreviousItems(cartItems.length);
//         }
//         else if (cartItems.length > numPreviousItems){
//             setNumPreviousItems(cartItems.length);
//         }
//     }, [cartItems.length, numPreviousItems]) // [cartItems.length, numPreviousItems] provided because input was needed to provide
    
//     const grandTotal = cartItems.length === 0 ? 0 :
//     cartItems.map(item => item.includedInSum ? item.price * item.quantity : 0).reduce((itemPrice, accPrice) => accPrice + itemPrice);
    
//     const checkoutHandler = () => {
//         const checkoutShoesIds = 
//             cartItems.filter(item => item.includedInSum).map(item => item.id);
//         dispatch( batchRemove( {ids: checkoutShoesIds}) );
//         navigateTo('/cart/checkout');
//     }
//     return (
//         <div>
//             Hello from Card
//             <p>{`you have ${cartItems.length} items in your cart.`}</p>
//             {console.log(cartItems.length)}
            
//             {cartItems.map(item => <CartItem item={item} key={item.id}/>)}
//             <span>Grand Total</span>
//             <span>{`${grandTotal}`}</span>
//         </div>
//     )
// }


import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { Notification } from '../Notification/Notification';
import { batchRemove } from './CartSlice';
import { RootState } from '../../store/rootReducer';
import { CartItem } from './CartItem';

export const Cart: React.FC<{}> = () => {
    const cartItems: CartItem[] = useSelector((state: RootState) => state.cart);
    const dispatch = useDispatch();
    const navigateTo = useNavigate();
    const [ numPreviousItems, setNumPreviousItems ] = useState(cartItems.length);
    const [ showNotification, setShowNotification ] = useState(false);

    useEffect(() => {
        if (cartItems.length < numPreviousItems) {
            setShowNotification(true)
            setTimeout(() => setShowNotification(false), 4000);
            setNumPreviousItems(cartItems.length);
        }
        else if (cartItems.length > numPreviousItems) {
            setNumPreviousItems(cartItems.length);
        }
    }, [cartItems.length, numPreviousItems]);
    
    const grandTotal = cartItems.length === 0 ? 0 :
        cartItems
            .map(item => item.includedInSum ? item.price * item.quantity : 0)
            .reduce((itemPrice, accPrice) => accPrice + itemPrice);

    const checkoutHandler = () => {
        const checkoutShoesIds = 
            cartItems
                .filter( item => item.includedInSum )
                .map( item => item.id );
        dispatch( batchRemove({ ids: checkoutShoesIds }) );
        navigateTo('/cart/checkout');
    }
    return (
        <div>
            <h2>Shopping Cart</h2>
            <div>
                <p>{`You have ${cartItems.length} items in your cart.`}</p>
                {cartItems.map(item => <CartItem item={item} key={item.id} />)}
                <p>
                    <span>Grand Total</span>
                    <span>{`$${grandTotal}`}</span>
                </p>
                <div>
                    <button
                        disabled={grandTotal <= 0}
                        onClick={() => checkoutHandler()}
                        title="Proceed to checkout"
                    >
                        Checkout
                    </button>
                </div>
            </div>
            {showNotification
                ? <Notification type="REMOVE" />
                : null
            }
        </div>
    )
}
