---
sidebar_position: 3
---

# Exports / Events

## Exports - Client

### Appearance Manager

**initiateApperance** - This is used for initiating the appearance of the player.

```py
exports['pure-clothing']:initiateApperance()
```

**initiateApperanceWithPed** - This is used for initiating the appearance of a ped.

```py
local appearance = {
    hair = {},
    clothing = {},
    faceFeatures = {},
    tattoos = {},
}

exports['pure-clothing']:initiateApperanceWithPed(ped, appearance)
```

- ped: `number` - The model hash of the ped.
- appearance: `table` - The appearance of the ped.
  - hair: `table` - The hair of the ped.
  - clothing: `table` - The clothing of the ped.
  - faceFeatures: `table` - The face features of the ped.
  - tattoos: `table` - The tattoos of the ped.

**setPlayerClothing** - This is used for setting the players clothing (can delete any table you do not want to set).

```py
local clothing = {
    {
        'name': 'jacket',
        'value2': 0,
        'value1': 0
    },
    {
        'name': 'arms',
        'value2': 0,
        'value1': 0
    },
    {
        'name': 'vests',
        'value2': 0,
        'value1': 0
    },
    {
        'name': 'undershirt',
        'value2': 0,
        'value1': 0
    },
    {
        'name': 'pants',
        'value2': 0,
        'value1': 0
    },
    {
        'name': 'shoes',
        'value2': 0,
        'value1': 0
    },
    {
        'name': 'masks',
        'value2': 0,
        'value1': 0
    },
    {
        'name': 'earrings',
        'value2': -1,
        'value1': -1
    },
    {
        'name': 'decals',
        'value2': 0,
        'value1': 0
    },
    {
        'name': 'watches',
        'value2': -1,
        'value1': -1
    },
    {
        'name': 'bracelets',
        'value2': -1,
        'value1': -1
    },
    {
        'name': 'glasses',
        'value2': -1,
        'value1': -1
    },
    {
        'name': 'bags',
        'value2': 0,
        'value1': 0
    },
    {
        'name': 'helmets',
        'value2': -1,
        'value1': -1
    },
    {
        'name': 'chains',
        'value2': 0,
        'value1': 0
    }
}

exports['pure-clothing']:setPlayerClothing(clothing, sex)
```

- clothing: `table` - The clothing of
  - name: `string` - The name of the clothing.
  - value1: `number` - The value 1 of the clothing.
  - value2: `number` - The value 2 of the clothing
- sex: `string` - 'male' | 'female' | nil - set to nil if you do not want to set the ped

### Peds

**loadDefaultPed** - This is used for loading the default ped.

```py
exports['pure-clothing']:loadDefaultPed()
```

**setPed** - This is used for setting the ped.

```py
exports['pure-clothing']:setPed(ped)
```

- ped: `string` - The model for the ped.

### Menu Management

**openMenu** - This is used for opening the menu.

```py
exports['pure-clothing']:openMenu(menu)
```

- menu: `string` - The menu to open.

Different Menu Types:

- createCharacter: `string` - Create character menu.
- clothing: `string` - Clothing menu.
- faceFeatures: `string` - Face features menu.
- tattoo: `string` - Tattoos menu.
- hair: `string` - Hair menu.

## Events - Client - Handlers

### Menu Management

**openedMenu** - This is triggered when the player has opened a menu.

```py
RegisterNetEvent('pure-clothing:openedMenu', function()
    print('menu opened, stuff here')
end)
```

**exitedMenu** - This is triggered when the player has left a menu.

```py
RegisterNetEvent('pure-clothing:exitedMenu', function()
    print('menu closed, stuff here')
end)
```

## Events - Client - Triggers

### Appearance Manager

**initiateApperance** - This is used for initiating the appearance of the player.

```py
TriggerEvent('pure-clothing:initiateApperance')
```

**initiateApperanceWithPed** - This is used for initiating the appearance of a ped.

```py
local appearance = {
    hair = {},
    clothing = {},
    faceFeatures = {},
    tattoos = {},
}

TriggerEvent('pure-clothing:initiateApperanceWithPed', ped, appearance)
```

- ped: `number` - The model hash of the ped.
- appearance: `table` - The appearance of the ped.
  - hair: `table` - The hair of the ped.
  - clothing: `table` - The clothing of the ped.
  - faceFeatures: `table` - The face features of the ped.
  - tattoos: `table` - The tattoos of the ped.

### Peds

**setPed** - This is used for setting the ped.

```py
TriggerEvent('pure-clothing:setPed', ped)
```

- ped: `string` - The model for the ped.

### Menu Management

**openMenu** - This is used for opening the menu.

```py
TriggerEvent('pure-clothing:openMenu', menu)
```

- menu: `string` - The menu to open.

Different Menu Types:

- createCharacter: `string` - Create character menu.
- clothing: `string` - Clothing menu.
- faceFeatures: `string` - Face features menu.
- tattoo: `string` - Tattoos menu.
- hair: `string` - Hair menu.
