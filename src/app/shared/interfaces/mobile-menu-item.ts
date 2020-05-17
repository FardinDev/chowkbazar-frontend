export interface MobileMenuItemBase {
    label: string;
    data?: any;
    children?: MobileMenuItem[];
}

export interface MobileMenuItemLink extends MobileMenuItemBase {
    type: string;
    queryparam?: boolean;
    url: string;
}

export interface MobileMenuItemButton extends MobileMenuItemBase {
    type: 'button';
}

export type MobileMenuItem = MobileMenuItemLink | MobileMenuItemButton;
