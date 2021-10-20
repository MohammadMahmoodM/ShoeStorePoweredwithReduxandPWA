import React from 'react';

import { HeroImage } from './HeroImage';
import { Collections } from './Collections';


export const HomePage = () => {
    return (
        <div data-testid="home-page">
            <HeroImage />
            <Collections />
        </div>
    )
}