import React from 'react';

import styles from './HeroImage.module.css';
import shoeImg from '../../images/feature-image-shoe.png';

export const HeroImage = () => {
    
    return (
        <div className={styles.heroImage}>
            <h2 className={styles.greeting}>Welcome to the Shoes Land</h2>
            <img 
                src={shoeImg}
                className={styles.heroShoe}
               
                alt=""
                title=""
                data-testid="featured-shoe"
            />
        </div>
    )
}
