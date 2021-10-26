import React from 'react';
import {FaGithub} from 'react-icons/fa';
import styles from './Footer.module.css'

export const Footer = () => {
    return (
        <div className={styles.container}>
            <p>Demo Progressive Web App Using Redux Toolkit and Test Automation</p>
            <p>By</p>
            <p>Mohammad Mahmood</p>
            <a
                className={styles.git}
                href="https://github.com/mahmoodlegend/ShoeStorePoweredwithReduxandPWA"
                target="_blank"
                rel="noopener noreferrer"
                title="Source Code"
                data-testid="git-link"
            >
                <FaGithub />
            </a>
        </div>
    )
}
