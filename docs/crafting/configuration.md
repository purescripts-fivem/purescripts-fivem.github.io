---
sidebar_position: 4
---

# Configuration

Here you will find an in depth documentation into the config files and how to change them to your liking.

## Config

Configuration file

```lua title='config/config.lua
Config = {
        -- [[ Frameworks Supported ]] --
    --[[
        qbcore - https://github.com/qbcore-framework
        esx - https://github.com/esx-framework/esx_core
        qbox - https://github.com/Qbox-project/qbx-core
        standalone -
    --]]
    framework = 'qbcore',

    language = 'en',

    --[[
        qb-inventory
        esx
        ox_inventory
        ps-inventory
        qs-inventory
    --]]

    inventory = 'qb-inventory',

    debug = false, -- This just enables debug prints, if having issues with your script, enable this and then check the console and react out to me in the discord

    targetingOptions = {
        interaction = 'target', -- 'target' or 'interaction'

        target = 'qb', -- if using target then this is the target system you use, 'ox', 'qb', 'standalone'
    },

    placingBench = {
        rotationSpeed = 0.5, -- speed of rotation for placing benches

        leftControl = 44, -- left control to rotate left

        rightControl = 38, -- right control to rotate right

        placeControl = 23, -- control to place the bench

        cancelControl = 120, -- control to cancel placing the bench

        object = `gr_prop_gr_bench_04a`, -- object to place (if you change this to prop_toolchest_05 and use qb-inventory make sure to remove this from their config)

        minusOffset = -5.0, -- this is the rotation y, for how it is placed on the ground for the red and green lines

        plusOffset = 5.0, -- this is the rotation y, for how it is placed on the ground for the red and green lines

        limit = 3, -- limit on the amount of benches that can be placed by person, set this to nil if you want to have no limit
    },

    -- just of ox notify, can use your own goto client/notify and server/notify and replace the inside of the function
    libText = {
        notfiyPoistion = 'center-left',
        textUIPosition = 'left-center',
    },

    -- these are the items in which allow you to place your bench down
    benchItems = {
        {itemName = 'weapon_bench', type = 'weapon'},
        {itemName = 'misc_bench', type = 'misc'},
    },

    previewBlueprints = true, -- if you want to preview blueprints in the crafting menu

    enableFavourites = true, -- if you want to enable the favourites system

    unlimitedBlueprints = true, -- if you want blueprints to be unlimited uses
}
```

## Item Blueprints

Item Blueprints Configuration file

```lua title='config/item_blueprints.lua
Config.blueprints = {
    ids = {
        weapon = {
            {
                blueprintId = 'blueprint_microsmg',
                id = 99991,
                itemName = 'weapon_microsmg',
                name = 'Micro SMG',
                image = 'https://cfx-nui-qb-inventory/html/images/weapon_microsmg.png',
                category = 'blueprints', -- DONT TOUCH THIS!!!
                type = 'blueprint', -- DONT TOUCH THIS!!!
                description = 'Blueprints for a Micro SMG',
                craftingTime = 20,
                requiredItems = {
                    {
                        itemName = 'metalscrap',
                        name = 'Metal Scrap',
                        amount = 20,
                        myAmount = 0,
                        image = 'https://cfx-nui-qb-inventory/html/images/metalscrap.png',
                    },
                },
            },
            -- MORE IN ACTUAL SCRIPT!!
        },
        misc = {
            {
                blueprintId = 'blueprint_scope',
                id = 99991,
                itemName = 'holoscope_attachment',
                name = 'Weapon Holoscope',
                image = 'https://cfx-nui-qb-inventory/html/images/holoscope_attachment.png',
                category = 'blueprints', -- DONT TOUCH THIS!!!
                type = 'blueprint', -- DONT TOUCH THIS!!!
                description = 'Blueprints for a Holographic Scope',
                craftingTime = 20,
                requiredItems = {
                    {
                        itemName = 'metalscrap',
                        name = 'Metal Scrap',
                        amount = 20,
                        myAmount = 0,
                        image = 'https://cfx-nui-qb-inventory/html/images/metalscrap.png',
                    },
                },
            },
            -- MORE IN ACTUAL SCRIPT!!
    },

    -- These are all the useable items in which it create a useable item
    items = {
        'blueprint_molotov',
        'blueprint_grip',
        'blueprint_suppressor',
        'blueprint_extendedclip',
        'blueprint_scope',
        'blueprint_specialcarbine',
        'blueprint_assaultrifle',
        'blueprint_advancedrifle',
        'blueprint_sawnoffshotgun',
        'blueprint_machinepistol',
        'blueprint_microsmg',
    },
}
```

## Items

Items Configuration file

```lua title='config/items.lua
Config.items = {
    weapon = {
        {
            id = 0,
            itemName = 'weapon_heavypistol',
            name = 'Heavy Pistol',
            image = 'https://cfx-nui-qb-inventory/html/images/weapon_heavypistol.png',
            description = 'Heavy Pistol',
            craftingTime = 10,
            requiredItems = {
                {
                    itemName = 'metalscrap',
                    name = 'Metalscrap',
                    amount = 50,
                    myAmount = 0, -- Ignore
                    image = 'https://cfx-nui-qb-inventory/html/images/metalscrap.png',
                },
            },
        },
        -- MORE IN ACTUAL SCRIPT!!
    },
    misc = {
        {
            id = 0,
            itemName = 'lockpick',
            name = 'Lockpick',
            image = 'https://cfx-nui-qb-inventory/html/images/lockpick.png',
            description = 'Lockpick',
            craftingTime = 10,
            requiredItems = {
                {
                    itemName = 'plastic',
                    name = 'Plastic',
                    amount = 10,
                    myAmount = 0, -- Ignore
                    image = 'https://cfx-nui-qb-inventory/html/images/plastic.png',
                },
            },
        },
        -- MORE IN ACTUAL SCRIPT!!
    },
}

```

## Languages

If you want to add a new language, you can either change over the language files, or copy and set the language in the `Config.language` in the config file.
