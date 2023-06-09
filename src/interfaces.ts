import type { LoyaltyUser } from "./enums";

export interface Review {
    name: string;
    stars: number;
    loyaltyUser: LoyaltyUser;
    date: string;
}

export interface Property {
    image: string;
    title: string;
    price: number;
    location: {
        firstLine: string;
        city: string;
        code: number | string;
        country: string;
    };
    contact: [ number, string ];
    isAvailable: boolean;
}