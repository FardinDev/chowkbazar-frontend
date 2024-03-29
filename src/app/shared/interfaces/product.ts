import { Brand } from './brand';
import { Category } from './category';
import { CustomFields } from './custom-fields';

export interface ProductFeature {
    name: string;
    value: string;
}

export interface ProductFeaturesSection {
    name: string;
    features: ProductFeature[];
}



export interface ProductAttributeValue {
    name: string;
    slug: string;
    customFields?: CustomFields;
}

export interface ProductAttribute {
    name: string;
    slug: string;
    featured: boolean;
    values: ProductAttributeValue[];
    customFields?: CustomFields;
}

export interface Product {
    id: number;
    slug: string;
    name: string;
    // price: number;
    price: number;
    start_price?: string;
    end_price?: string;
    minimum_orders?: string;
    compareAtPrice: number|null;
    images: string[];
    badges: string[];
    rating: number;
    reviews: number;
    availability: string;
    brand: Brand|null;
    categories: Category[];
    attributes: ProductAttribute[];
    tags?: string[];
    customFields: CustomFields;
    views?: number;
}


export interface SearchProduct{
    name: string;
    slug: string;
    image: string;
    minimum_orders: string;
    start_price: string;
    end_price: string;
    views: number;
}