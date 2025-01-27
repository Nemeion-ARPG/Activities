import { categories } from './items.js';
import { categoryTexts } from './text.js';

const rollItemButton = document.getElementById('rollItem');
const textResultDisplay = document.getElementById('textResult');
const itemResultDisplay = document.getElementById('itemResult');

const bearCheckbox = document.getElementById('bearCheckbox');

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

  if (bearCheckbox.checked) {
    const chance = Math.random();
    if (chance < 0.25) {
      const foragingItems = categories.foraging.filter(item => item.rarity >= 1 && item.rarity <= 5);
      if (foragingItems.length > 0) {
        const bearBonusItem = getWeightedRandomItem(foragingItems);
        return {
          regularItems: results,
          bearBonus: bearBonusItem
        };
      }
    }
  }

  return { regularItems: results };
}

rollItemButton.addEventListener('click', () => {
  const selectedCategory = document.querySelector('input[name="category"]:checked').value;

  // Fetch text for category
  const textForCategory = categoryTexts[selectedCategory] || ["No description available."];
  const randomTextIndex = Math.floor(Math.random() * textForCategory.length);
  textResultDisplay.textContent = textForCategory[randomTextIndex];

  // Roll items
  const items = categories[selectedCategory] || [];
  if (items.length > 0) {
    const { regularItems, bearBonus } = rollWithBearEffect(items);
    let resultText = `🎲 Rolled Items: ${regularItems.join(', ')}`;
    if (bearBonus) {
      resultText += `\n🐻 Bonus Item (Bear): ${bearBonus}`;
    }
    itemResultDisplay.textContent = resultText;
  } else {
    itemResultDisplay.textContent = '⚠️ No items available!';
  }
});
