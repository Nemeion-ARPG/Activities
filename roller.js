import { categories } from './items.js';
import { categoryTexts } from './text.js';
import { applyBearEffect, applyBoarEffect, applyRaccoonEffect } from './effects.js';

const rollItemButton = document.getElementById('rollItem');
const textResultDisplay = document.getElementById('textResult');
const itemResultDisplay = document.getElementById('itemResult');

const bearCheckbox = document.getElementById('bearCheckbox');
const boarCheckbox = document.getElementById('boarCheckbox');
const raccoonCheckbox = document.getElementById('raccoonCheckbox');

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

  // Fetch text for category
  const textForCategory = categoryTexts[selectedCategory] || ["No description available."];
  const randomTextIndex = Math.floor(Math.random() * textForCategory.length);
  textResultDisplay.textContent = textForCategory[randomTextIndex];

  // Roll items
  const items = categories[selectedCategory] || [];
  if (items.length > 0) {
    const regularItems = rollMultipleItems(items);

    // Apply effects
    const bearBonuses = applyBearEffect(bearCheckbox);
    const boarBonuses = applyBoarEffect(boarCheckbox);
    const raccoonBonuses = applyRaccoonEffect(raccoonCheckbox);

    // Create a vertical list of items
    let resultText = regularItems.map(item => `<li>${item}</li>`).join('');
    const bonuses = [...bearBonuses, ...boarBonuses, ...raccoonBonuses];
    if (bonuses.length > 0) {
      resultText += bonuses.map(bonus => `<li>${bonus}</li>`).join('');
    }
    
    itemResultDisplay.innerHTML = `<ul>${resultText}</ul>`;
  } else {
    itemResultDisplay.textContent = '⚠️ No items available!';
  }
});
