import { CategoryDef } from '../interfaces/category-def';
import { Category } from '../../app/shared/interfaces/category';
import { Observable, of, throwError } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

let lastCategoryId = 0;

const shopCategoriesDef: CategoryDef[] = [
    {
        "name": "Apparel, Textiles & Accessories",
        "slug": "apparel-textiles-and-accessories",
        "image": "http://localhost:8000/storage/product-categories/March2020/1xEvdJsjHMlTOm1Lmd2S-cropped.webp",
        "items": 0,
        "children": [
            {
                "name": "Apparel",
                "slug": "apparel",
                "image": "",
                "items": 0,
                "children": [
                    {
                        "name": "Baby Clothing",
                        "slug": "baby-clothing",
                        "image": "",
                        "items": 0,
                        "children": []
                    },
                    {
                        "name": "Garment Accessories & Tag Guns",
                        "slug": "garment-accessories-and-tag-guns",
                        "image": "",
                        "items": 0,
                        "children": []
                    },
                    {
                        "name": "Maternity Clothing",
                        "slug": "maternity-clothing",
                        "image": "",
                        "items": 0,
                        "children": []
                    },
                    {
                        "name": "Men's Clothing",
                        "slug": "men's-clothing",
                        "image": "",
                        "items": 0,
                        "children": []
                    }
                ]
            },
            {
                "name": "Bedding Set",
                "slug": "bedding-set",
                "image": "",
                "items": 0,
                "children": []
            },
            {
                "name": "Fabric",
                "slug": "fabric",
                "image": "",
                "items": 0,
                "children": []
            },
            {
                "name": "Fashion Accessories",
                "slug": "fashion-accessories",
                "image": "",
                "items": 0,
                "children": [
                    {
                        "name": "Belt Buckles",
                        "slug": "belt-buckles",
                        "image": "",
                        "items": 0,
                        "children": []
                    },
                    {
                        "name": "Belts",
                        "slug": "belts",
                        "image": "",
                        "items": 0,
                        "children": []
                    },
                    {
                        "name": "Hats & Caps",
                        "slug": "hats-and-caps",
                        "image": "",
                        "items": 0,
                        "children": []
                    },
                    {
                        "name": "Jewelry",
                        "slug": "jewelry",
                        "image": "",
                        "items": 0,
                        "children": []
                    }
                ]
            }
        ]
    },
    {
        "name": "Auto & Transportation",
        "slug": "auto-and-transportation",
        "image": "http://localhost:8000/storage/product-categories/March2020/P2gK6xJHlmfS051JCfU1-cropped.jpg",
        "items": 0,
        "children": [
            {
                "name": "Car Accessories",
                "slug": "car-accessories",
                "image": "",
                "items": 0,
                "children": []
            },
            {
                "name": "Wheels, Tires & Rims",
                "slug": "wheels-tires-and-rims",
                "image": "",
                "items": 0,
                "children": []
            }
        ]
    },
    {
        "name": "Bags, Shoes & Accessories",
        "slug": "bags-shoes-and-accessories",
        "image": "http://localhost:8000/storage/product-categories/March2020/gRPHN42fSc9F5eVto426-cropped.png",
        "items": 0,
        "children": [
            {
                "name": "Luggage & Cases",
                "slug": "luggage-and-cases",
                "image": "",
                "items": 0,
                "children": [
                    {
                        "name": "Backpacks & Travel Bags",
                        "slug": "backpacks-and-travel-bags",
                        "image": "",
                        "items": 0,
                        "children": []
                    },
                    {
                        "name": "Bag & Luggage Making Materials",
                        "slug": "bag-and-luggage-making-materials",
                        "image": "",
                        "items": 0,
                        "children": []
                    },
                    {
                        "name": "Cosmetics Bags & Cases",
                        "slug": "cosmetics-bags-and-cases",
                        "image": "",
                        "items": 0,
                        "children": []
                    },
                    {
                        "name": "DSLR Bags",
                        "slug": "dslr-bags",
                        "image": "",
                        "items": 0,
                        "children": []
                    }
                ]
            },
            {
                "name": "Shoes",
                "slug": "shoes",
                "image": "",
                "items": 3,
                "children": [
                    {
                        "name": "Kids Shoes",
                        "slug": "kids-shoes",
                        "image": "",
                        "items": 0,
                        "children": []
                    },
                    {
                        "name": "Men's Shoes",
                        "slug": "men's-shoes",
                        "image": "",
                        "items": 0,
                        "children": []
                    },
                    {
                        "name": "Shoe Materials & Accessories",
                        "slug": "shoe-materials-and-accessories",
                        "image": "",
                        "items": 0,
                        "children": []
                    },
                    {
                        "name": "Sports Shoes",
                        "slug": "sports-shoes",
                        "image": "",
                        "items": 0,
                        "children": []
                    }
                ]
            }
        ]
    },
    {
        "name": "Electronics & Engineering",
        "slug": "electronics-and-engineering",
        "image": "http://localhost:8000/storage/product-categories/March2020/o5QDLZAsd9X21Rl18Lw6-cropped.png",
        "items": 1,
        "children": [
            {
                "name": "Consumer Electronics",
                "slug": "consumer-electronics",
                "image": "",
                "items": 8,
                "children": [
                    {
                        "name": "Accessories & Parts",
                        "slug": "accessories-and-parts",
                        "image": "",
                        "items": 0,
                        "children": []
                    },
                    {
                        "name": "Car Accessories",
                        "slug": "car-accessories",
                        "image": "",
                        "items": 0,
                        "children": []
                    },
                    {
                        "name": "Digital Camera, Photo & Accessories",
                        "slug": "digital-camera-photo-and-accessories",
                        "image": "",
                        "items": 0,
                        "children": []
                    },
                    {
                        "name": "E-Cigarettes",
                        "slug": "e-cigarettes",
                        "image": "",
                        "items": 0,
                        "children": []
                    }
                ]
            },
            {
                "name": "Home Appliance",
                "slug": "home-appliance",
                "image": "",
                "items": 7,
                "children": [
                    {
                        "name": "Blenders",
                        "slug": "blenders",
                        "image": "",
                        "items": 0,
                        "children": []
                    },
                    {
                        "name": "Cooking Appliances",
                        "slug": "cooking-appliances",
                        "image": "",
                        "items": 0,
                        "children": []
                    },
                    {
                        "name": "Fans & Air Conditioners",
                        "slug": "fans-and-air-conditioners",
                        "image": "",
                        "items": 0,
                        "children": []
                    },
                    {
                        "name": "Kitchen Appliances",
                        "slug": "kitchen-appliances",
                        "image": "",
                        "items": 0,
                        "children": []
                    }
                ]
            },
            {
                "name": "Security & Protection",
                "slug": "security-and-protection",
                "image": "",
                "items": 4,
                "children": [
                    {
                        "name": "Access Control Systems & Products",
                        "slug": "access-control-systems-and-products",
                        "image": "",
                        "items": 0,
                        "children": []
                    },
                    {
                        "name": "CCTV Products",
                        "slug": "cctv-products",
                        "image": "",
                        "items": 0,
                        "children": []
                    },
                    {
                        "name": "Firefighting Supplies & Fire Alarms",
                        "slug": "firefighting-supplies-and-fire-alarms",
                        "image": "",
                        "items": 0,
                        "children": []
                    },
                    {
                        "name": "Locks & Keys, Safes",
                        "slug": "locks-and-keys-safes",
                        "image": "",
                        "items": 0,
                        "children": []
                    }
                ]
            },
            {
                "name": "Smart Gadgets",
                "slug": "smart-gadgets",
                "image": "",
                "items": 0,
                "children": []
            }
        ]
    },
    {
        "name": "Electrical Equipments",
        "slug": "electrical-equipments",
        "image": "http://localhost:8000/storage/product-categories/March2020/mnAAKiVkYAe9OUpg1wD2-cropped.webp",
        "items": 0,
        "children": [
            {
                "name": "Electrical Instruments",
                "slug": "electrical-instruments",
                "image": "",
                "items": 0,
                "children": []
            },
            {
                "name": "Electrical Supplies",
                "slug": "electrical-supplies",
                "image": "",
                "items": 0,
                "children": []
            },
            {
                "name": "Generators",
                "slug": "generators",
                "image": "",
                "items": 0,
                "children": []
            },
            {
                "name": "Solar Cell & Solar Panel",
                "slug": "solar-cell-and-solar-panel",
                "image": "",
                "items": 0,
                "children": []
            }
        ]
    },
    {
        "name": "Gifts, Sports & Toys",
        "slug": "gifts-sports-and-toys",
        "image": "",
        "items": 0,
        "children": [
            {
                "name": "Promotional/Corporate Gift Sets",
                "slug": "promotionalcorporate-gift-sets",
                "image": "",
                "items": 0,
                "children": []
            },
            {
                "name": "Sports & Entertainment",
                "slug": "sports-and-entertainment",
                "image": "",
                "items": 4,
                "children": [
                    {
                        "name": "Camping & Hiking",
                        "slug": "camping-and-hiking",
                        "image": "",
                        "items": 0,
                        "children": []
                    },
                    {
                        "name": "Fitness & Body Building",
                        "slug": "fitness-and-body-building",
                        "image": "",
                        "items": 0,
                        "children": []
                    },
                    {
                        "name": "Gym Equipment",
                        "slug": "gym-equipment",
                        "image": "",
                        "items": 0,
                        "children": []
                    },
                    {
                        "name": "Musical Instrument",
                        "slug": "musical-instrument",
                        "image": "",
                        "items": 0,
                        "children": []
                    }
                ]
            }
        ]
    },
    {
        "name": "Health & Beauty",
        "slug": "health-and-beauty",
        "image": "",
        "items": 4,
        "children": [
            {
                "name": "Cosmetics and Makeup",
                "slug": "cosmetics-and-makeup",
                "image": "",
                "items": 0,
                "children": []
            },
            {
                "name": "Hair Care",
                "slug": "hair-care",
                "image": "",
                "items": 0,
                "children": []
            },
            {
                "name": "Massage Products",
                "slug": "massage-products",
                "image": "",
                "items": 0,
                "children": []
            },
            {
                "name": "Shaving kits",
                "slug": "shaving-kits",
                "image": "",
                "items": 0,
                "children": []
            }
        ]
    },
    {
        "name": "Home, Lights & Construction",
        "slug": "home-lights-and-construction",
        "image": "http://localhost:8000/storage/product-categories/March2020/6014b50llgRen3Mo3A6H-cropped.png",
        "items": 3,
        "children": [
            {
                "name": "Construction & Real Estate",
                "slug": "construction-and-real-estate",
                "image": "",
                "items": 6,
                "children": [
                    {
                        "name": "Bathroom",
                        "slug": "bathroom",
                        "image": "",
                        "items": 0,
                        "children": []
                    },
                    {
                        "name": "Boards & Ceilings",
                        "slug": "boards-and-ceilings",
                        "image": "",
                        "items": 0,
                        "children": []
                    },
                    {
                        "name": "Countertops,Vanity Tops & Table Tops",
                        "slug": "countertopsvanity-tops-and-table-tops",
                        "image": "",
                        "items": 0,
                        "children": []
                    },
                    {
                        "name": "Door & Window Accessories",
                        "slug": "door-and-window-accessories",
                        "image": "",
                        "items": 0,
                        "children": []
                    }
                ]
            },
            {
                "name": "Home & Garden",
                "slug": "home-and-garden",
                "image": "",
                "items": 0,
                "children": []
            },
            {
                "name": "Lights & Lighting",
                "slug": "lights-and-lighting",
                "image": "",
                "items": 5,
                "children": [
                    {
                        "name": "Ceiling Lights",
                        "slug": "ceiling-lights",
                        "image": "",
                        "items": 0,
                        "children": []
                    },
                    {
                        "name": "Energy Saving Light & Fluorescent",
                        "slug": "energy-saving-light-and-fluorescent",
                        "image": "",
                        "items": 0,
                        "children": []
                    },
                    {
                        "name": "Indoor Lighting",
                        "slug": "indoor-lighting",
                        "image": "",
                        "items": 0,
                        "children": []
                    },
                    {
                        "name": "LED Outdoor Lighting",
                        "slug": "led-outdoor-lighting",
                        "image": "",
                        "items": 0,
                        "children": []
                    }
                ]
            }
        ]
    },
    {
        "name": "Furniture",
        "slug": "furniture",
        "image": "http://localhost:8000/storage/product-categories/March2020/mkKN3EoV6i1zkZBztrKx-cropped.png",
        "items": 5,
        "children": [
            {
                "name": "Bamboo Furniture",
                "slug": "bamboo-furniture",
                "image": "",
                "items": 0,
                "children": []
            },
            {
                "name": "Furniture Parts",
                "slug": "furniture-parts",
                "image": "",
                "items": 0,
                "children": []
            },
            {
                "name": "Home Furniture",
                "slug": "home-furniture",
                "image": "",
                "items": 0,
                "children": []
            },
            {
                "name": "Office Furniture",
                "slug": "office-furniture",
                "image": "",
                "items": 0,
                "children": []
            }
        ]
    },
    {
        "name": "Machinery & Tools",
        "slug": "machinery-and-tools",
        "image": "",
        "items": 2,
        "children": [
            {
                "name": "Machinery",
                "slug": "machinery",
                "image": "",
                "items": 9,
                "children": [
                    {
                        "name": "Agriculture Machinery & Equipment",
                        "slug": "agriculture-machinery-and-equipment",
                        "image": "",
                        "items": 0,
                        "children": []
                    },
                    {
                        "name": "Apparel & Textile Machinery",
                        "slug": "apparel-and-textile-machinery",
                        "image": "",
                        "items": 0,
                        "children": []
                    },
                    {
                        "name": "Food & Beverage Machinery",
                        "slug": "food-and-beverage-machinery",
                        "image": "",
                        "items": 0,
                        "children": []
                    },
                    {
                        "name": "General Industrial Equipment",
                        "slug": "general-industrial-equipment",
                        "image": "",
                        "items": 0,
                        "children": []
                    }
                ]
            },
            {
                "name": "Tools & Hardware",
                "slug": "tools-and-hardware",
                "image": "",
                "items": 2,
                "children": [
                    {
                        "name": "Hardware",
                        "slug": "hardware",
                        "image": "",
                        "items": 0,
                        "children": []
                    },
                    {
                        "name": "Knife",
                        "slug": "knife",
                        "image": "",
                        "items": 0,
                        "children": []
                    },
                    {
                        "name": "Material Handling Tools",
                        "slug": "material-handling-tools",
                        "image": "",
                        "items": 0,
                        "children": []
                    },
                    {
                        "name": "Power Tools",
                        "slug": "power-tools",
                        "image": "",
                        "items": 0,
                        "children": []
                    }
                ]
            }
        ]
    },
    {
        "name": "Packaging, Ad. & Office Supplies",
        "slug": "packaging-ad--and-office-supplies",
        "image": "http://localhost:8000/storage/product-categories/March2020/ZYwN9LZmLpkLjlAgSOjY-cropped.png",
        "items": 2,
        "children": [
            {
                "name": "Office & School Supplies",
                "slug": "office-and-school-supplies",
                "image": "",
                "items": 9,
                "children": [
                    {
                        "name": "Board & writing tablet",
                        "slug": "board-and-writing-tablet",
                        "image": "",
                        "items": 0,
                        "children": []
                    },
                    {
                        "name": "Calculator",
                        "slug": "calculator",
                        "image": "",
                        "items": 0,
                        "children": []
                    },
                    {
                        "name": "Desk Organizer",
                        "slug": "desk-organizer",
                        "image": "",
                        "items": 0,
                        "children": []
                    },
                    {
                        "name": "Filing Products",
                        "slug": "filing-products",
                        "image": "",
                        "items": 0,
                        "children": []
                    }
                ]
            },
            {
                "name": "Packaging & Printing",
                "slug": "packaging-and-printing",
                "image": "",
                "items": 11,
                "children": [
                    {
                        "name": "Adhesive Tape",
                        "slug": "adhesive-tape",
                        "image": "",
                        "items": 0,
                        "children": []
                    },
                    {
                        "name": "Aluminum Foil",
                        "slug": "aluminum-foil",
                        "image": "",
                        "items": 0,
                        "children": []
                    },
                    {
                        "name": "Blister Containers",
                        "slug": "blister-containers",
                        "image": "",
                        "items": 0,
                        "children": []
                    },
                    {
                        "name": "Bottles",
                        "slug": "bottles",
                        "image": "",
                        "items": 0,
                        "children": []
                    }
                ]
            }
        ]
    },
    {
        "name": "Apparel",
        "slug": "apparel",
        "image": "",
        "items": 0,
        "children": [
            {
                "name": "Baby Clothing",
                "slug": "baby-clothing",
                "image": "",
                "items": 0,
                "children": []
            },
            {
                "name": "Garment Accessories & Tag Guns",
                "slug": "garment-accessories-and-tag-guns",
                "image": "",
                "items": 0,
                "children": []
            },
            {
                "name": "Maternity Clothing",
                "slug": "maternity-clothing",
                "image": "",
                "items": 0,
                "children": []
            },
            {
                "name": "Men's Clothing",
                "slug": "men's-clothing",
                "image": "",
                "items": 0,
                "children": []
            }
        ]
    },
    {
        "name": "Towel",
        "slug": "towel",
        "image": "",
        "items": 0,
        "children": []
    },
    {
        "name": "Fabric",
        "slug": "fabric",
        "image": "",
        "items": 0,
        "children": []
    },
    {
        "name": "Bedding Set",
        "slug": "bedding-set",
        "image": "",
        "items": 0,
        "children": []
    },
    {
        "name": "Fashion Accessories",
        "slug": "fashion-accessories",
        "image": "",
        "items": 0,
        "children": [
            {
                "name": "Belt Buckles",
                "slug": "belt-buckles",
                "image": "",
                "items": 0,
                "children": []
            },
            {
                "name": "Belts",
                "slug": "belts",
                "image": "",
                "items": 0,
                "children": []
            },
            {
                "name": "Hats & Caps",
                "slug": "hats-and-caps",
                "image": "",
                "items": 0,
                "children": []
            },
            {
                "name": "Jewelry",
                "slug": "jewelry",
                "image": "",
                "items": 0,
                "children": []
            }
        ]
    },
    {
        "name": "Car Accessories",
        "slug": "car-accessories",
        "image": "",
        "items": 0,
        "children": []
    },
    {
        "name": "Wheels, Tires & Rims",
        "slug": "wheels-tires-and-rims",
        "image": "",
        "items": 0,
        "children": []
    },
    {
        "name": "Luggage & Cases",
        "slug": "luggage-and-cases",
        "image": "",
        "items": 0,
        "children": [
            {
                "name": "Backpacks & Travel Bags",
                "slug": "backpacks-and-travel-bags",
                "image": "",
                "items": 0,
                "children": []
            },
            {
                "name": "Bag & Luggage Making Materials",
                "slug": "bag-and-luggage-making-materials",
                "image": "",
                "items": 0,
                "children": []
            },
            {
                "name": "Cosmetics Bags & Cases",
                "slug": "cosmetics-bags-and-cases",
                "image": "",
                "items": 0,
                "children": []
            },
            {
                "name": "DSLR Bags",
                "slug": "dslr-bags",
                "image": "",
                "items": 0,
                "children": []
            }
        ]
    },
    {
        "name": "Shoes",
        "slug": "shoes",
        "image": "",
        "items": 3,
        "children": [
            {
                "name": "Kids Shoes",
                "slug": "kids-shoes",
                "image": "",
                "items": 0,
                "children": []
            },
            {
                "name": "Men's Shoes",
                "slug": "men's-shoes",
                "image": "",
                "items": 0,
                "children": []
            },
            {
                "name": "Shoe Materials & Accessories",
                "slug": "shoe-materials-and-accessories",
                "image": "",
                "items": 0,
                "children": []
            },
            {
                "name": "Sports Shoes",
                "slug": "sports-shoes",
                "image": "",
                "items": 0,
                "children": []
            }
        ]
    },
    {
        "name": "Consumer Electronics",
        "slug": "consumer-electronics",
        "image": "",
        "items": 8,
        "children": [
            {
                "name": "Accessories & Parts",
                "slug": "accessories-and-parts",
                "image": "",
                "items": 0,
                "children": []
            },
            {
                "name": "Car Accessories",
                "slug": "car-accessories",
                "image": "",
                "items": 0,
                "children": []
            },
            {
                "name": "Digital Camera, Photo & Accessories",
                "slug": "digital-camera-photo-and-accessories",
                "image": "",
                "items": 0,
                "children": []
            },
            {
                "name": "E-Cigarettes",
                "slug": "e-cigarettes",
                "image": "",
                "items": 0,
                "children": []
            }
        ]
    },
    {
        "name": "Home Appliance",
        "slug": "home-appliance",
        "image": "",
        "items": 7,
        "children": [
            {
                "name": "Blenders",
                "slug": "blenders",
                "image": "",
                "items": 0,
                "children": []
            },
            {
                "name": "Cooking Appliances",
                "slug": "cooking-appliances",
                "image": "",
                "items": 0,
                "children": []
            },
            {
                "name": "Fans & Air Conditioners",
                "slug": "fans-and-air-conditioners",
                "image": "",
                "items": 0,
                "children": []
            },
            {
                "name": "Kitchen Appliances",
                "slug": "kitchen-appliances",
                "image": "",
                "items": 0,
                "children": []
            }
        ]
    },
    {
        "name": "Security & Protection",
        "slug": "security-and-protection",
        "image": "",
        "items": 4,
        "children": [
            {
                "name": "Access Control Systems & Products",
                "slug": "access-control-systems-and-products",
                "image": "",
                "items": 0,
                "children": []
            },
            {
                "name": "CCTV Products",
                "slug": "cctv-products",
                "image": "",
                "items": 0,
                "children": []
            },
            {
                "name": "Firefighting Supplies & Fire Alarms",
                "slug": "firefighting-supplies-and-fire-alarms",
                "image": "",
                "items": 0,
                "children": []
            },
            {
                "name": "Locks & Keys, Safes",
                "slug": "locks-and-keys-safes",
                "image": "",
                "items": 0,
                "children": []
            }
        ]
    },
    {
        "name": "Solar Cell & Solar Panel",
        "slug": "solar-cell-and-solar-panel",
        "image": "",
        "items": 0,
        "children": []
    },
    {
        "name": "Electrical Instruments",
        "slug": "electrical-instruments",
        "image": "",
        "items": 0,
        "children": []
    },
    {
        "name": "Electrical Supplies",
        "slug": "electrical-supplies",
        "image": "",
        "items": 0,
        "children": []
    },
    {
        "name": "Generators",
        "slug": "generators",
        "image": "",
        "items": 0,
        "children": []
    },
    {
        "name": "Sports & Entertainment",
        "slug": "sports-and-entertainment",
        "image": "",
        "items": 4,
        "children": [
            {
                "name": "Camping & Hiking",
                "slug": "camping-and-hiking",
                "image": "",
                "items": 0,
                "children": []
            },
            {
                "name": "Fitness & Body Building",
                "slug": "fitness-and-body-building",
                "image": "",
                "items": 0,
                "children": []
            },
            {
                "name": "Gym Equipment",
                "slug": "gym-equipment",
                "image": "",
                "items": 0,
                "children": []
            },
            {
                "name": "Musical Instrument",
                "slug": "musical-instrument",
                "image": "",
                "items": 0,
                "children": []
            }
        ]
    },
    {
        "name": "Promotional/Corporate Gift Sets",
        "slug": "promotionalcorporate-gift-sets",
        "image": "",
        "items": 0,
        "children": []
    },
    {
        "name": "Garment Accessories & Tag Guns",
        "slug": "garment-accessories-and-tag-guns",
        "image": "",
        "items": 0,
        "children": []
    },
    {
        "name": "Baby Clothing",
        "slug": "baby-clothing",
        "image": "",
        "items": 0,
        "children": []
    },
    {
        "name": "Maternity Clothing",
        "slug": "maternity-clothing",
        "image": "",
        "items": 0,
        "children": []
    },
    {
        "name": "Men's Clothing",
        "slug": "men's-clothing",
        "image": "",
        "items": 0,
        "children": []
    },
    {
        "name": "Women's Clothing",
        "slug": "women's-clothing",
        "image": "",
        "items": 0,
        "children": []
    },
    {
        "name": "Belts",
        "slug": "belts",
        "image": "",
        "items": 0,
        "children": []
    },
    {
        "name": "Belt Buckles",
        "slug": "belt-buckles",
        "image": "",
        "items": 0,
        "children": []
    },
    {
        "name": "Hats & Caps",
        "slug": "hats-and-caps",
        "image": "",
        "items": 0,
        "children": []
    },
    {
        "name": "Ties & Accessories",
        "slug": "ties-and-accessories",
        "image": "",
        "items": 0,
        "children": []
    },
    {
        "name": "Watches",
        "slug": "watches",
        "image": "",
        "items": 0,
        "children": []
    },
    {
        "name": "Wristbands",
        "slug": "wristbands",
        "image": "",
        "items": 0,
        "children": []
    },
    {
        "name": "Jewelry",
        "slug": "jewelry",
        "image": "",
        "items": 0,
        "children": []
    },
    {
        "name": "Bag & Luggage Making Materials",
        "slug": "bag-and-luggage-making-materials",
        "image": "",
        "items": 0,
        "children": []
    },
    {
        "name": "Handbags",
        "slug": "handbags",
        "image": "",
        "items": 0,
        "children": []
    },
    {
        "name": "Laptop Bags",
        "slug": "laptop-bags",
        "image": "",
        "items": 0,
        "children": []
    },
    {
        "name": "DSLR Bags",
        "slug": "dslr-bags",
        "image": "",
        "items": 0,
        "children": []
    },
    {
        "name": "Backpacks & Travel Bags",
        "slug": "backpacks-and-travel-bags",
        "image": "",
        "items": 0,
        "children": []
    },
    {
        "name": "School Bags",
        "slug": "school-bags",
        "image": "",
        "items": 0,
        "children": []
    },
    {
        "name": "Special Purpose Bags",
        "slug": "special-purpose-bags",
        "image": "",
        "items": 0,
        "children": []
    },
    {
        "name": "Trolley Luggage Bag",
        "slug": "trolley-luggage-bag",
        "image": "",
        "items": 0,
        "children": []
    },
    {
        "name": "Cosmetics Bags & Cases",
        "slug": "cosmetics-bags-and-cases",
        "image": "",
        "items": 0,
        "children": []
    },
    {
        "name": "Tablet Covers & Mobile Cases",
        "slug": "tablet-covers-and-mobile-cases",
        "image": "",
        "items": 0,
        "children": []
    },
    {
        "name": "Kids Shoes",
        "slug": "kids-shoes",
        "image": "",
        "items": 0,
        "children": []
    },
    {
        "name": "Women's Shoes",
        "slug": "women's-shoes",
        "image": "",
        "items": 0,
        "children": []
    },
    {
        "name": "Men's Shoes",
        "slug": "men's-shoes",
        "image": "",
        "items": 0,
        "children": []
    },
    {
        "name": "Sports Shoes",
        "slug": "sports-shoes",
        "image": "",
        "items": 0,
        "children": []
    },
    {
        "name": "Shoe Materials & Accessories",
        "slug": "shoe-materials-and-accessories",
        "image": "",
        "items": 0,
        "children": []
    },
    {
        "name": "Accessories & Parts",
        "slug": "accessories-and-parts",
        "image": "",
        "items": 0,
        "children": []
    },
    {
        "name": "Mobile Accessories",
        "slug": "mobile-accessories",
        "image": "",
        "items": 0,
        "children": []
    },
    {
        "name": "USB Drive & Power Banks",
        "slug": "usb-drive-and-power-banks",
        "image": "",
        "items": 0,
        "children": []
    },
    {
        "name": "Car Accessories",
        "slug": "car-accessories",
        "image": "",
        "items": 0,
        "children": []
    },
    {
        "name": "E-Cigarettes",
        "slug": "e-cigarettes",
        "image": "",
        "items": 0,
        "children": []
    },
    {
        "name": "Digital Camera, Photo & Accessories",
        "slug": "digital-camera-photo-and-accessories",
        "image": "",
        "items": 0,
        "children": []
    },
    {
        "name": "Earphone & Headphone",
        "slug": "earphone-and-headphone",
        "image": "",
        "items": 0,
        "children": []
    },
    {
        "name": "Gaming Accessories",
        "slug": "gaming-accessories",
        "image": "",
        "items": 0,
        "children": []
    },
    {
        "name": "Speakers",
        "slug": "speakers",
        "image": "",
        "items": 0,
        "children": []
    },
    {
        "name": "Fans & Air Conditioners",
        "slug": "fans-and-air-conditioners",
        "image": "",
        "items": 0,
        "children": []
    },
    {
        "name": "Kitchen Appliances",
        "slug": "kitchen-appliances",
        "image": "",
        "items": 0,
        "children": []
    },
    {
        "name": "Water Heaters",
        "slug": "water-heaters",
        "image": "",
        "items": 0,
        "children": []
    },
    {
        "name": "Vacuum Cleaners & Cleaning Appliances",
        "slug": "vacuum-cleaners-and-cleaning-appliances",
        "image": "",
        "items": 0,
        "children": []
    },
    {
        "name": "Refrigerators & Freezers",
        "slug": "refrigerators-and-freezers",
        "image": "",
        "items": 0,
        "children": []
    },
    {
        "name": "Cooking Appliances",
        "slug": "cooking-appliances",
        "image": "",
        "items": 0,
        "children": []
    },
    {
        "name": "Blenders",
        "slug": "blenders",
        "image": "",
        "items": 0,
        "children": []
    },
    {
        "name": "Packaging & Printing",
        "slug": "packaging-and-printing",
        "image": "",
        "items": 11,
        "children": [
            {
                "name": "Adhesive Tape",
                "slug": "adhesive-tape",
                "image": "",
                "items": 0,
                "children": []
            },
            {
                "name": "Aluminum Foil",
                "slug": "aluminum-foil",
                "image": "",
                "items": 0,
                "children": []
            },
            {
                "name": "Blister Containers",
                "slug": "blister-containers",
                "image": "",
                "items": 0,
                "children": []
            },
            {
                "name": "Bottles",
                "slug": "bottles",
                "image": "",
                "items": 0,
                "children": []
            }
        ]
    },
    {
        "name": "Office & School Supplies",
        "slug": "office-and-school-supplies",
        "image": "",
        "items": 9,
        "children": [
            {
                "name": "Board & writing tablet",
                "slug": "board-and-writing-tablet",
                "image": "",
                "items": 0,
                "children": []
            },
            {
                "name": "Calculator",
                "slug": "calculator",
                "image": "",
                "items": 0,
                "children": []
            },
            {
                "name": "Desk Organizer",
                "slug": "desk-organizer",
                "image": "",
                "items": 0,
                "children": []
            },
            {
                "name": "Filing Products",
                "slug": "filing-products",
                "image": "",
                "items": 0,
                "children": []
            }
        ]
    },
    {
        "name": "Adhesive Tape",
        "slug": "adhesive-tape",
        "image": "",
        "items": 0,
        "children": []
    },
    {
        "name": "Aluminum Foil",
        "slug": "aluminum-foil",
        "image": "",
        "items": 0,
        "children": []
    },
    {
        "name": "Blister Containers",
        "slug": "blister-containers",
        "image": "",
        "items": 0,
        "children": []
    },
    {
        "name": "Cans & Jars",
        "slug": "cans-and-jars",
        "image": "",
        "items": 0,
        "children": []
    },
    {
        "name": "Composite Packaging Materials",
        "slug": "composite-packaging-materials",
        "image": "",
        "items": 0,
        "children": []
    },
    {
        "name": "Packaging Boxes",
        "slug": "packaging-boxes",
        "image": "",
        "items": 0,
        "children": []
    },
    {
        "name": "Pharmaceutical Packaging",
        "slug": "pharmaceutical-packaging",
        "image": "",
        "items": 0,
        "children": []
    },
    {
        "name": "Bottles",
        "slug": "bottles",
        "image": "",
        "items": 0,
        "children": []
    },
    {
        "name": "Food Packaging",
        "slug": "food-packaging",
        "image": "",
        "items": 0,
        "children": []
    },
    {
        "name": "Cosmetics Packaging",
        "slug": "cosmetics-packaging",
        "image": "",
        "items": 0,
        "children": []
    },
    {
        "name": "Packaging Labels",
        "slug": "packaging-labels",
        "image": "",
        "items": 0,
        "children": []
    },
    {
        "name": "Packaging Tubes",
        "slug": "packaging-tubes",
        "image": "",
        "items": 0,
        "children": []
    },
    {
        "name": "School Supplies",
        "slug": "school-supplies",
        "image": "",
        "items": 0,
        "children": []
    },
    {
        "name": "Board & writing tablet",
        "slug": "board-and-writing-tablet",
        "image": "",
        "items": 0,
        "children": []
    },
    {
        "name": "Calculator",
        "slug": "calculator",
        "image": "",
        "items": 0,
        "children": []
    },
    {
        "name": "Desk Organizer",
        "slug": "desk-organizer",
        "image": "",
        "items": 0,
        "children": []
    },
    {
        "name": "Filing Products",
        "slug": "filing-products",
        "image": "",
        "items": 0,
        "children": []
    },
    {
        "name": "Office Equipment",
        "slug": "office-equipment",
        "image": "",
        "items": 0,
        "children": []
    },
    {
        "name": "Printer Supplies",
        "slug": "printer-supplies",
        "image": "",
        "items": 0,
        "children": []
    },
    {
        "name": "Writing Accessories",
        "slug": "writing-accessories",
        "image": "",
        "items": 0,
        "children": []
    },
    {
        "name": "Office Supplies",
        "slug": "office-supplies",
        "image": "",
        "items": 0,
        "children": []
    },
    {
        "name": "Paper",
        "slug": "paper",
        "image": "",
        "items": 0,
        "children": []
    },
    {
        "name": "Machinery",
        "slug": "machinery",
        "image": "",
        "items": 9,
        "children": [
            {
                "name": "Agriculture Machinery & Equipment",
                "slug": "agriculture-machinery-and-equipment",
                "image": "",
                "items": 0,
                "children": []
            },
            {
                "name": "Apparel & Textile Machinery",
                "slug": "apparel-and-textile-machinery",
                "image": "",
                "items": 0,
                "children": []
            },
            {
                "name": "Food & Beverage Machinery",
                "slug": "food-and-beverage-machinery",
                "image": "",
                "items": 0,
                "children": []
            },
            {
                "name": "General Industrial Equipment",
                "slug": "general-industrial-equipment",
                "image": "",
                "items": 0,
                "children": []
            }
        ]
    },
    {
        "name": "Tools & Hardware",
        "slug": "tools-and-hardware",
        "image": "",
        "items": 2,
        "children": [
            {
                "name": "Hardware",
                "slug": "hardware",
                "image": "",
                "items": 0,
                "children": []
            },
            {
                "name": "Knife",
                "slug": "knife",
                "image": "",
                "items": 0,
                "children": []
            },
            {
                "name": "Material Handling Tools",
                "slug": "material-handling-tools",
                "image": "",
                "items": 0,
                "children": []
            },
            {
                "name": "Power Tools",
                "slug": "power-tools",
                "image": "",
                "items": 0,
                "children": []
            }
        ]
    },
    {
        "name": "Agriculture Machinery & Equipment",
        "slug": "agriculture-machinery-and-equipment",
        "image": "",
        "items": 0,
        "children": []
    },
    {
        "name": "Restaurant Machinery",
        "slug": "restaurant-machinery",
        "image": "",
        "items": 0,
        "children": []
    },
    {
        "name": "Paper roll cutting & packaging machine",
        "slug": "paper-roll-cutting-and-packaging-machine",
        "image": "",
        "items": 0,
        "children": []
    },
    {
        "name": "Printing Machine",
        "slug": "printing-machine",
        "image": "",
        "items": 0,
        "children": []
    },
    {
        "name": "Packaging Machine",
        "slug": "packaging-machine",
        "image": "",
        "items": 0,
        "children": []
    },
    {
        "name": "General Industrial Equipment",
        "slug": "general-industrial-equipment",
        "image": "",
        "items": 0,
        "children": []
    },
    {
        "name": "Apparel & Textile Machinery",
        "slug": "apparel-and-textile-machinery",
        "image": "",
        "items": 0,
        "children": []
    },
    {
        "name": "Food & Beverage Machinery",
        "slug": "food-and-beverage-machinery",
        "image": "",
        "items": 0,
        "children": []
    },
    {
        "name": "Home Product Making Machinery",
        "slug": "home-product-making-machinery",
        "image": "",
        "items": 0,
        "children": []
    },
    {
        "name": "Woodworking Machinery",
        "slug": "woodworking-machinery",
        "image": "",
        "items": 0,
        "children": []
    },
    {
        "name": "Moulds",
        "slug": "moulds",
        "image": "",
        "items": 0,
        "children": []
    },
    {
        "name": "Machine Parts & Accessory",
        "slug": "machine-parts-and-accessory",
        "image": "",
        "items": 0,
        "children": []
    },
    {
        "name": "Hardware",
        "slug": "hardware",
        "image": "",
        "items": 0,
        "children": []
    },
    {
        "name": "Material Handling Tools",
        "slug": "material-handling-tools",
        "image": "",
        "items": 0,
        "children": []
    },
    {
        "name": "Power Tools",
        "slug": "power-tools",
        "image": "",
        "items": 0,
        "children": []
    },
    {
        "name": "Tool Kits",
        "slug": "tool-kits",
        "image": "",
        "items": 0,
        "children": []
    },
    {
        "name": "Knife",
        "slug": "knife",
        "image": "",
        "items": 0,
        "children": []
    },
    {
        "name": "Bamboo Furniture",
        "slug": "bamboo-furniture",
        "image": "",
        "items": 0,
        "children": []
    },
    {
        "name": "Office Furniture",
        "slug": "office-furniture",
        "image": "",
        "items": 0,
        "children": []
    },
    {
        "name": "Home Furniture",
        "slug": "home-furniture",
        "image": "",
        "items": 0,
        "children": []
    },
    {
        "name": "Outdoor Furniture",
        "slug": "outdoor-furniture",
        "image": "",
        "items": 0,
        "children": []
    },
    {
        "name": "Furniture Parts",
        "slug": "furniture-parts",
        "image": "",
        "items": 0,
        "children": []
    },
    {
        "name": "Construction & Real Estate",
        "slug": "construction-and-real-estate",
        "image": "",
        "items": 6,
        "children": [
            {
                "name": "Bathroom",
                "slug": "bathroom",
                "image": "",
                "items": 0,
                "children": []
            },
            {
                "name": "Boards & Ceilings",
                "slug": "boards-and-ceilings",
                "image": "",
                "items": 0,
                "children": []
            },
            {
                "name": "Countertops,Vanity Tops & Table Tops",
                "slug": "countertopsvanity-tops-and-table-tops",
                "image": "",
                "items": 0,
                "children": []
            },
            {
                "name": "Door & Window Accessories",
                "slug": "door-and-window-accessories",
                "image": "",
                "items": 0,
                "children": []
            }
        ]
    },
    {
        "name": "Home & Garden",
        "slug": "home-and-garden",
        "image": "",
        "items": 0,
        "children": []
    },
    {
        "name": "Lights & Lighting",
        "slug": "lights-and-lighting",
        "image": "",
        "items": 5,
        "children": [
            {
                "name": "Ceiling Lights",
                "slug": "ceiling-lights",
                "image": "",
                "items": 0,
                "children": []
            },
            {
                "name": "Energy Saving Light & Fluorescent",
                "slug": "energy-saving-light-and-fluorescent",
                "image": "",
                "items": 0,
                "children": []
            },
            {
                "name": "Indoor Lighting",
                "slug": "indoor-lighting",
                "image": "",
                "items": 0,
                "children": []
            },
            {
                "name": "LED Outdoor Lighting",
                "slug": "led-outdoor-lighting",
                "image": "",
                "items": 0,
                "children": []
            }
        ]
    },
    {
        "name": "Bathroom",
        "slug": "bathroom",
        "image": "",
        "items": 0,
        "children": []
    },
    {
        "name": "Door & Window Accessories",
        "slug": "door-and-window-accessories",
        "image": "",
        "items": 0,
        "children": []
    },
    {
        "name": "Boards & Ceilings",
        "slug": "boards-and-ceilings",
        "image": "",
        "items": 0,
        "children": []
    },
    {
        "name": "Countertops,Vanity Tops & Table Tops",
        "slug": "countertopsvanity-tops-and-table-tops",
        "image": "",
        "items": 0,
        "children": []
    },
    {
        "name": "Doors & Windows",
        "slug": "doors-and-windows",
        "image": "",
        "items": 0,
        "children": []
    },
    {
        "name": "Elevators & Elevator Parts",
        "slug": "elevators-and-elevator-parts",
        "image": "",
        "items": 0,
        "children": []
    },
    {
        "name": "Indoor Lighting",
        "slug": "indoor-lighting",
        "image": "",
        "items": 0,
        "children": []
    },
    {
        "name": "Professional Lighting",
        "slug": "professional-lighting",
        "image": "",
        "items": 0,
        "children": []
    },
    {
        "name": "LED Outdoor Lighting",
        "slug": "led-outdoor-lighting",
        "image": "",
        "items": 0,
        "children": []
    },
    {
        "name": "Ceiling Lights",
        "slug": "ceiling-lights",
        "image": "",
        "items": 0,
        "children": []
    },
    {
        "name": "Energy Saving Light & Fluorescent",
        "slug": "energy-saving-light-and-fluorescent",
        "image": "",
        "items": 0,
        "children": []
    },
    {
        "name": "Cosmetics and Makeup",
        "slug": "cosmetics-and-makeup",
        "image": "",
        "items": 0,
        "children": []
    },
    {
        "name": "Shaving kits",
        "slug": "shaving-kits",
        "image": "",
        "items": 0,
        "children": []
    },
    {
        "name": "Skin Care",
        "slug": "skin-care",
        "image": "",
        "items": 0,
        "children": []
    },
    {
        "name": "Hair Care",
        "slug": "hair-care",
        "image": "",
        "items": 0,
        "children": []
    },
    {
        "name": "Locks & Keys, Safes",
        "slug": "locks-and-keys-safes",
        "image": "",
        "items": 0,
        "children": []
    },
    {
        "name": "Access Control Systems & Products",
        "slug": "access-control-systems-and-products",
        "image": "",
        "items": 0,
        "children": []
    },
    {
        "name": "CCTV Products",
        "slug": "cctv-products",
        "image": "",
        "items": 0,
        "children": []
    },
    {
        "name": "Firefighting Supplies & Fire Alarms",
        "slug": "firefighting-supplies-and-fire-alarms",
        "image": "",
        "items": 0,
        "children": []
    },
    {
        "name": "Water Safety Products",
        "slug": "water-safety-products",
        "image": "",
        "items": 0,
        "children": []
    },
    {
        "name": "Smart Gadgets",
        "slug": "smart-gadgets",
        "image": "",
        "items": 0,
        "children": []
    },
    {
        "name": "Fitness & Body Building",
        "slug": "fitness-and-body-building",
        "image": "",
        "items": 0,
        "children": []
    },
    {
        "name": "Camping & Hiking",
        "slug": "camping-and-hiking",
        "image": "",
        "items": 0,
        "children": []
    },
    {
        "name": "Gym Equipment",
        "slug": "gym-equipment",
        "image": "",
        "items": 0,
        "children": []
    },
    {
        "name": "Sports Equipment",
        "slug": "sports-equipment",
        "image": "",
        "items": 0,
        "children": []
    },
    {
        "name": "Musical Instrument",
        "slug": "musical-instrument",
        "image": "",
        "items": 0,
        "children": []
    },
    {
        "name": "Massage Products",
        "slug": "massage-products",
        "image": "",
        "items": 0,
        "children": []
    }
];
const blogCategoriesDef: CategoryDef[] = [
    {
        name: 'Latest News',
        slug: 'latest-news',
    },
    {
        name: 'Special Offers',
        slug: 'special-offers',
        children: [
            {
                name: 'Spring Sales',
                slug: 'spring-sales',
            },
            {
                name: 'Summer Sales',
                slug: 'summer-sales',
            },
            {
                name: 'Autumn Sales',
                slug: 'autumn-sales',
            },
            {
                name: 'Christmas Sales',
                slug: 'christmas-sales',
            },
            {
                name: 'Other Sales',
                slug: 'other-sales',
            }
        ],
    },
    {
        name: 'New Arrivals',
        slug: 'new-arrivals',
    },
    {
        name: 'Reviews',
        slug: 'reviews',
    },
    {
        name: 'Drills and Mixers',
        slug: 'drills-and-mixers',
    },
    {
        name: 'Cordless Screwdrivers',
        slug: 'cordless-screwdrivers',
    },
    {
        name: 'Screwdrivers',
        slug: 'screwdrivers',
    },
    {
        name: 'Wrenches',
        slug: 'wrenches',
    },
];

function walkTree(categoriesType: 'shop'|'blog', categoriesDef: CategoryDef[], parents: Category[] = []): [Category[], Category[]] {
    let list: Category[] = [];
    const tree: Category[] = categoriesDef.map(categoryDef => {
        const category: Category = {
            id: ++lastCategoryId,
            type: categoriesType,
            name: categoryDef.name,
            slug: categoryDef.slug,
            path: [...parents.map(x => x.slug), categoryDef.slug].join('/'),
            image: categoryDef.image || null,
            items: categoryDef.items || 0,
            customFields: {},
            parents: parents.slice(),
            children: [],
        };

        const [childrenTree, childrenList] = walkTree(categoriesType, categoryDef.children || [], [...parents, category]);

        category.children = childrenTree;
        list = [...list, category, ...childrenList];

        return category;
    });

    return [tree, list];
}

export const [shopCategoriesTree, shopCategoriesList]: [Category[], Category[]] = walkTree('shop', shopCategoriesDef);
export const [blogCategoriesTree, blogCategoriesList]: [Category[], Category[]] = walkTree('blog', blogCategoriesDef);

function limitDepth(categories: Category[], depth: number): Category[] {
    return categories.map(category => {
        return {
            ...category,
            parents: null,
            children: depth !== 0 ? limitDepth(category.children, depth - 1) : null,
        };
    });
}

function getCategoriesTree(categoriesType: 'shop'|'blog', parentSlug: string = null, depth: number = 0): Observable<Category[]> {
    let categories = [];
    const list = categoriesType === 'shop' ? shopCategoriesList : blogCategoriesList;
    const tree = categoriesType === 'shop' ? shopCategoriesTree : blogCategoriesTree;

    if (parentSlug === null) {
        categories = tree.slice();
    } else {
        const parent = list.find(x => x.slug === parentSlug);

        if (!parent) {
            return throwError(new HttpErrorResponse({status: 404, statusText: 'Page Not Found'}));
        }

        categories = parent.children.slice();
    }

    return of(limitDepth(categories, depth));
}

export function getShopCategoriesTree(parentSlug: string = null, depth: number = 0): Observable<Category[]> {
    return getCategoriesTree('shop', parentSlug, depth);
}

export function getBlogCategoriesTree(parentSlug: string = null, depth: number = 0): Observable<Category[]> {
    return getCategoriesTree('blog', parentSlug, depth);
}

export function getShopCategoriesBySlugs(slugs: string[], depth: number = 0): Observable<Category[]> {
    return of(limitDepth(shopCategoriesList.filter(x => slugs.includes(x.slug)), depth));
}

export function getShopCategory(slug: string): Observable<Category> {
    const category = shopCategoriesList.find(x => x.slug === slug);

    if (!category) {
        return throwError(new HttpErrorResponse({status: 404, statusText: 'Page Not Found'}));
    }

    return of(JSON.parse(JSON.stringify({
        ...category,
        parents: limitDepth(category.parents, 0),
        children: limitDepth(category.children, 0),
    })));
}
