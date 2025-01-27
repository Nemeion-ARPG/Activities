export function applyBearEffect(bearCheckbox) {
    const bonuses = [];
    if (bearCheckbox?.checked) {
      const chance = Math.random();
      if (chance < 0.25) {
        const foragingItems = categories.foraging.filter(item => item.rarity >= 1 && item.rarity <= 5);
        if (foragingItems.length > 0) {
          const bearBonusItem = getWeightedRandomItem(foragingItems);
          bonuses.push(`🐻 Bonus Item (Bear): ${bearBonusItem}`);
        }
      }
    }
    return bonuses;
  }
  
  // Repeat for all effects with similar structure (e.g., applyBoarEffect, applyRaccoonEffect)
  
  export function applyHorseEffect(horseCheckbox) {
    const bonuses = [];
    if (horseCheckbox?.checked) {
      const chance = Math.random();
      if (chance < 0.25) {
        const crusadesItems = categories.crusades.filter(item => item.rarity >= 1 && item.rarity <= 5);
        if (crusadesItems.length > 0) {
          const horseBonusItem = getWeightedRandomItem(crusadesItems);
          bonuses.push(`🐎 Bonus Item (Horse): ${horseBonusItem}`);
        }
      }
    }
    return bonuses;
  }
  
  function getWeightedRandomItem(items) {
    const weightedItems = items.flatMap(item => Array(item.rarity).fill(item.name));
    const randomIndex = Math.floor(Math.random() * weightedItems.length);
    return weightedItems[randomIndex];
  }
  
  function rollMultipleItems(items, min = 1, max = 2) {
    const numberOfItems = Math.floor(Math.random() * (max - min + 1)) + min;
    const results = [];
    for (let i = 0; i < numberOfItems; i++) {
      results.push(getWeightedRandomItem(items));
    }
    return results;
  }
  