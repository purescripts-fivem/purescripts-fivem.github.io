---
sidebar_position: 3
---

# Exports / Events

## Exports - Client

### Placing Bench

**placeBench** - This is used for placing the bench

```py
exports['pure-crafting']:placeBench(type)
```

- type: `string` | The type of the bench

Bench Types:

- misc
- weapons

## Events - Client - Handlers

### Bench Management

**placeBench** - This is used when a bench item has been used and the bench is placed

```py
RegisterNetEvent('pure-crafting:placeBench', function(bench)
    -- Code here
end)
```

**refreshBenches** - This is used for when the benches are refreshed (such as when a user loads in)

```py
RegisterNetEvent('pure-crafting:refreshBenches', function(benches)
    -- Code here
end)
```

- benches: `table` | The benches

**insertBench** - This is used for when a bench is inserted

```py
RegisterNetEvent('pure-crafting:insertBench', function(newBench)
    -- Code here
end)
```

- newBench: `table` | The new bench

### Blueprints

**useBlueprint** - This is used for when a blueprint is used

```py
RegisterNetEvent('pure-crafting:useBlueprint', function(name)
    -- Code here
end)
```

- name: `string` | The name of the blueprint

## Events - Client - Triggers

### Placing Bench

**placeBench** - This is used for opening the laptop

```py
TriggerEvent('pure-crafting:placebench', type)
```

- type: `string` | The type of the bench

Bench Types:

- misc
- weapons
