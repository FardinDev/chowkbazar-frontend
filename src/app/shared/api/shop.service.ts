
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../interfaces/category';
import { NavigationLink } from '../interfaces/navigation-link';
import { Slider } from '../interfaces/slider';
import { HttpClient } from '@angular/common/http';
import { Brand } from '../interfaces/brand';
import { Product, SearchProduct } from '../interfaces/product';
import { ProductsList } from '../interfaces/list';
import { SerializedFilterValues } from '../interfaces/filter';
import {
    getBestsellers,
    getFeatured,
    getLatestProducts,
    getProduct,
    getRelatedProducts,
    getSpecialOffers,
    getTopRated,
    getShopCategoriesBySlugs,
    getShopCategoriesTree,
    getShopCategory,
    getBrands,
    getProductsList,
} from '../../../fake-server';
import { json } from 'express';

export interface ListOptions {
    page?: number;
    limit?: number;
    sort?: string;
    tag?: string;
    filterValues?: SerializedFilterValues;
}

export interface Description {
    text: any;
}
export interface queryObj {
    status: string;
}
export interface SourceProductObj {
    status: string;
}
@Injectable({
    providedIn: 'root'
})
export class ShopService {
    constructor(
        private http: HttpClient,
    ) { }

    // url = 'http://localhost:8000';
    url = 'https://www.chowkbazarbd.com/v2';
    defaultPage = 1;
    /**
     * Returns category object by slug.
     *
     * @param slug - Unique human-readable category identifier.
     */

    getDepartments(): Observable<NavigationLink[]> {
        return this.http.get<NavigationLink[]>(this.url+`/api/categories`);
    }

    getSliders(): Observable<Slider[]>{
        return this.http.get<Slider[]>(this.url+`/api/sliders`);
    }

    storeQuery(id: number, name: string, phoneOrEmail: string, query: string): Observable<queryObj>{
   
        const params: {[param: string]: any} = {};
        params.product_id = id; 
        params.name = name; 
        params.phone_number = phoneOrEmail; 
        params.query = query; 

        return this.http.post<queryObj>(this.url+`/api/store-query`, {params});
    }

    storeSourceProduct(formData: any[]): Observable<SourceProductObj>{
   
        return this.http.post<SourceProductObj>(this.url+`/api/store-source-product`, formData);

    }

    getCategory(slug: string): Observable<Category> {
        /**
         * This is what your API endpoint might look like:
         *
         * https://example.com/api/shop/categories/power-tools.json
         *
         * where:
         * - power-tools = slug
         */
        // return this.http.get<Category>(`https://example.com/api/shop/categories/${slug}.json`);

        // This is for demonstration purposes only. Remove it and use the code above.
        // console.log('category');
        // getShopCategory(slug).subscribe(val => {
        //     console.log(val);
        // });
        // console.log('====================================');

        // return this.http.get<Category>(this.url+`/api/category-by-slug/${slug}`);
        return getShopCategory(slug);
    }

    /**
     * Returns a category tree.
     *
     * @param parent - If a parent is specified then its descendants will be returned.
     * @param depth  - Maximum depth of category tree.
     */
    getCategories(parent: Partial<Category> = null, depth: number = 0): Observable<Category[]> {
        /**
         * This is what your API endpoint might look like:
         *
         * https://example.com/api/shop/categories.json?parent=latest-news&depth=1
         *
         * where:
         * - parent = parent.slug
         * - depth  = depth
         */
        // const params: {[param: string]: string} = {
        //     parent: parent.slug,
        //     depth: depth.toString(),
        // };
        //
        // return this.http.get<Category[]>('https://example.com/api/shop/categories.json', {params});

        // This is for demonstration purposes only. Remove it and use the code above.
        return getShopCategoriesTree(parent ? parent.slug : null, depth);
    }

    /**
     * Returns an array of the specified categories.
     *
     * @param slugs - Array of slugs.
     * @param depth - Maximum depth of category tree.
     */
    getCategoriesBySlug(slugs: string[] = null, depth: number = 0): Observable<Category[]> {
        /**
         * This is what your API endpoint might look like:
         *
         * https://example.com/api/shop/categories.json?slugs=power-tools,measurement&depth=1
         *
         * where:
         * - slugs = slugs.join(',')
         * - depth = depth
         */
        // const params: {[param: string]: string} = {
        //     slugs: slugs.join(','),
        //     depth: depth.toString(),
        // };
        //

        return this.http.get<Category[]>(this.url+`/api/category-by-slugs`);

        // This is for demonstration purposes only. Remove it and use the code above.
        return getShopCategoriesBySlugs(slugs, depth);
    }

    /**
     * Returns paginated products list.
     * If categorySlug is null then a list of all products should be returned.
     *
     * @param categorySlug    - Unique human-readable category identifier.
     * @param options         - Options.
     * @param options.page    - Page number (optional).
     * @param options.limit   - Maximum number of items returned at one time (optional).
     * @param options.sort    - The algorithm by which the list should be sorted (optional).
     * @param options.filters - An object whose keys are filter slugs and values ​​are filter values (optional).
     */
    getProductsList(categorySlug: string|null, options: any|ListOptions): Observable<ProductsList> {
        /**
         * This is what your API endpoint might look like:
         *
         * https://example.com/api/products.json?category=screwdriwers&page=2&limit=12&sort=name_desc&filter_price=500-1000
         *
         * where:
         * - category     = categorySlug
         * - page         = options.page
         * - limit        = options.limit
         * - sort         = options.sort
         * - filter_price = options.filters.price
         */
        const params: {[param: string]: string} = {};
        
        if (categorySlug) {
            params.category = categorySlug;
        }
        if ('page' in options) {
            params.page = options.page.toString();
            this.defaultPage = options.page;
        }
        if ('limit' in options) {
            params.limit = options.limit.toString();
        }
        if ('sort' in options) {
            params.sort = options.sort;
        }
        if ('tag' in options) {
            params.tag = options.tag;
        }
        if ('filterValues' in options) {
            Object.keys(options.filterValues).forEach(slug => params[`filter_${slug}`] = options.filterValues[slug]);
        }
        
        // console.log(options);
        // console.log('====================================');
        // this.http.post(this.url+`/api/get-product-list?page=`+this.defaultPage, {params}).subscribe(val => {
        //     console.log(val);
        // });
        // console.log('====================================');
        //
        // return this.http.get<ProductsList>('https://example.com/api/products.json', {params});

        // This is for demonstration purposes only. Remove it and use the code above.

        return this.http.post<ProductsList>(this.url+`/api/get-product-list?page=`+this.defaultPage, {params});
        // return getProductsList(categorySlug, options);
    }

    getProduct(productSlug: string): Observable<Product> {
        /**
         * This is what your API endpoint might look like:
         *
         * https://example.com/api/products/electric-planer-brandix-kl370090g-300-watts.json
         *
         * where:
         * - electric-planer-brandix-kl370090g-300-watts = productSlug
         */
        // return this.http.get<Product>(`https://example.com/api/products/${productSlug}.json`);

        // This is for demonstration purposes only. Remove it and use the code above.
        // return getProduct(productSlug);
        return this.http.get<Product>(this.url+`/api/get-product/${productSlug}`);

    }

    searchProducts(query: string): Observable<SearchProduct[]> {

        const param = { 'search' : query };

        return this.http.post<SearchProduct[]>(this.url+`/api/search-product`, param);

    }

    getProductDetails(productSlug: string): Observable<Description> {
        /**
         * This is what your API endpoint might look like:
         *
         * https://example.com/api/products/electric-planer-brandix-kl370090g-300-watts.json
         *
         * where:
         * - electric-planer-brandix-kl370090g-300-watts = productSlug
         */
        // return this.http.get<Product>(`https://example.com/api/products/${productSlug}.json`);

        // This is for demonstration purposes only. Remove it and use the code above.
        // return getProduct(productSlug);
        return this.http.get<Description>(this.url+`/api/get-product-description/`+productSlug);

    }

    /**
     * Returns popular brands.
     */
    getPopularBrands(): Observable<Brand[]> {
        /**
         * This is what your API endpoint might look like:
         *
         * https://example.com/api/shop/brands/popular.json
         */
        // return this.http.get<Brand[]>('https://example.com/api/shop/brands/popular.json');

        // This is for demonstration purposes only. Remove it and use the code above.
        return getBrands();
    }

    getMostViewed(limit: number = null): Observable<Product[]> {
        /**
         * This is what your API endpoint might look like:
         *
         * https://example.com/api/shop/products/bestsellers.json?limit=3
         *
         * where:
         * - limit = limit
         */
        const params: {[param: string]: string} = {};
        
        if (limit) {
            params.limit = limit.toString();
        }
        //
        // return this.http.get<Product[]>('https://example.com/api/shop/products/bestsellers.json', {params});

        // This is for demonstration purposes only. Remove it and use the code above.
        // return getBestsellers(limit);
        return this.http.get<Product[]>(this.url+`/api/most-viewed`, {params});
    }

    getBestsellers(limit: number = null): Observable<Product[]> {
        /**
         * This is what your API endpoint might look like:
         *
         * https://example.com/api/shop/products/bestsellers.json?limit=3
         *
         * where:
         * - limit = limit
         */
        const params: {[param: string]: string} = {};
        
        if (limit) {
            params.limit = limit.toString();
        }
        //
        // return this.http.get<Product[]>('https://example.com/api/shop/products/bestsellers.json', {params});

        // This is for demonstration purposes only. Remove it and use the code above.
        // return getBestsellers(limit);
        return this.http.get<Product[]>(this.url+`/api/most-viewed`, {params});
    }


    getTopRated(limit: number = null): Observable<Product[]> {
        /**
         * This is what your API endpoint might look like:
         *
         * https://example.com/api/shop/products/top-rated.json?limit=3
         *
         * where:
         * - limit = limit
         */
        // const params: {[param: string]: string} = {};
        //
        // if (limit) {
        //     params.limit = limit.toString();
        // }
        //
        // return this.http.get<Product[]>('https://example.com/api/shop/products/top-rated.json', {params});

        // This is for demonstration purposes only. Remove it and use the code above.
        return getTopRated(limit);
    }

    getSpecialOffers(limit: number = null): Observable<Product[]> {
        /**
         * This is what your API endpoint might look like:
         *
         * https://example.com/api/shop/products/special-offers.json?limit=3
         *
         * where:
         * - limit = limit
         */
        // const params: {[param: string]: string} = {};
        //
        // if (limit) {
        //     params.limit = limit.toString();
        // }
        //
        // return this.http.get<Product[]>('https://example.com/api/shop/products/special-offers.json', {params});

        // This is for demonstration purposes only. Remove it and use the code above.
        return getSpecialOffers(limit);
    }

    getFeaturedProducts(categorySlug: string = null, limit: number = null): Observable<Product[]> {
        /**
         * This is what your API endpoint might look like:
         *
         * https://example.com/api/shop/products/featured.json?category=screwdrivers&limit=3
         *
         * where:
         * - category = categorySlug
         * - limit    = limit
         */
        const params: {[param: string]: string} = {};
        
        if (categorySlug) {
            params.category = categorySlug;
        }
        if (limit) {
            params.limit = limit.toString();
        }
        //
        // return this.http.get<Product[]>('https://example.com/api/shop/products/featured.json', {params});

        // This is for demonstration purposes only. Remove it and use the code above.
        // return getFeatured(categorySlug, limit);
        return this.http.get<Product[]>(this.url+`/api/featured`, {params});

    }

    getLatestProducts(categorySlug: string = null, limit: number = null): Observable<Product[]> {
        /**
         * This is what your API endpoint might look like:
         *
         * https://example.com/api/shop/products/latest.json?category=screwdrivers&limit=3
         *
         * where:
         * - category = categorySlug
         * - limit    = limit
         */
        const params: {[param: string]: string} = {};
        
        if (categorySlug) {
            params.category = categorySlug;
        }
        if (limit) {
            params.limit = limit.toString();
        }
        //
        // return this.http.get<Product[]>('https://example.com/api/shop/products/latest.json', {params});
        return this.http.get<Product[]>(this.url+`/api/new-arrival`, {params});
        
        // This is for demonstration purposes only. Remove it and use the code above.
        // return getLatestProducts(categorySlug, limit);
    }

    getRelatedProducts(product: Partial<Product>): Observable<Product[]> {
        /**
         * This is what your API endpoint might look like:
         *
         * https://example.com/api/shop/products/related.json?for=water-tap
         *
         * where:
         * - for = product.slug
         */
        const params: {[param: string]: string} = {
                for: product.slug,
                limit: '12',
            };
            //
            // return this.http.get<Product[]>('https://example.com/api/shop/products/related.json', {params});
            return this.http.get<Product[]>(this.url+`/api/get-related-products`, {params});

        // This is for demonstration purposes only. Remove it and use the code above.
        // return getRelatedProducts(product);
    }
}
