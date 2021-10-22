import React from 'react';

import { HeroImage } from './HeroImage/HeroImage';
import { Collections } from './Collections/Collections';


export const HomePage = () => {
    return (
        <div data-testid="home-page">
            <HeroImage />
            <Collections />
        </div>
    )
}