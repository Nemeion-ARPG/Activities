import { categories } from './items.js';
import { categoryTexts } from './text.js';

const rollItemButton = document.getElementById('rollItem');
const textResultDisplay = document.getElementById('textResult');
const itemResultDisplay = document.getElementById('itemResult');

const bearCheckbox = document.querySelector('details:nth-child(1) input[type="checkbox"]:first-child');

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

function rollWithBearEffect(items) {
  const results = rollMultipleItems(items);
  
  // Add Bear effect
  if (bearCheckbox.checked) {
    const chance = Math.random();
    if (chance < 0.25) { // 25% chance
      const foragingItems = categories.foraging.filter(item => item.rarity >= 1 && item.rarity <= 5);
      if (foragingItems.length > 0) {
        const bearItem = getWeightedRandomItem(foragingItems);
        results.push(`🐻 Bonus Item (Bear): ${bearItem}`);
      }
    }
  }

  return results;
}

rollItemButton.addEventListener('click', () => {
  const selectedCategory = document.querySelector('input[name="category"]:checked').value;
  const items = categories[selectedCategory] || [];

  // Get predetermined text for the selected category
  const categoryText = categoryTexts[selectedCategory] || [];
  const randomTextIndex = Math.floor(Math.random() * categoryText.length);
  const randomText = categoryText[randomTextIndex] || "No description available.";

  // Display predetermined text
  textResultDisplay.textContent = randomText;

  if (items.length > 0) {
    const rolledItems = rollWithBearEffect(items);
    itemResultDisplay.textContent = `🎲 Rolled Items: ${rolledItems.join(', ')}`;
  } else {
    itemResultDisplay.textContent = '⚠️ No items available!';
  }
});
