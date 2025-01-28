import { categories } from './items.js';

// Companions

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
  
  export function applyBoarEffect(boarCheckbox) {
    const bonuses = [];
    if (boarCheckbox?.checked) {
      const chance = Math.random();
      if (chance < 0.25) {
        const foragingItems = categories.foraging.filter(item => item.rarity >= 1 && item.rarity <= 5);
        if (foragingItems.length > 0) {
          const boarBonusItem = getWeightedRandomItem(foragingItems);
          bonuses.push(`🐗 Bonus Item (Boar): ${boarBonusItem}`);
        }
      }
    }
    return bonuses;
  }
  
  export function applyRaccoonEffect(raccoonCheckbox) {
    const bonuses = [];
    if (raccoonCheckbox?.checked) {
      const chance = Math.random();
      if (chance < 0.25) {
        const foragingItems = categories.foraging.filter(item => item.rarity >= 1 && item.rarity <= 5);
        if (foragingItems.length > 0) {
          const raccoonBonusItems = rollMultipleItems(foragingItems, 1, 2);
          bonuses.push(`🦝 Bonus Items (Raccoon): ${raccoonBonusItems.join(', ')}`);
        }
      }
    }
    return bonuses;
  }
  
  export function applyCrowEffect(crowCheckbox) {
    const bonuses = [];
    if (crowCheckbox?.checked) {
      const chance = Math.random();
      if (chance < 0.25) {
        const expeditionsItems = categories.expeditions.filter(item => item.rarity >= 1 && item.rarity <= 5);
        if (expeditionsItems.length > 0) {
          const crowBonusItem = getWeightedRandomItem(expeditionsItems);
          bonuses.push(`🐦 Bonus Item (Crow): ${crowBonusItem}`);
        }
      }
    }
    return bonuses;
  }
  
  export function applyHyenaEffect(hyenaCheckbox) {
    const bonuses = [];
    if (hyenaCheckbox?.checked) {
      const chance = Math.random();
      if (chance < 0.25) {
        const expeditionsItems = categories.expeditions.filter(item => item.rarity >= 1 && item.rarity <= 5);
        if (expeditionsItems.length > 0) {
          const hyenaBonusItems = rollMultipleItems(expeditionsItems, 1, 2);
          bonuses.push(`🦴 Bonus Items (Hyena): ${hyenaBonusItems.join(', ')}`);
        }
      }
    }
    return bonuses;
  }
  
  export function applyWeaselEffect(weaselCheckbox) {
    const bonuses = [];
    if (weaselCheckbox?.checked) {
      const chance = Math.random();
      if (chance < 0.25) {
        const expeditionsItems = categories.expeditions.filter(item => item.rarity >= 1 && item.rarity <= 5);
        if (expeditionsItems.length > 0) {
          const weaselBonusItem = getWeightedRandomItem(expeditionsItems);
          bonuses.push(`🪶 Bonus Item (Weasel): ${weaselBonusItem}`);
        }
      }
    }
    return bonuses;
  }
  
  export function applyCougarEffect(cougarCheckbox) {
    const bonuses = [];
    if (cougarCheckbox?.checked) {
      const chance = Math.random();
      if (chance < 0.25) {
        const fishingItems = categories.fishing.filter(item => item.rarity >= 1 && item.rarity <= 5);
        if (fishingItems.length > 0) {
          const cougarBonusItems = rollMultipleItems(fishingItems, 1, 2);
          bonuses.push(`🐾 Bonus Items (Cougar): ${cougarBonusItems.join(', ')}`);
        }
      }
    }
    return bonuses;
  }
  
  export function applyCrocodileEffect(crocodileCheckbox) {
    const bonuses = [];
    if (crocodileCheckbox?.checked) {
      const chance = Math.random();
      if (chance < 0.25) {
        const fishingItems = categories.fishing.filter(item => item.rarity >= 1 && item.rarity <= 5);
        if (fishingItems.length > 0) {
          const crocodileBonusItem = getWeightedRandomItem(fishingItems);
          bonuses.push(`🐊 Bonus Item (Crocodile): ${crocodileBonusItem}`);
        }
      }
    }
    return bonuses;
  }
  
  export function applyHoundEffect(houndCheckbox) {
    const bonuses = [];
    if (houndCheckbox?.checked) {
      const chance = Math.random();
      if (chance < 0.25) {
        const fishingItems = categories.fishing.filter(item => item.rarity >= 1 && item.rarity <= 5);
        if (fishingItems.length > 0) {
          const houndBonusItem = getWeightedRandomItem(fishingItems);
          bonuses.push(`🐕 Bonus Item (Hound): ${houndBonusItem}`);
        }
      }
    }
    return bonuses;
  }
  
  export function applyFalconEffect(falconCheckbox) {
    const bonuses = [];
    if (falconCheckbox?.checked) {
      const chance = Math.random();
      if (chance < 0.25) {
        const huntingItems = categories.hunting.filter(item => item.rarity >= 1 && item.rarity <= 5);
        if (huntingItems.length > 0) {
          const falconBonusItem = getWeightedRandomItem(huntingItems);
          bonuses.push(`🦅 Bonus Item (Falcon): ${falconBonusItem}`);
        }
      }
    }
    return bonuses;
  }
  
  export function applyMastiffEffect(mastiffCheckbox) {
    const bonuses = [];
    if (mastiffCheckbox?.checked) {
      const chance = Math.random();
      if (chance < 0.25) {
        const huntingItems = categories.hunting.filter(item => item.rarity >= 1 && item.rarity <= 5);
        if (huntingItems.length > 0) {
          const mastiffBonusItems = rollMultipleItems(huntingItems, 1, 2);
          bonuses.push(`🐕‍🦺 Bonus Items (Mastiff): ${mastiffBonusItems.join(', ')}`);
        }
      }
    }
    return bonuses;
  }
  
  export function applyLynxEffect(lynxCheckbox) {
    const bonuses = [];
    if (lynxCheckbox?.checked) {
      const chance = Math.random();
      if (chance < 0.25) {
        const huntingItems = categories.hunting.filter(item => item.rarity >= 1 && item.rarity <= 5);
        if (huntingItems.length > 0) {
          const lynxBonusItem = getWeightedRandomItem(huntingItems);
          bonuses.push(`🐈‍⬛ Bonus Item (Lynx): ${lynxBonusItem}`);
        }
      }
    }
    return bonuses;
  }
  
  export function applySnakeEffect(snakeCheckbox) {
    const bonuses = [];
    if (snakeCheckbox?.checked) {
      const chance = Math.random();
      if (chance < 0.25) {
        const crusadesItems = categories.crusades.filter(item => item.rarity >= 1 && item.rarity <= 5);
        if (crusadesItems.length > 0) {
          const snakeBonusItem = getWeightedRandomItem(crusadesItems);
          bonuses.push(`Bonus Item (Snake): ${snakeBonusItem}`);
        }
      }
    }
    return bonuses;
  }
  
  export function applyWolfEffect(wolfCheckbox) {
    const bonuses = [];
    if (wolfCheckbox?.checked) {
      const chance = Math.random();
      if (chance < 0.25) {
        const crusadesItems = categories.crusades.filter(item => item.rarity >= 1 && item.rarity <= 5);
        if (crusadesItems.length > 0) {
          const wolfBonusItems = rollMultipleItems(crusadesItems, 1, 2);
          bonuses.push(`🐺 Bonus Items (Wolf): ${wolfBonusItems.join(', ')}`);
        }
      }
    }
    return bonuses;
  }
  
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

  // Equipment

  export function applyBowEffect(bowCheckbox) {
    const bonuses = [];
    if (bowCheckbox?.checked) {
      const chance = Math.random();
      if (chance < 0.25) {
        const huntingItems = categories.hunting.filter(item => item.rarity >= 1 && item.rarity <= 5);
        if (huntingItems.length > 0) {
          const bowBonusItem = getWeightedRandomItem(huntingItems);
          bonuses.push(`Bonus Item (Bow): ${bowBonusItem}`);
        }
      }
    }
    return bonuses;
  }

  export function applySnareEffect(snareCheckbox) {
    const bonuses = [];
    if (snareCheckbox?.checked) {
      const chance = Math.random();
      if (chance < 0.25) {
        const huntingItems = categories.hunting.filter(item => item.rarity >= 1 && item.rarity <= 5);
        if (huntingItems.length > 0) {
          const snareBonusItems = rollMultipleItems(huntingItems, 1, 2);
          bonuses.push(`Bonus Items (Snare): ${snareBonusItems.join(', ')}`);
        }
      }
    }
    return bonuses;
  }

  export function applyMapEffect(mapCheckbox) {
    const bonuses = [];
    if (mapCheckbox?.checked) {
      const chance = Math.random();
      if (chance < 0.25) {
        const expeditionsItems = categories.expeditions.filter(item => item.rarity >= 1 && item.rarity <= 5);
        if (expeditionsItems.length > 0) {
          const mapBonusItem = getWeightedRandomItem(expeditionsItems);
          bonuses.push(`Bonus Item (Map): ${mapBonusItem}`);
        }
      }
    }
    return bonuses;
  }

  export function applySatchelEffect(satchelCheckbox) {
    const bonuses = [];
    if (satchelCheckbox?.checked) {
      const chance = Math.random();
      if (chance < 0.25) {
        const expeditionsItems = categories.expeditions.filter(item => item.rarity >= 1 && item.rarity <= 5);
        if (expeditionsItems.length > 0) {
          const satchelBonusItems = rollMultipleItems(expeditionsItems, 1, 2);
          bonuses.push(`🐕‍🦺 Bonus Items (Satchel): ${satchelBonusItems.join(', ')}`);
        }
      }
    }
    return bonuses;
  }

  export function applyFishingRodEffect(fishingrodCheckbox) {
    const bonuses = [];
    if (fishingrodCheckbox?.checked) {
      const chance = Math.random();
      if (chance < 0.25) {
        const fishingItems = categories.fishing.filter(item => item.rarity >= 1 && item.rarity <= 5);
        if (fishingItems.length > 0) {
          const fishingrodBonusItem = getWeightedRandomItem(fishingItems);
          bonuses.push(`Bonus Item (Fishing Rod): ${fishingrodBonusItem}`);
        }
      }
    }
    return bonuses;
  }

  export function applyLureEffect(lureCheckbox) {
    const bonuses = [];
    if (lureCheckbox?.checked) {
      const chance = Math.random();
      if (chance < 0.25) {
        const fishingItems = categories.fishing.filter(item => item.rarity >= 1 && item.rarity <= 5);
        if (fishingItems.length > 0) {
          const lureBonusItems = rollMultipleItems(fishingItems, 1, 2);
          bonuses.push(`Bonus Items (Lure): ${lureBonusItems.join(', ')}`);
        }
      }
    }
    return bonuses;
  }

  export function applyAxeEffect(axeCheckbox) {
    const bonuses = [];
    if (axeCheckbox?.checked) {
      const chance = Math.random();
      if (chance < 0.25) {
        const foragingItems = categories.foraging.filter(item => item.rarity >= 1 && item.rarity <= 5);
        if (foragingItems.length > 0) {
          const axeBonusItem = getWeightedRandomItem(foragingItems);
          bonuses.push(`Bonus Item (Axe): ${axeBonusItem}`);
        }
      }
    }
    return bonuses;
  }

  export function applyBasketEffect(basketCheckbox) {
    const bonuses = [];
    if (basketCheckbox?.checked) {
      const chance = Math.random();
      if (chance < 0.25) {
        const foragingItems = categories.foraging.filter(item => item.rarity >= 1 && item.rarity <= 5);
        if (foragingItems.length > 0) {
          const basketBonusItems = rollMultipleItems(foragingItems, 1, 2);
          bonuses.push(`Bonus Items (Basket): ${basketBonusItems.join(', ')}`);
        }
      }
    }
    return bonuses;
  }

  export function applyRopeEffect(ropeCheckbox) {
    const bonuses = [];
    if (ropeCheckbox?.checked) {
      const chance = Math.random();
      if (chance < 0.25) {
        const cavingItems = categories.caving.filter(item => item.rarity >= 1 && item.rarity <= 5);
        if (cavingItems.length > 0) {
          const ropeBonusItem = getWeightedRandomItem(cavingItems);
          bonuses.push(`Bonus Item (Rope): ${ropeBonusItem}`);
        }
      }
    }
    return bonuses;
  }

  export function applyPickEffect(pickCheckbox) {
    const bonuses = [];
    if (pickCheckbox?.checked) {
      const chance = Math.random();
      if (chance < 0.25) {
        const cavingItems = categories.caving.filter(item => item.rarity >= 1 && item.rarity <= 5);
        if (cavingItems.length > 0) {
          const pickBonusItems = rollMultipleItems(cavingItems, 1, 2);
          bonuses.push(`Bonus Items (Pickaxe): ${pickBonusItems.join(', ')}`);
        }
      }
    }
    return bonuses;
  }

  export function applyKopisEffect(kopisCheckbox) {
    const bonuses = [];
    if (kopisCheckbox?.checked) {
      const chance = Math.random();
      if (chance < 0.25) {
        const crusadesItems = categories.crusades.filter(item => item.rarity >= 1 && item.rarity <= 5);
        if (crusadesItems.length > 0) {
          const kopisBonusItem = getWeightedRandomItem(crusadesItems);
          bonuses.push(`Bonus Item (Kopis Sword): ${kopisBonusItem}`);
        }
      }
    }
    return bonuses;
  }

  export function applyShieldEffect(shieldCheckbox) {
    const bonuses = [];
    if (shieldCheckbox?.checked) {
      const chance = Math.random();
      if (chance < 0.25) {
        const crusadesItems = categories.crusades.filter(item => item.rarity >= 1 && item.rarity <= 5);
        if (crusadesItems.length > 0) {
          const shieldBonusItems = rollMultipleItems(crusadesItems, 1, 2);
          bonuses.push(`Bonus Items (Shield): ${shieldBonusItems.join(', ')}`);
        }
      }
    }
    return bonuses;
  }

  // Item Rarity Math
  
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
  