---
sidebar_position: 3
---

# Exports - Client

## Event for when the menu is opened

This is used when the menu is opened so you can do custom weather events and more:

```tsx title="multicharacterOpened"
Example:

RegisterNetEvent('pure-multicharacter:multicharacterOpened', function()
    print('multicharacter menu opened')
end)
```

## Event for when the menu is closed

This is used when the menu is closed so you can do custom weather events and more:

```tsx title="multicharacterClosed"
Example:

RegisterNetEvent('pure-multicharacter:multicharacterClosed', function()
    print('multicharacter menu closed')
end)
```
