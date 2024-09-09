---
sidebar_position: 7
---

# Blueprints

Blueprints are a way to craft specific items within your server that should be a challenge to obtain. This could be a weapon, a vehicle, or any other item that you want to make sure is not easily obtainable, the player will need to obtain this blueprint in order to craft the item (you will have to intergrate this, we do not provide this however you can see examples below).

## Creating a blueprint

When you create a blueprint you have a number of options to consider, the first being the bench in which you want to be able to use this blueprint on, the second being the item in which you want to be able to craft, and the third being the requirements in which you need to obtain in order to craft this item.

### Adding a blueprint

You should follow this format and change it around to suit your needs

```py title="config/item_blueprints.lua"
{
    blueprintId = 'blueprint_lockpick',
    id = 99991,
    itemName = 'lockpick',
    name = 'Lockpick',
    image = 'https://cfx-nui-qb-inventory/html/images/lockpick.png',
    category = 'blueprints', -- DONT TOUCH THIS!!!
    type = 'blueprint', -- DONT TOUCH THIS!!!
    description = 'Blueprints for a lockpick',
    craftingTime = 20,
    requiredItems = {
        {
            itemName = 'goldbar',
            name = 'Gold Bars',
            amount = 2,
            myAmount = 2,
            image = 'https://cfx-nui-qb-inventory/html/images/goldbar.png',
        },
    },
},
```

After you have added this to your retrospective bench type add it to here (the blueprintId will also be the item name):

```py title="config/bench_blueprints.lua"
items = {
    'blueprint_lockpick',
    ...blueprintIds here...
},
```

### Creating the blueprint item

You will then need to create the blueprint item so it is useable, there is a template below for you to use:

```py
blueprint_lockpick           = {name = 'blueprint_NAMEHERE', label = 'LABEL HERE', weight = 100, type = 'item', image = 'blueprint.png', unique = false, useable = true, shouldClose = true, combinable = nil, description = 'DESCRIPTION HERE'},
```

### Giving the user the blueprint

You can give this a number of ways such as our soon to release gangsystem gives it to them when they purchase it with reputation points, however you can do it a number of ways such as a quest system etc etc.

You will just need to use your retrospective inventory system to give the user the blueprint item which is above.
