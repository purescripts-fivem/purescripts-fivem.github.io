---
sidebar_position: 9
---

# FAQs

## I want to make it so there is only one bench type

First change the bench items table to just this (This will utilize the main bench type but use the weapon bench so you do not have to create another new item):

```lua title="config/config.lua"
benchItems = {
    {itemName = 'weapon_bench', type = 'main'},
},

```

Then change the `item_blueprints.lua` file around so that the table `Config.blueprints.ids` only contains the `main` instead of `misc` and `weapon`:

```lua title="config/item_blueprints.lua"
Config.blueprints = {
    ids = {
        main = {...},
    }
},
```

Then change the `items.lua` file around so that the table `Config.items` only contains the `main` instead of `misc` and `weapon`:

```lua title="config/items.lua"
Config.items = {
    main = {...},
},
```
