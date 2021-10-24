import { configureStore } from '@reduxjs/toolkit';
import rootReducer, { RootState } from './rootReducer';

export const initialTestState: RootState = {   // mockingStore is not used for holding data in any way it's just being used for Testing actions on data
    products: {
        men: {
            "3f60de24-1815-4d88-a8dc-5ceda3f41bdc": {
                "name": "Air Jordan 1 Mid",
                "price": "$115",
                "category": "Men's Shoes",
                "description": "The Air Jordan 1 Mid Shoe is inspired by the first AJ1, offering OG fans a look at how far the Jordan brand has come since 1985.",
                "images": [
                    "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/i1-d2f41ddc-a08e-443a-8eb0-6960ebb4a408/air-jordan-1-mid-shoe-1zMCFJ.jpg"
                ]
            },
        },
        women: {
            "a86007e6-88d2-4915-a11d-14c9f6083c31": {
                "name": "Nike React Infinity Run Flyknit",
                "price": "$160",
                "category": "Women's Shoes",
                "description": "The Nike React Infinity Run Flyknit is designed to help reduce injury and keep you on the run. More foam and improved upper details provide a secure and cushioned feel. Refreshed colors bring the bright energy to your feet while you crush your miles. Lace up and feel the potential, mile after mile.",
                "images": [
                    "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/ccf7f85e-6ee1-40cc-9a40-db3932aed4d8/react-infinity-run-flyknit-womens-running-shoe-c54NMG.jpg",
                    "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/20031c5e-ac39-40d0-b600-16fcac6509f1/react-infinity-run-flyknit-womens-running-shoe-c54NMG.jpg",
                    "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/a2945fa2-24a7-4139-abad-1eb0762b75d3/react-infinity-run-flyknit-womens-running-shoe-c54NMG.jpg",
                    "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/009fa505-2c37-4f32-bdf5-5f3fa9d764dc/react-infinity-run-flyknit-womens-running-shoe-c54NMG.jpg",
                    "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/345fc4cc-30ad-4454-9248-a6a99befdccf/react-infinity-run-flyknit-womens-running-shoe-c54NMG.jpg",
                    "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/dafcf3a8-b8c4-4496-9462-043f4abc96d9/react-infinity-run-flyknit-womens-running-shoe-c54NMG.jpg",
                    "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/e06f98c9-8b62-447a-bf1f-0edc7e2c7242/react-infinity-run-flyknit-womens-running-shoe-c54NMG.jpg",
                    "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/cefa7ba1-6909-4055-b498-eddb1afc8209/react-infinity-run-flyknit-womens-running-shoe-c54NMG.jpg"
                ]
            },
        },
        kids: {
            "076890ba-651c-435b-bb84-e0627b2ba76d": {
                "name": "Kyrie 6",
                "price": "$80",
                "category": "Kids’ Shoes",
                "description": "Kyrie's game is serious business, but you know he's having a blast. The Kyrie 6 for little kids has all the speedy, sporty style of the shoe he wears that's made to play every day.",
                "images": [
                    "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/d9bc1f59-4fc1-4563-8a64-cfacccfbd048/kyrie-6-little-kids-shoe-nkWtfT.jpg"
                ]
            },
        },
        shoesById: {
            "3f60de24-1815-4d88-a8dc-5ceda3f41bdc": {
                "name": "Air Jordan 1 Mid",
                "price": "$115",
                "category": "Men's Shoes",
                "description": "The Air Jordan 1 Mid Shoe is inspired by the first AJ1, offering OG fans a look at how far the Jordan brand has come since 1985.",
                "images": [
                    "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/i1-d2f41ddc-a08e-443a-8eb0-6960ebb4a408/air-jordan-1-mid-shoe-1zMCFJ.jpg"
                ]
            },
        },
    },

    cart: [
        {
            id: "3f60de24-1815-4d88-a8dc-5ceda3f41bdc",
            name: "Air Jordan 1 Mid",
            category: "Men's Shoes",
            price: 115,
            image: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/i1-d2f41ddc-a08e-443a-8eb0-6960ebb4a408/air-jordan-1-mid-shoe-1zMCFJ.jpg",
            quantity: 1,
            includedInSum: false,
        },
        {
            id: "d52fd362-1080-46b3-a43c-d64f7a6825ab",
            name: "Nike Air Zoom-Type",
            category: "Men's Shoes",
            price: 150,
            image: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/5c1e3a90-b2b7-479c-b567-3b50903cf9da/air-zoom-type-mens-shoe-PZR40V.jpg",
            quantity: 3,
            includedInSum: true,
        },

    ],

};

const createMockingStore = () => configureStore({
    reducer: rootReducer,
    preloadedState: initialTestState,
});

export default createMockingStore;