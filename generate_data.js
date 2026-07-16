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
  "sweet heart": { small: 1300, large: 1500 }
};

const imagesDir = path.join(__dirname, 'public/images');
const folders = fs.readdirSync(imagesDir, { withFileTypes: true })
  .filter(dirent => dirent.isDirectory() && !dirent.name.toLowerCase().includes('missing'))
  .map(dirent => dirent.name);

const cakes = folders.map(folder => {
  const match = folder.match(/^\d+(?:\s*-\s*\d+)?\.?\s*(.+)$/i);
  let nameKey = match ? match[1].trim() : folder;
  
  const lookupKey = Object.keys(prices).find(k => k.toLowerCase() === nameKey.toLowerCase());
  const priceData = prices[lookupKey] || { small: 500, large: 1000 };
  
  const files = fs.readdirSync(path.join(imagesDir, folder));
  const front = files.find(f => f.includes('front')) || files[0];
  const top = files.find(f => f.includes('top')) || files[1] || files[0];
  const down = files.find(f => f.includes('down')) || files[2] || files[0];
  
  const slug = nameKey.toLowerCase().replace(/[^a-z0-9]+/g, '-');
  
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
    ]
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
}

export const cakesData: Cake[] = ${JSON.stringify(cakes, null, 2)};

export function getCakeById(id: string): Cake | undefined {
  return cakesData.find(cake => cake.id === id);
}
`;

fs.writeFileSync(path.join(__dirname, 'src/data/cakes.ts'), content);
console.log('Cakes data generated successfully!');
