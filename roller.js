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

const rollItemButton = document.getElementById('rollItem');
const textResultDisplay = document.getElementById('textResult');
const itemResultDisplay = document.getElementById('itemResult');

const bearCheckbox = document.getElementById('bearCheckbox');
const boarCheckbox = document.getElementById('boarCheckbox');
const raccoonCheckbox = document.getElementById('raccoonCheckbox');
const crowCheckbox = document.getElementById('crowCheckbox');
const hyenaCheckbox = document.getElementById('hyenaCheckbox');
const weaselCheckbox = document.getElementById('weaselCheckbox');
const cougarCheckbox = document.getElementById('cougarCheckbox');
const crocodileCheckbox = document.getElementById('crocodileCheckbox');
const houndCheckbox = document.getElementById('houndCheckbox');
const falconCheckbox = document.getElementById('falconCheckbox');
const mastiffCheckbox = document.getElementById('mastiffCheckbox');
const lynxCheckbox = document.getElementById('lynxCheckbox');
const snakeCheckbox = document.getElementById('snakeCheckbox');
const wolfCheckbox = document.getElementById('wolfCheckbox');
const horseCheckbox = document.getElementById('horseCheckbox');

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
    const crowBonuses = applyCrowEffect(crowCheckbox);
    const hyenaBonuses = applyHyenaEffect(hyenaCheckbox);
    const weaselBonuses = applyWeaselEffect(weaselCheckbox);
    const cougarBonuses = applyCougarEffect(cougarCheckbox);
    const crocodileBonuses = applyCrocodileEffect(crocodileCheckbox);
    const houndBonuses = applyHoundEffect(houndCheckbox);
    const falconBonuses = applyFalconEffect(falconCheckbox);
    const mastiffBonuses = applyMastiffEffect(mastiffCheckbox);
    const lynxBonuses = applyLynxEffect(lynxCheckbox);
    const snakeBonuses = applySnakeEffect(snakeCheckbox);
    const wolfBonuses = applyWolfEffect(wolfCheckbox);
    const horseBonuses = applyHorseEffect(horseCheckbox);

    // Combine results
    let resultText = regularItems.map(item => `<li>${item}</li>`).join('');
    const allBonuses = [
      ...bearBonuses,
      ...boarBonuses,
      ...raccoonBonuses,
      ...crowBonuses,
      ...hyenaBonuses,
      ...weaselBonuses,
      ...cougarBonuses,
      ...crocodileBonuses,
      ...houndBonuses,
      ...falconBonuses,
      ...mastiffBonuses,
      ...lynxBonuses,
      ...snakeBonuses,
      ...wolfBonuses,
      ...horseBonuses
    ];

    if (allBonuses.length > 0) {
      resultText += allBonuses.map(bonus => `<li>${bonus}</li>`).join('');
    }

    itemResultDisplay.innerHTML = `<ul>${resultText}</ul>`;
  } else {
    itemResultDisplay.textContent = '⚠️ No items available!';
  }
});
