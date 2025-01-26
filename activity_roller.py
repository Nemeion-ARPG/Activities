import random

# Items
items = [
    "Sword",
    "Shield",
    "Fish",
    "Frog"
]

# Roll Item
def roll_item():
    return random.choice(items)

# Run the Function
if __name__ =="__main__":
    rolled_item = roll_item()
    print(f"the randomly rolled item is: {rolled_item}")    