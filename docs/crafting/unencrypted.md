---
sidebar_position: 6
---

# Unencrypted Functions

## Notify system

This is used for notifying the player with a notification.

### Client

```lua title='client/framework/notify.lua'
function notifySystem(table)
    if not table then return end
    lib.notify(table)
end
```

- table: `table` | The table of the notification
  - title: `string` | The title of the notification
  - description: `string` | `nil` | The description of the notification
  - type: `string` | The type of notification (success, error etc)
  - position: `string` | The position of the notification (top-right, top-left etc - in config)

### Server

```lua title='server/framework/notify.lua'
function notifySystem(source, table)
    if not table then return end
    if not source then return end

    lib.notify(source, table)
end
```

- source: `number` | The player's source
- table: `table` | The table of the notification
  - title: `string` | The title of the notification
  - description: `string` | `nil` | The description of the notification
  - type: `string` | The type of notification (success, error etc)
  - position: `string` | The position of the notification (top-right, top-left etc - in config)

## Placing Checks

This is used for checking if a player can place a crafting bench.

### Client

```lua title='client/framework/customChecks.lua'
function customChecks(source)
    -- these are in place so you can add your own checks before a user can place a crafting bench
    -- return false to not allow them to place the bench
    return true
end
```

- source: `number` | The player's source

### Server

```lua title='server/framework/customChecks.lua'
function customChecks(source)
    -- these are in place so you can add your own checks before a user can place a crafting bench
    -- return false to not allow them to place the bench
    return true
end
```

- source: `number` | The player's source
