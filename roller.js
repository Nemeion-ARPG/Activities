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
  } catch (error) {
    console.error("Error during roll:", error);
    itemResultDisplay.textContent = "⚠️ An error occurred during the roll.";
  }
});
