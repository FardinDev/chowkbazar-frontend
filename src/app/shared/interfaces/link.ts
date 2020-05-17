export interface Link {
    label: string;
    url: string;
    external?: boolean;
    queryparam?: boolean;
    target?: '_self'|'_blank';
}
