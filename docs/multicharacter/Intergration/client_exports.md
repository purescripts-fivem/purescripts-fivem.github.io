---
sidebar_position: 1
---

# Client Exports and Events

## Events

### Multicharacter Opened

This will be triggered when the multicharacter is opened

```lua
RegisterNetEvent('pure_multicharacter:multicharacterOpened', function()

end)
```

### Character Deleted

This will be triggered when a character is deleted

```lua
RegisterNetEvent('pure_multicharacter:deletedChar', function(charId)

end)
```

### Chararacter Created

This will be triggered when a character is created

```lua
RegisterNetEvent('pure_multicharacter:createdChar', function(newData)

end)
```

### Character Played

This will be triggered when a character is selected

```lua
RegisterNetEvent('pure_multicharacter:playChar', function(charId)

end)
```

## Exports and Triggers

### Open Multicharacter

This will open the multicharacter

```lua
exports['pure_multicharacter']:OpenMulticharacter()
```

Or trigger with this event

```lua
TriggerEvent('pure_multicharacter:openMulticharacter')
```

### Close Multicharacter

This will close the multicharacter

```lua
exports['pure_multicharacter']:CloseMulticharacter()
```

Or trigger with this event

```lua
TriggerEvent('pure_multicharacter:closeMulticharacter')
```
