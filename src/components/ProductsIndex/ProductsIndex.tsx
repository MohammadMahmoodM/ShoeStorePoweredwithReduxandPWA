import React from 'react';
import { useParams } from 'react-router';
import { useSelector } from 'react-redux';

import { ProductCard } from './ProductCard';
import { RootState } from '../../store/rootReducer';

export const ProductsIndex = () => {
    const {category} = useParams();
    const ids = useSelector( (state: RootState) => Object.keys (
        category === 'men' ? state.products.men : 
        category === 'women' ? state.products.women :
        category === 'kids' ? state.products.kids : {}
    ) );

    const pageHeading = (
        category === 'men' ?
        "Men's Shows" : category === 'women' ?
        "Women's Shows" : category === 'kids' ?
        "Kid's Shows" : "Page Not Found"
    )
    return (
        <div>
            <h2>{pageHeading}</h2>
            <div>
                {ids && ids.map (id => ( <ProductCard  shoeId={id}/>) )}   
                {/* Produ-ctCard was needed shoeId still in not giving key={id} */}
            </div>
       </div>
    );
    }


// import React from 'react';
// import { useParams } from 'react-router-dom';
// import { useSelector } from 'react-redux';

// import { ProductCard } from './ProductCard';
// import { RootState } from '../../store/rootReducer';

// export const ProductsIndex = () => {
//     const { category } = useParams();   // Giving value from react-router which outlet is providing
//     const ids = useSelector((state: RootState) => Object.keys(
//         category === 'men' ? state.products.men :
//         category === 'women' ? state.products.women :
//         category === 'kids' ? state.products.kids : {}   // {} mean is any other url then write it but we will design error page for that
//     ));

//     const pageHeading = (
//         category === 'men'
//             ? "Men's Shoes" 
//             : category === "women"
//                 ? "Women's Shoes"
//                 : category === 'kids'
//                     ? "Kids' Shoes"
//                     : "Page not found"
//     );
//     return (
//         <div>
//             <h2>{pageHeading}</h2>
//             <div>
//                 {ids && ids.map( id => (
//                     <ProductCard shoeId={id} key={id} />
//                 ))}
//             </div>
//         </div>
//     )
// }
