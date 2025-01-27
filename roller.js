import { categories } from './items.js';
import { categoryTexts } from './text.js';
import {
  applyBearEffect,
  applyBoarEffect,
  applyRaccoonEffect,
  applyCrowEffect,
  applyHyenaEffect,
  applyWeaselEffect,
  applyCougarEffect,
  applyCrocodileEffect,
  applyHoundEffect,
  applyFalconEffect,
  applyMastiffEffect,
  applyLynxEffect,
  applySnakeEffect,
  applyWolfEffect,
  applyHorseEffect
} from './effects.js';

document.addEventListener('DOMContentLoaded', () => {
  const rollItemButton = document.getElementById('rollItem');
  const textResultDisplay = document.getElementById('textResult');
  const itemResultDisplay = document.getElementById('itemResult');

  const checkboxes = {
    bear: document.getElementById('bearCheckbox'),
    boar: document.getElementById('boarCheckbox'),
    raccoon: document.getElementById('raccoonCheckbox'),
    crow: document.getElementById('crowCheckbox'),
    hyena: document.getElementById('hyenaCheckbox'),
    weasel: document.getElementById('weaselCheckbox'),
    cougar: document.getElementById('cougarCheckbox'),
    crocodile: document.getElementById('crocodileCheckbox'),
    hound: document.getElementById('houndCheckbox'),
    falcon: document.getElementById('falconCheckbox'),
    mastiff: document.getElementById('mastiffCheckbox'),
    lynx: document.getElementById('lynxCheckbox'),
    snake: document.getElementById('snakeCheckbox'),
    wolf: document.getElementById('wolfCheckbox'),
    horse: document.getElementById('horseCheckbox')
  };

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
    try {
      const selectedCategory = document.querySelector('input[name="category"]:checked')?.value;

      // Error handling if no category is selected
      if (!selectedCategory) {
        textResultDisplay.textContent = "⚠️ Please select a category!";
        itemResultDisplay.textContent = "";
        return;
      }

      // Fetch text for category
      const textForCategory = categoryTexts[selectedCategory] || ["No description available."];
      const randomTextIndex = Math.floor(Math.random() * textForCategory.length);
      textResultDisplay.textContent = textForCategory[randomTextIndex];

      // Roll items
      const items = categories[selectedCategory] || [];
      if (items.length > 0) {
        const regularItems = rollMultipleItems(items);

        // Apply effects
        const allBonuses = [
          ...applyBearEffect(checkboxes.bear),
          ...applyBoarEffect(checkboxes.boar),
          ...applyRaccoonEffect(checkboxes.raccoon),
          ...applyCrowEffect(checkboxes.crow),
          ...applyHyenaEffect(checkboxes.hyena),
          ...applyWeaselEffect(checkboxes.weasel),
          ...applyCougarEffect(checkboxes.cougar),
          ...applyCrocodileEffect(checkboxes.crocodile),
          ...applyHoundEffect(checkboxes.hound),
          ...applyFalconEffect(checkboxes.falcon),
          ...applyMastiffEffect(checkboxes.mastiff),
          ...applyLynxEffect(checkboxes.lynx),
          ...applySnakeEffect(checkboxes.snake),
          ...applyWolfEffect(checkboxes.wolf),
          ...applyHorseEffect(checkboxes.horse)
        ];

        // Combine results
        let resultText = regularItems.map(item => `<li>${item}</li>`).join('');
        if (allBonuses.length > 0) {
          resultText += allBonuses.map(bonus => `<li>${bonus}</li>`).join('');
        }

        itemResultDisplay.innerHTML = `<ul>${resultText}</ul>`;
      } else {
        itemResultDisplay.textContent = '⚠️ No items available!';
      }
    } catch (error) {
      console.error("Error during roll:", error);
      itemResultDisplay.textContent = "⚠️ An error occurred during the roll.";
    }
  });
});
