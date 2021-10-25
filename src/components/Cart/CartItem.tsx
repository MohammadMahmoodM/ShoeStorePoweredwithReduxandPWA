// import React from 'react';
// import { useDispatch } from 'react-redux';
// import { useNavigate } from 'react-router';
// import { toggleInclude } from './CartSlice';

// interface Props {
//     item: CartItem;   // cart Item are comming as type script from react-app-env.d
// }


// export const CartItem = ({item}: Props) => {
//     const {id, name, price, category, image, quantity, includedInSum} = item;
//     const dispatch = useDispatch();
//     const navigateTo = useNavigate();
//     const categoryId = category === "Men's Shoes" ? 'Men' : category === "Women's Shoes" ? "Women's Shoes" : "Kid's Shows"
//     return (
//         <div>
//             <input
//             type="checkbox"
//             title="Included in grand Total"
//             checked={includedInSum}
//             onChange={()=> dispatch( toggleInclude ({id}) )}
//             />
//             <img 
//             src={image}
//             alt="Shoe"
//             title={name}
//             onClick={()=> navigateTo( `/${categoryId}/${id}` )}
//             />
//         </div>
//     );
// }

import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { toggleInclude, decrementQuantity, incrementQuantity, removeFromCart } from './CartSlice';
import { RiDeleteBin2Fill } from 'react-icons/ri';

interface Props {
    item: CartItem;
}

export const CartItem: React.FC<Props> = ({ 
    item: { id, name, price, category, image, quantity, includedInSum }
}) => {
    const dispatch = useDispatch();
    const navigateTo = useNavigate();
    const categoryId = category === "Men's Shoes" ? 'men' : category === "Woman's Shoes" ? 'women' : 'kids';
    return (
        <div>
            <div>
                <div>
                    <input
                        type="checkbox"
                        title="Include in grand total."
                        checked={includedInSum}
                        onChange={() => dispatch( toggleInclude({ id }) )}
                    />
                    <img
                        src={image}
                        alt="shoe"
                        title={name}
                        onClick={() => navigateTo(`/${categoryId}/${id}`)}
                    />
                </div>
            </div>
            <div>
                <div 
                    onClick={() => navigateTo(`/${categoryId}/${id}`)}
                >
                    <p>{name}</p>
                    <p>{category}</p>
                </div>
                <div>
                    <p>Quantity</p>
                    <div>
                        <button
                            onClick={() => dispatch( decrementQuantity({ id }) )}
                            title="Decrement quantity"
                            data-testid="decrement-quantity"
                        >
                            -
                        </button>
                        <span>{quantity}</span>
                        <button
                            onClick={() => dispatch( incrementQuantity({ id }) )}
                            title="Increment quantity"
                            data-testid="increment-quantity"
                        >
                            +
                        </button>
                    </div>
                </div>
                <div>
                    <button 
                        onClick={() => dispatch( removeFromCart({ id }) )}
                        title="Remove from cart."
                        data-testid="delete-btn"
                    >
                        <RiDeleteBin2Fill />
                    </button>
                </div>
                <div>
                    <p>{`$${quantity*price}`}</p>
                    <p>{`$${price} x ${quantity}`}</p>
                </div>
            </div>
        </div>
    )
}
