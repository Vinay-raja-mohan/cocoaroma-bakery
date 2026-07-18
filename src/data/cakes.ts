export interface SizeOption {
  id: string;
  weight: string;
  price: number;
}

export interface Cake {
  id: string;
  name: string;
  prices: SizeOption[];
  images: string[];
  rating: number;
  reviewsCount: number;
  isBestseller: boolean;
  ingredients: string[];
}

export const cakesData: Cake[] = [
  {
    "id": "black-forest",
    "name": "Black Forest",
    "prices": [
      {
        "id": "half",
        "weight": "Half Kg",
        "price": 525
      },
      {
        "id": "full",
        "weight": "1 Kg",
        "price": 930
      }
    ],
    "images": [
      "/images/1. Black forest/black forest front angle.png",
      "/images/1. Black forest/black forest top angle.png",
      "/images/1. Black forest/black forest down angle.png"
    ],
    "rating": 4.3,
    "reviewsCount": 50,
    "isBestseller": false,
    "ingredients": [
      "Vanilla Extract",
      "Soft Sponge",
      "Fresh Cream"
    ]
  },
  {
    "id": "mango-super-king",
    "name": "Mango Super King",
    "prices": [
      {
        "id": "half",
        "weight": "Half Kg",
        "price": 450
      },
      {
        "id": "full",
        "weight": "1 Kg",
        "price": 800
      }
    ],
    "images": [
      "/images/10. mango super king/mango super king front angle.png",
      "/images/10. mango super king/mango super king top angle.png",
      "/images/10. mango super king/mango super king down angle.png"
    ],
    "rating": 4.4,
    "reviewsCount": 67,
    "isBestseller": false,
    "ingredients": [
      "Fresh Fruits",
      "Real Fruit Crush",
      "Fresh Cream"
    ]
  },
  {
    "id": "pineapple",
    "name": "Pineapple",
    "prices": [
      {
        "id": "half",
        "weight": "Half Kg",
        "price": 420
      },
      {
        "id": "full",
        "weight": "1 Kg",
        "price": 800
      }
    ],
    "images": [
      "/images/11. pineapple/pineapple front angle.png",
      "/images/11. pineapple/pineapple top angle.png",
      "/images/11. pineapple/pineapply down angle.png"
    ],
    "rating": 4.5,
    "reviewsCount": 84,
    "isBestseller": false,
    "ingredients": [
      "Fresh Fruits",
      "Real Fruit Crush",
      "Fresh Cream"
    ]
  },
  {
    "id": "butterscotch",
    "name": "Butterscotch",
    "prices": [
      {
        "id": "half",
        "weight": "Half Kg",
        "price": 450
      },
      {
        "id": "full",
        "weight": "1 Kg",
        "price": 850
      }
    ],
    "images": [
      "/images/12. Butterscotch/butterscotch front angle.png",
      "/images/12. Butterscotch/butterscotch top angle.png",
      "/images/12. Butterscotch/butterscotch down angle.png"
    ],
    "rating": 4.6,
    "reviewsCount": 101,
    "isBestseller": false,
    "ingredients": [
      "Caramel",
      "Praline Nuts",
      "Fresh Cream"
    ]
  },
  {
    "id": "strawberry",
    "name": "Strawberry",
    "prices": [
      {
        "id": "half",
        "weight": "Half Kg",
        "price": 420
      },
      {
        "id": "full",
        "weight": "1 Kg",
        "price": 800
      }
    ],
    "images": [
      "/images/13 - 2  strawberry/strawberry front angle.png",
      "/images/13 - 2  strawberry/strawberry top angle.png",
      "/images/13 - 2  strawberry/strawberry down angle.png"
    ],
    "rating": 4.7,
    "reviewsCount": 118,
    "isBestseller": false,
    "ingredients": [
      "Fresh Fruits",
      "Real Fruit Crush",
      "Fresh Cream"
    ]
  },
  {
    "id": "butterscotch-chocolate",
    "name": "Butterscotch Chocolate",
    "prices": [
      {
        "id": "half",
        "weight": "Half Kg",
        "price": 450
      },
      {
        "id": "full",
        "weight": "1 Kg",
        "price": 800
      }
    ],
    "images": [
      "/images/13. Butterscotch chocolate/butterscotch chocolate front angle.png",
      "/images/13. Butterscotch chocolate/butterscotch chocolate top angle.png",
      "/images/13. Butterscotch chocolate/butterscotch chocolate down angle.png"
    ],
    "rating": 4.8,
    "reviewsCount": 135,
    "isBestseller": false,
    "ingredients": [
      "Premium Cocoa",
      "Dark Chocolate",
      "Fresh Cream"
    ]
  },
  {
    "id": "white-forest",
    "name": "White Forest",
    "prices": [
      {
        "id": "half",
        "weight": "Half Kg",
        "price": 500
      },
      {
        "id": "full",
        "weight": "1 Kg",
        "price": 950
      }
    ],
    "images": [
      "/images/14 -2  white forest/white forest front angle.png",
      "/images/14 -2  white forest/white forest top angle.png",
      "/images/14 -2  white forest/white forest down angle.png"
    ],
    "rating": 4.3,
    "reviewsCount": 152,
    "isBestseller": false,
    "ingredients": [
      "Vanilla Extract",
      "Soft Sponge",
      "Fresh Cream"
    ]
  },
  {
    "id": "white-chocolate",
    "name": "White Chocolate",
    "prices": [
      {
        "id": "half",
        "weight": "Half Kg",
        "price": 550
      },
      {
        "id": "full",
        "weight": "1 Kg",
        "price": 1000
      }
    ],
    "images": [
      "/images/14. White chocolate/white chocolate front angle.png",
      "/images/14. White chocolate/white chocolate top angle.png",
      "/images/14. White chocolate/white chocolate down angle.png"
    ],
    "rating": 4.4,
    "reviewsCount": 169,
    "isBestseller": false,
    "ingredients": [
      "Premium Cocoa",
      "Dark Chocolate",
      "Fresh Cream"
    ]
  },
  {
    "id": "kiwi-delight",
    "name": "Kiwi Delight",
    "prices": [
      {
        "id": "half",
        "weight": "Half Kg",
        "price": 450
      },
      {
        "id": "full",
        "weight": "1 Kg",
        "price": 800
      }
    ],
    "images": [
      "/images/15. kiwi Delight/kiwi delight front angle.png",
      "/images/15. kiwi Delight/kiwi delight top angle.png",
      "/images/15. kiwi Delight/kiwi delight down angle.png"
    ],
    "rating": 4.5,
    "reviewsCount": 186,
    "isBestseller": false,
    "ingredients": [
      "Fresh Fruits",
      "Real Fruit Crush",
      "Fresh Cream"
    ]
  },
  {
    "id": "royale-truffle",
    "name": "Royale Truffle",
    "prices": [
      {
        "id": "half",
        "weight": "Half Kg",
        "price": 650
      },
      {
        "id": "full",
        "weight": "1 Kg",
        "price": 1050
      }
    ],
    "images": [
      "/images/17.  Royale truffle/royale truffle front angle.png",
      "/images/17.  Royale truffle/royale truffle top angle.png",
      "/images/17.  Royale truffle/royale truffle down angle.png"
    ],
    "rating": 4.6,
    "reviewsCount": 53,
    "isBestseller": false,
    "ingredients": [
      "Premium Cocoa",
      "Dark Chocolate",
      "Fresh Cream"
    ]
  },
  {
    "id": "belgium-chocolate",
    "name": "Belgium Chocolate",
    "prices": [
      {
        "id": "half",
        "weight": "Half Kg",
        "price": 650
      },
      {
        "id": "full",
        "weight": "1 Kg",
        "price": 1100
      }
    ],
    "images": [
      "/images/18. belgium chocolate/belgium chocolate front angle.png",
      "/images/18. belgium chocolate/belgium chocolate top angle.png",
      "/images/18. belgium chocolate/belgium chocolate down angle.png"
    ],
    "rating": 4.7,
    "reviewsCount": 70,
    "isBestseller": false,
    "ingredients": [
      "Premium Cocoa",
      "Dark Chocolate",
      "Fresh Cream"
    ]
  },
  {
    "id": "almond-chocolate",
    "name": "Almond Chocolate",
    "prices": [
      {
        "id": "half",
        "weight": "Half Kg",
        "price": 600
      },
      {
        "id": "full",
        "weight": "1 Kg",
        "price": 1050
      }
    ],
    "images": [
      "/images/2. Almond chocolate/almond chocolate front angle.png",
      "/images/2. Almond chocolate/almond chocolate top angle.png",
      "/images/2. Almond chocolate/almond chocolate down angle.png"
    ],
    "rating": 4.8,
    "reviewsCount": 87,
    "isBestseller": false,
    "ingredients": [
      "Premium Cocoa",
      "Dark Chocolate",
      "Fresh Cream"
    ]
  },
  {
    "id": "ferrero-rocher",
    "name": "Ferrero Rocher",
    "prices": [
      {
        "id": "half",
        "weight": "Half Kg",
        "price": 600
      },
      {
        "id": "full",
        "weight": "1 Kg",
        "price": 1100
      }
    ],
    "images": [
      "/images/21. ferrero rocher/ferraro rocher front angle.png",
      "/images/21. ferrero rocher/ferarro rocher top angle.png",
      "/images/21. ferrero rocher/ferraro rocher down angle.png"
    ],
    "rating": 4.3,
    "reviewsCount": 104,
    "isBestseller": false,
    "ingredients": [
      "Roasted Nuts",
      "Premium Dry Fruits",
      "Fresh Cream"
    ]
  },
  {
    "id": "rabdi-pista-almond",
    "name": "Rabdi Pista Almond",
    "prices": [
      {
        "id": "half",
        "weight": "Half Kg",
        "price": 630
      },
      {
        "id": "full",
        "weight": "1 Kg",
        "price": 1150
      }
    ],
    "images": [
      "/images/22. rabdi pista almond/rabadi pista almond front angle.png",
      "/images/22. rabdi pista almond/rabadi pista almond top angle.png",
      "/images/22. rabdi pista almond/rabadi pista almond down angle.png"
    ],
    "rating": 4.4,
    "reviewsCount": 121,
    "isBestseller": true,
    "ingredients": [
      "Rich Rabdi",
      "Saffron",
      "Pistachios"
    ]
  },
  {
    "id": "rasagulla",
    "name": "Rasagulla",
    "prices": [
      {
        "id": "half",
        "weight": "Half Kg",
        "price": 600
      },
      {
        "id": "full",
        "weight": "1 Kg",
        "price": 1100
      }
    ],
    "images": [
      "/images/24. rasagulla/rasagulla front angle.png",
      "/images/24. rasagulla/rasagulla top angle.png",
      "/images/24. rasagulla/rasagulla down angle.png"
    ],
    "rating": 4.5,
    "reviewsCount": 138,
    "isBestseller": true,
    "ingredients": [
      "Rich Rabdi",
      "Saffron",
      "Pistachios"
    ]
  },
  {
    "id": "rasmalai",
    "name": "Rasmalai",
    "prices": [
      {
        "id": "half",
        "weight": "Half Kg",
        "price": 700
      },
      {
        "id": "full",
        "weight": "1 Kg",
        "price": 1300
      }
    ],
    "images": [
      "/images/25. rasmalai/rasamalai front angle.png",
      "/images/25. rasmalai/rasamalai top angle .png",
      "/images/25. rasmalai/rasamalai down angle.png"
    ],
    "rating": 4.6,
    "reviewsCount": 155,
    "isBestseller": true,
    "ingredients": [
      "Rich Rabdi",
      "Saffron",
      "Pistachios"
    ]
  },
  {
    "id": "red-velvet",
    "name": "Red Velvet",
    "prices": [
      {
        "id": "half",
        "weight": "Half Kg",
        "price": 550
      },
      {
        "id": "full",
        "weight": "1 Kg",
        "price": 1030
      }
    ],
    "images": [
      "/images/26. red velvet/red velvet front angle.png",
      "/images/26. red velvet/red velvet top angle.png",
      "/images/26. red velvet/red velvet down angle.png"
    ],
    "rating": 4.7,
    "reviewsCount": 172,
    "isBestseller": true,
    "ingredients": [
      "Cream Cheese",
      "Soft Sponge",
      "Red Velvet Crumbs"
    ]
  },
  {
    "id": "beloved",
    "name": "Beloved",
    "prices": [
      {
        "id": "half",
        "weight": "Half Kg",
        "price": 1300
      },
      {
        "id": "full",
        "weight": "1 Kg",
        "price": 1500
      }
    ],
    "images": [
      "/images/27. beloved/beloved front angle.png",
      "/images/27. beloved/beloved top angle.png",
      "/images/27. beloved/beloved down angle.png"
    ],
    "rating": 4.8,
    "reviewsCount": 189,
    "isBestseller": false,
    "ingredients": [
      "Vanilla Extract",
      "Soft Sponge",
      "Fresh Cream"
    ]
  },
  {
    "id": "sweet-heart",
    "name": "Sweet Heart",
    "prices": [
      {
        "id": "half",
        "weight": "Half Kg",
        "price": 1300
      },
      {
        "id": "full",
        "weight": "1 Kg",
        "price": 1500
      }
    ],
    "images": [
      "/images/28. sweet heart/sweet heart front angle.png",
      "/images/28. sweet heart/sweet heart top angle.png",
      "/images/28. sweet heart/sweet heart down angle.png"
    ],
    "rating": 4.3,
    "reviewsCount": 56,
    "isBestseller": false,
    "ingredients": [
      "Vanilla Extract",
      "Soft Sponge",
      "Fresh Cream"
    ]
  },
  {
    "id": "choco-praline",
    "name": "Choco Praline",
    "prices": [
      {
        "id": "half",
        "weight": "Half Kg",
        "price": 600
      },
      {
        "id": "full",
        "weight": "1 Kg",
        "price": 1050
      }
    ],
    "images": [
      "/images/29. choco praline/praline front angle.png",
      "/images/29. choco praline/praline top angle.png",
      "/images/29. choco praline/praline down anlge.png"
    ],
    "rating": 4.4,
    "reviewsCount": 73,
    "isBestseller": false,
    "ingredients": [
      "Premium Cocoa",
      "Dark Chocolate",
      "Fresh Cream"
    ]
  },
  {
    "id": "cappuccino-chocolate",
    "name": "Cappuccino Chocolate",
    "prices": [
      {
        "id": "half",
        "weight": "Half Kg",
        "price": 600
      },
      {
        "id": "full",
        "weight": "1 Kg",
        "price": 1050
      }
    ],
    "images": [
      "/images/3. Cappuccino chocolate/Cappuccino chocolate front angle.png",
      "/images/3. Cappuccino chocolate/Cappuccino chocolate top angle.png",
      "/images/3. Cappuccino chocolate/Cappuccino chocolate down angle.png"
    ],
    "rating": 4.5,
    "reviewsCount": 90,
    "isBestseller": false,
    "ingredients": [
      "Premium Cocoa",
      "Dark Chocolate",
      "Fresh Cream"
    ]
  },
  {
    "id": "loaded-roacher",
    "name": "Loaded Roacher",
    "prices": [
      {
        "id": "half",
        "weight": "Half Kg",
        "price": 600
      },
      {
        "id": "full",
        "weight": "1 Kg",
        "price": 1100
      }
    ],
    "images": [
      "/images/32. loaded roacher/loaded roacher front angle.png",
      "/images/32. loaded roacher/loaded roacher top angle.png",
      "/images/32. loaded roacher/loaded roacher down angle.png"
    ],
    "rating": 4.6,
    "reviewsCount": 107,
    "isBestseller": false,
    "ingredients": [
      "Vanilla Extract",
      "Soft Sponge",
      "Fresh Cream"
    ]
  },
  {
    "id": "choco-cream",
    "name": "Choco Cream",
    "prices": [
      {
        "id": "half",
        "weight": "Half Kg",
        "price": 530
      },
      {
        "id": "full",
        "weight": "1 Kg",
        "price": 950
      }
    ],
    "images": [
      "/images/33. Choco cream/choco cream front angle.png",
      "/images/33. Choco cream/choco cream top angle.png",
      "/images/33. Choco cream/choco cream down angle.png"
    ],
    "rating": 4.7,
    "reviewsCount": 124,
    "isBestseller": false,
    "ingredients": [
      "Premium Cocoa",
      "Dark Chocolate",
      "Fresh Cream"
    ]
  },
  {
    "id": "white-willow",
    "name": "White Willow",
    "prices": [
      {
        "id": "half",
        "weight": "Half Kg",
        "price": 550
      },
      {
        "id": "full",
        "weight": "1 Kg",
        "price": 1000
      }
    ],
    "images": [
      "/images/34. white willow/white willow front angle.png",
      "/images/34. white willow/white willow top angle.png",
      "/images/34. white willow/white willow down angle.png"
    ],
    "rating": 4.8,
    "reviewsCount": 141,
    "isBestseller": false,
    "ingredients": [
      "Vanilla Extract",
      "Soft Sponge",
      "Fresh Cream"
    ]
  },
  {
    "id": "magic-moment",
    "name": "Magic Moment",
    "prices": [
      {
        "id": "half",
        "weight": "Half Kg",
        "price": 600
      },
      {
        "id": "full",
        "weight": "1 Kg",
        "price": 1050
      }
    ],
    "images": [
      "/images/35. magic moment/magic moments front angle.png",
      "/images/35. magic moment/magic moments top angle.png",
      "/images/35. magic moment/magic moments down angle.png"
    ],
    "rating": 4.3,
    "reviewsCount": 158,
    "isBestseller": false,
    "ingredients": [
      "Vanilla Extract",
      "Soft Sponge",
      "Fresh Cream"
    ]
  },
  {
    "id": "oreo-chocolate",
    "name": "Oreo Chocolate",
    "prices": [
      {
        "id": "half",
        "weight": "Half Kg",
        "price": 600
      },
      {
        "id": "full",
        "weight": "1 Kg",
        "price": 1050
      }
    ],
    "images": [
      "/images/36. oreo chocolate/oreo chocolate front angle.png",
      "/images/36. oreo chocolate/oreo chocolate top angle.png",
      "/images/36. oreo chocolate/oreo chocolate down angle.png"
    ],
    "rating": 4.4,
    "reviewsCount": 175,
    "isBestseller": false,
    "ingredients": [
      "Premium Cocoa",
      "Dark Chocolate",
      "Fresh Cream"
    ]
  },
  {
    "id": "honey-almond",
    "name": "Honey Almond",
    "prices": [
      {
        "id": "half",
        "weight": "Half Kg",
        "price": 600
      },
      {
        "id": "full",
        "weight": "1 Kg",
        "price": 1050
      }
    ],
    "images": [
      "/images/37. honey almond/honey almond front angle.png",
      "/images/37. honey almond/honey almond top angle.png",
      "/images/37. honey almond/honey almond down angle.png"
    ],
    "rating": 4.5,
    "reviewsCount": 192,
    "isBestseller": false,
    "ingredients": [
      "Roasted Nuts",
      "Premium Dry Fruits",
      "Fresh Cream"
    ]
  },
  {
    "id": "choco-chip",
    "name": "Choco Chip",
    "prices": [
      {
        "id": "half",
        "weight": "Half Kg",
        "price": 530
      },
      {
        "id": "full",
        "weight": "1 Kg",
        "price": 950
      }
    ],
    "images": [
      "/images/4. Choco chip/Choco chip front angle.png",
      "/images/4. Choco chip/Choco chip top angle.png",
      "/images/4. Choco chip/Choco chip down angle.png"
    ],
    "rating": 4.6,
    "reviewsCount": 59,
    "isBestseller": false,
    "ingredients": [
      "Premium Cocoa",
      "Dark Chocolate",
      "Fresh Cream"
    ]
  },
  {
    "id": "choco-vanilla",
    "name": "Choco Vanilla",
    "prices": [
      {
        "id": "half",
        "weight": "Half Kg",
        "price": 450
      },
      {
        "id": "full",
        "weight": "1 Kg",
        "price": 880
      }
    ],
    "images": [
      "/images/5. Choco vanilla/choco chip front angle.png",
      "/images/5. Choco vanilla/choco vanilla top angle.png",
      "/images/5. Choco vanilla/choco vanilla top angle.png"
    ],
    "rating": 4.7,
    "reviewsCount": 76,
    "isBestseller": false,
    "ingredients": [
      "Premium Cocoa",
      "Dark Chocolate",
      "Fresh Cream"
    ]
  },
  {
    "id": "chocolate-loaded",
    "name": "Chocolate Loaded",
    "prices": [
      {
        "id": "half",
        "weight": "Half Kg",
        "price": 600
      },
      {
        "id": "full",
        "weight": "1 Kg",
        "price": 1050
      }
    ],
    "images": [
      "/images/6. chocolate loaded/chocolate loaded front angle.png",
      "/images/6. chocolate loaded/chocolate loaded top angle.png",
      "/images/6. chocolate loaded/chocolate loaded down angle.png"
    ],
    "rating": 4.8,
    "reviewsCount": 93,
    "isBestseller": false,
    "ingredients": [
      "Premium Cocoa",
      "Dark Chocolate",
      "Fresh Cream"
    ]
  },
  {
    "id": "chocolate-loaded-butter-cream",
    "name": "Chocolate Loaded Butter Cream",
    "prices": [
      {
        "id": "half",
        "weight": "Half Kg",
        "price": 560
      },
      {
        "id": "full",
        "weight": "1 Kg",
        "price": 970
      }
    ],
    "images": [
      "/images/7. Chocolate loaded butter cream/chocolate loaded butter cream front angle.png",
      "/images/7. Chocolate loaded butter cream/chocolate loaded butter cream top angle.png",
      "/images/7. Chocolate loaded butter cream/chocolate loaded butter cream down angle.png"
    ],
    "rating": 4.3,
    "reviewsCount": 110,
    "isBestseller": false,
    "ingredients": [
      "Premium Cocoa",
      "Dark Chocolate",
      "Fresh Cream"
    ]
  },
  {
    "id": "tiramisu",
    "name": "Tiramisu",
    "prices": [
      {
        "id": "half",
        "weight": "Half Kg",
        "price": 650
      },
      {
        "id": "full",
        "weight": "1 Kg",
        "price": 1100
      }
    ],
    "images": [
      "/images/9. Tiramisu/tiramisu front angle.png",
      "/images/9. Tiramisu/tiramisu top angle.png",
      "/images/9. Tiramisu/tiramisu down angle.png"
    ],
    "rating": 4.4,
    "reviewsCount": 127,
    "isBestseller": false,
    "ingredients": [
      "Premium Cocoa",
      "Dark Chocolate",
      "Fresh Cream"
    ]
  }
];

export function getCakeById(id: string): Cake | undefined {
  return cakesData.find(cake => cake.id === id);
}
