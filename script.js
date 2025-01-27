import { items } from './items.js';
import { textData } from './text.js';

document.getElementById('rollItem').addEventListener('click', () => {
  const selectedCategory = document.querySelector('input[name="category"]:checked').value;
  const resultBox = document.getElementById('resultBox');
  const textResult = document.getElementById('textResult');
  const itemResult = document.getElementById('itemResult');

  // Clear previous results
  textResult.textContent = '';
  itemResult.textContent = '';

  // Display text results based on selected category
  const categoryText = textData[selectedCategory];
  if (categoryText) {
    textResult.textContent = categoryText[Math.floor(Math.random() * categoryText.length)];
  }

  // Check if "Bear" checkbox is selected
  const bearCheckbox = document.getElementById('bearCheckbox');
  if (bearCheckbox.checked && selectedCategory === 'foraging') {
    const randomChance = Math.random();
    if (randomChance <= 0.25) {
      const foragingItems = items['foraging'].filter(item => item.rarity >= 1 && item.rarity <= 5);
      const randomItem = foragingItems[Math.floor(Math.random() * foragingItems.length)];
      itemResult.textContent = `Bear Bonus Item: ${randomItem.name}`;
      return;
    }
  }

  // Determine number of items to roll (1-3)
  const itemCount = Math.floor(Math.random() * 3) + 1;
  const categoryItems = items[selectedCategory];

  if (categoryItems && categoryItems.length > 0) {
    const rolledItems = [];

    for (let i = 0; i < itemCount; i++) {
      const totalWeight = categoryItems.reduce((sum, item) => sum + item.rarity, 0);
      let randomWeight = Math.random() * totalWeight;

      for (const item of categoryItems) {
        randomWeight -= item.rarity;
        if (randomWeight <= 0) {
          rolledItems.push(item.name);
          break;
        }
      }
    }

    itemResult.textContent = `Items Rolled: ${rolledItems.join(', ')}`;
  } else {
    itemResult.textContent = 'No items available in this category.';
  }
});
