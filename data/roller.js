import { categories } from './data/items.js';
import { categoryTexts } from './data//text.js';

const rollItemButton = document.getElementById('rollItem');
const textResultDisplay = document.getElementById('textResult');
const itemResultDisplay = document.getElementById('itemResult');

function getWeightedRandomItem(items) {
  const weightedItems = items.flatMap(item => Array(item.rarity).fill(item.name));
  const randomIndex = Math.floor(Math.random() * weightedItems.length);
  return weightedItems[randomIndex];
}

function rollMultipleItems(items, min = 1, max = 3) {
  const numberOfItems = Math.floor(Math.random() * (max - min + 1)) + min;
  const results = [];
  for (let i = 0; i < numberOfItems; i++) {
    results.push(getWeightedRandomItem(items));
  }
  return results;
}

rollItemButton.addEventListener('click', () => {
  const selectedCategory = document.querySelector('input[name="category"]:checked').value;
  const items = categories[selectedCategory];
  const text = categoryTexts[selectedCategory];

  textResultDisplay.textContent = text;

  const rolledItems = rollMultipleItems(items);
  itemResultDisplay.textContent = rolledItems.join(', ');
});
