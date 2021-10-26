import React from 'react';
import { useNavigate } from 'react-router';
import { FaHome } from 'react-icons/fa'
import styles from './CheckOut.module.css';

export const CheckOut = () => {
    const navigaterTo = useNavigate();
    return (
        <div className={styles.container} data-testid="checkout-page">
            <p>Your Products Are on Their Way to Owner</p>
            <p>Thank You For Trading With Us</p>
            <button
                onClick={() => navigaterTo('/')}
                data-testid="back-to-home"
            >
                <FaHome /> Back to Home
            </button>
        </div>
    )
}
