---
sidebar_position: 1
---

# Client Exports and Events

## Events

### Opened Spawnselector

This will be triggered when soemone opens the spawnselector

```lua
RegisterNetEvent('pure_spawnselector:openedSpawnselector', function()

end)
```

## Exports and Triggers

### Open Spawnselector

This will open the spawnselector

```lua
exports['pure_spawnselector']:OpenSpawnselector()
```

Or trigger with this event

```lua
TriggerEvent('pure_spawnselector:openSpawnselector')
```
