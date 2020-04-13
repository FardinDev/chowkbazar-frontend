import { MobileMenuItem } from '../app/shared/interfaces/mobile-menu-item';

export const mobileMenu: MobileMenuItem[] = [
    {type: 'link', label: 'Home', url: '/', children: []},
    {type: 'link', label: 'Shop', url: '/shop/catalog', children: []},
    {type: 'link', label: 'Source Product', url: '/source-products', children: []},

    {type: 'link', label: 'Categories', url: '/shop/catalog', children: [
        {type: 'link', label: 'Power Tools', url: '/shop/catalog', children: [
            {type: 'link', label: 'Engravers',           url: '/shop/catalog'},
            {type: 'link', label: 'Wrenches',            url: '/shop/catalog'},
            {type: 'link', label: 'Wall Chaser',         url: '/shop/catalog'},
            {type: 'link', label: 'Pneumatic Tools',     url: '/shop/catalog'}
        ]},
        {type: 'link', label: 'Machine Tools', url: '/shop/catalog', children: [
            {type: 'link', label: 'Thread Cutting',      url: '/shop/catalog'},
            {type: 'link', label: 'Chip Blowers',        url: '/shop/catalog'},
            {type: 'link', label: 'Sharpening Machines', url: '/shop/catalog'},
            {type: 'link', label: 'Pipe Cutters',        url: '/shop/catalog'},
            {type: 'link', label: 'Slotting machines',   url: '/shop/catalog'},
            {type: 'link', label: 'Lathes',              url: '/shop/catalog'}
        ]}
    ]},

    {type: 'link', label: 'Pages', url: '/site', children: [
        {type: 'link', label: 'About Us',             url: '/site/about-us'},
        {type: 'link', label: 'Contact Us',           url: '/site/contact-us'},
        {type: 'link', label: 'Terms And Conditions', url: '/site/terms'},
        {type: 'link', label: 'FAQ',                  url: '/site/faq'},
    ]},

];
