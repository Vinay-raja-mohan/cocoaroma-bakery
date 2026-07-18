const fs = require('fs');
const path = require('path');

const prices = {
  "Black forest": { small: 525, large: 930 },
  "Almond chocolate": { small: 600, large: 1050 },
  "Cappuccino chocolate": { small: 600, large: 1050 },
  "Choco chip": { small: 530, large: 950 },
  "Choco vanilla": { small: 450, large: 880 },
  "chocolate loaded": { small: 600, large: 1050 },
  "Chocolate loaded butter cream": { small: 560, large: 970 },
  "Tiramisu": { small: 650, large: 1100 },
  "mango super king": { small: 450, large: 800 },
  "Butterscotch": { small: 450, large: 850 },
  "Butterscotch chocolate": { small: 450, large: 800 },
  "strawberry": { small: 420, large: 800 },
  "white forest": { small: 500, large: 950 },
  "White chocolate": { small: 550, large: 1000 },
  "kiwi Delight": { small: 450, large: 800 },
  "Royale truffle": { small: 650, large: 1050 },
  "ferrero rocher": { small: 600, large: 1100 },
  "rabdi pista almond": { small: 630, large: 1150 },
  "rasagulla": { small: 600, large: 1100 },
  "rasmalai": { small: 700, large: 1300 },
  "red velvet": { small: 550, large: 1030 },
  "beloved": { small: 1300, large: 1500 },
  "sweet heart": { small: 1300, large: 1500 },
  "pineapple": { small: 420, large: 800 },
  "belgium chocolate": { small: 650, large: 1100 },
  "choco praline": { small: 600, large: 1050 },
  "Choco cream": { small: 530, large: 950 },
  "white willow": { small: 550, large: 1000 },
  "magic moment": { small: 600, large: 1050 },
  "oreo chocolate": { small: 600, large: 1050 },
  "honey almond": { small: 600, large: 1050 },
  "loaded roacher": { small: 600, large: 1100 }
};

const bestsellers = ['rabdi pista almond', 'rasagulla', 'rasmalai', 'red velvet'];

const randomRating = (seed) => (4.3 + (seed % 6) * 0.1).toFixed(1);
const randomReviews = (seed) => 50 + (seed * 17) % 150;

const getIngredients = (name) => {
  const ingredients = [];
  const lower = name.toLowerCase();
  
  if (lower.includes('rabdi') || lower.includes('rasagulla') || lower.includes('rasmalai')) {
    ingredients.push('Rich Rabdi', 'Saffron', 'Pistachios');
  } else if (lower.includes('chocolate') || lower.includes('choco') || lower.includes('truffle') || lower.includes('tiramisu')) {
    ingredients.push('Premium Cocoa', 'Dark Chocolate', 'Fresh Cream');
  } else if (lower.includes('fruit') || lower.includes('mango') || lower.includes('kiwi') || lower.includes('pineapple') || lower.includes('strawberry')) {
    ingredients.push('Fresh Fruits', 'Real Fruit Crush', 'Fresh Cream');
  } else if (lower.includes('butterscotch')) {
    ingredients.push('Caramel', 'Praline Nuts', 'Fresh Cream');
  } else if (lower.includes('pista') || lower.includes('almond') || lower.includes('dry fruit') || lower.includes('rocher')) {
    ingredients.push('Roasted Nuts', 'Premium Dry Fruits', 'Fresh Cream');
  } else if (lower.includes('velvet')) {
    ingredients.push('Cream Cheese', 'Soft Sponge', 'Red Velvet Crumbs');
  } else {
    ingredients.push('Vanilla Extract', 'Soft Sponge', 'Fresh Cream');
  }
  
  return ingredients.slice(0, 3);
};

const imagesDir = path.join(__dirname, 'public/images');
const folders = fs.readdirSync(imagesDir, { withFileTypes: true })
  .filter(dirent => {
    if (!dirent.isDirectory()) return false;
    const name = dirent.name.toLowerCase();
    if (name.includes('missing') || name.includes('misssing')) return false;
    if (name.includes('logo') || name.includes('all topped chocolate')) return false;
    return true;
  })
  .map(dirent => dirent.name);

const cakes = folders.map((folder, index) => {
  const match = folder.match(/^\d+(?:\s*-\s*\d+)?\.?\s*(.+)$/i);
  let nameKey = match ? match[1].trim() : folder;
  
  if (nameKey.toLowerCase() === 'magic moments') {
    nameKey = 'Magic Moment';
  }
  
  const lookupKey = Object.keys(prices).find(k => k.toLowerCase() === nameKey.toLowerCase());
  const priceData = prices[lookupKey] || { small: 500, large: 1000 };
  
  const files = fs.readdirSync(path.join(imagesDir, folder));
  const front = files.find(f => f.includes('front')) || files[0];
  const top = files.find(f => f.includes('top')) || files[1] || files[0];
  const down = files.find(f => f.includes('down')) || files[2] || files[0];
  
  const slug = nameKey.toLowerCase().replace(/[^a-z0-9]+/g, '-');
  
  const isBestseller = bestsellers.some(b => nameKey.toLowerCase().includes(b));
  
  return {
    id: slug,
    name: nameKey.split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()).join(' '),
    prices: [
      { id: 'half', weight: 'Half Kg', price: priceData.small },
      { id: 'full', weight: '1 Kg', price: priceData.large }
    ],
    images: [
      `/images/${folder}/${front}`,
      `/images/${folder}/${top}`,
      `/images/${folder}/${down}`
    ],
    rating: parseFloat(randomRating(index)),
    reviewsCount: randomReviews(index),
    isBestseller: isBestseller,
    ingredients: getIngredients(nameKey)
  };
});

const content = `export interface SizeOption {
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

export const cakesData: Cake[] = ${JSON.stringify(cakes, null, 2)};

export function getCakeById(id: string): Cake | undefined {
  return cakesData.find(cake => cake.id === id);
}
`;

fs.writeFileSync(path.join(__dirname, 'src/data/cakes.ts'), content);
console.log('Cakes data regenerated with new fields successfully!');
