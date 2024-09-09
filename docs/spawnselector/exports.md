---
sidebar_position: 3
---

# Exports - Client

## Event for when the menu is opened

This is used when the menu is opened so you can do custom weather events and more:

```tsx title="spawnmenuOpened"
Example:

RegisterNetEvent('pure-spawnselector:spawnmenuOpened', function()
    print('spawn menu opened')
end)
```

## Open Spawn Menu

This is used if you wanna open the spawn menu externally through a function or event:

Different menus are:

- spawns (generic spawn menu)
- apartments (apartments menu when u pick an apartment)

```tsx title="setupSpawn"
exports['pure-spawnselector']:setupSpawn(menuHere)

or

TriggerEvent('pure-spawnselector:setupSpawn', menuHere)

Example:

TriggerEvent('pure-spawnselector:setupSpawn', 'spawns')
```
