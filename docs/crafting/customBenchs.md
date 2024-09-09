---
sidebar_position: 8
---

# Custom Benches

To create a custom bench you must first add it to all of the configurations, then create an item in which will trigger the bench of said type to be placed.

```lua title="config/config.lua"
benchItems = {
    {itemName = 'weapon_bench', type = 'weapon'},
    {itemName = 'misc_bench', type = 'misc'},
    {itemName = 'custom_bench', type = 'custom'},
},
```

After this you will need to create an item in the `items.lua` file.

````lua title="config/items.lua"

Then change the `item_blueprints.lua` file around so that the table `Config.blueprints.ids` contains `misc`, `weapon` and your custom type:

```lua title="config/item_blueprints.lua"
Config.blueprints = {
    ids = {
        weapon = {...},
        misc = {...},
        custom = {...},
    }
},
````

Then change the `items.lua` file around so that the table `Config.items` contains `misc`, `weapon` and your custom type:

```lua title="config/items.lua"
Config.items = {
            weapon = {...},
        misc = {...},
        custom = {...},
},
```

You can add multiple different types of benches, just make sure you follow the above and change the names around so they are unique!
