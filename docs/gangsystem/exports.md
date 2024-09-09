---
sidebar_position: 3
---

# Exports / Events

## Exports - Client

### Laptop Management

**openLaptop** - This is used for opening the laptop

```py
exports['pure-gangsystem']:openGangMenu()
```

**closeLaptop** - This is used for closing the laptop

```py
exports['pure-gangsystem']:closeGangMenu()
```

### Gang Data

**isInGang** - This is used for checking if the player is in a gang or not

```py
local isInGang = exports['pure-gangsystem']:isInGang(source)
```

- source: `number` | The player's source

**canDeleteGangSprays** - This is used for checking if the player can delete the gang sprays or not

```py
local canDeleteGangSprays = exports['pure-gangsystem']:canDeleteGangSprays(source)
```

- source: `number` | The player's source

**getGangId** - This is used for getting the gang id of the player

```py
local gangId = exports['pure-gangsystem']:getGangId(source)
```

- source: `number` | The player's source

**getGangForSprays** - This is used for getting the information for the sprays

```py
local gangId, inGang, canDeleteSprays = exports['pure-gangsystem']:getGangForSprays(source)
```

- source: `number` | The player's source

### Zones

**checkZone** - This is used for checking if the player is in a zone or not

```py
local zone = exports['pure-gangsystem']:checkZone(uniqueId, gangId, coords)
zone = 'inAnotherGangZone' | 'inGangZone' | 'notInZone'
```

- uniqueId: `string` | The player's unique id
- gangId: `number` | The player's gang id
- coords: `vector3` | The player's coords

## Events - Client - Handlers

### Laptop Management

**laptopOpened** - This is used for when the laptop is opened

```py
RegisterNetEvent('pure-gangsystem:openLaptop', function()
    -- Code here
end)
```

**laptopClosed** - This is used for when the laptop is closed

```py
RegisterNetEvent('pure-gangsystem:closeLaptop', function()
    -- Code here
end)
```

### Missions

**startShopMission** - This is used for when the shop mission has started

```py
RegisterNetEvent('pure-gangsystem:shopMission', function()
    -- Code here
end)
```

**stopShopMission** - This is used for when the mission has stopped (only triggered say if they leave a gang)

```py
RegisterNetEvent('pure-gangsystem:removeShopMission', function()
    -- Code here
end)
```

**finishedShopMission** - This is used for when the mission has been completed

```py
RegisterNetEvent('pure-gangsystem:shopMissionFinished', function()
    -- Code here
end)
```

### Sprays

**sprayAdded** - This is used for when a spray has been added

```py
RegisterNetEvent('pure-gangsystem:insertSpray', function(spray)
    -- Code here
end)
```

**sprayRefreshed** - This is used for when the sprays have been refreshed

```py
RegisterNetEvent('pure-gangsystem:refreshSprays', function(sprays)
    -- Code here
end)
```

### Player Management

**gangChange** - This is used for when the player has changed gangs

```py
RegisterNetEvent('pure-gangsystem:gangChange', function()
    -- Code here
end)
```

## Events - Client - Triggers

### Laptop Management

**openLaptop** - This is used for opening the laptop

```py
TriggerEvent('pure-gangsystem:openGangMenu')
```

**closeLaptop** - This is used for closing the laptop

```py
TriggerEvent('pure-gangsystem:closeGangMenu')
```

## Exports - Server

### Notifications

**gangAddNotification** - This is used for sending a gang notification to the gang

```py
exports['pure-gangsystem']:gangAddNotification(source, title, message, icon)
```

- source: `number` | The player's source
- title: `string` | The title of the notification
- message: `string` | The message of the notification
- icon: `string` | The icon of the notification (fa-spray-can)

**gangDeleteNotification** - This is used for deleting a gang notification

```py
exports['pure-gangsystem']:gangDeleteNotification(source, title)
```

- source: `number` | The player's source
- title: `string` | The title of the notification

**userAddNotification** - This is used for sending a user notification to the player

```py
exports['pure-gangsystem']:userAddNotification(source, title, message, icon)
```

- source: `number` | The player's source
- title: `string` | The title of the notification
- message: `string` | The message of the notification
- icon: `string` | The icon of the notification (fa-spray-can)

**userDeleteNotification** - This is used for deleting a user notification

```py
exports['pure-gangsystem']:userDeleteNotification(source, title)
```

- source: `number` | The player's source
- title: `string` | The title of the notification

### Gang Data

**gangGetInformation** - This is used for getting the gang data

```py
local gangData = exports['pure-gangsystem']:gangGetInformation(source)
```

- source: `number` | The player's source

Returns:

```lua
gangData = {
    id: `number`,
    name: `string`,
    leader: `string`,
    members: `table`,
    roles: `table`,
    permissions: `table`,
    logs: `table`,
    notifications: `table`,
    membersOnline: `number`,
    activeMembers: `number`,
    font: `number`,
    colour: `number`,
    shopItems: `table`,
    missionTier: `number`,
    reduceTime: `number`,
}
```

### Reputation

**gangAddReputation** - This is used for adding reputation to the gang

```py
exports['pure-gangsystem']:gangAddReputation(source, amount)
```

- source: `number` | The player's source
- amount: `number` | The amount of reputation to add

**gangRemoveReputation** - This is used for removing reputation from the gang

```py
exports['pure-gangsystem']:gangRemoveReputation(source, amount)
```

- source: `number` | The player's source
- amount: `number` | The amount of reputation to remove

### Quests

**isInQuest** - This is used for checking if the player is in a quest or not

```py
local isInQuest = exports['pure-gangsystem']:isInQuest(source)
```

**getCurrentQuest** - This is used for getting the current quest of the player

```py
local currentQuest = exports['pure-gangsystem']:getCurrentQuest(source)
```

- source: `number` | The player's source

Returns:

**No Quest**:

```lua
false
```

**In Quest**:

```lua
Config.quests.missionQuests[questTheyAreIn] -- will return the entire quest table so you can cross reference that
```

## Events - Server - Handlers

### Player Management

**playerLoaded** - This is used for when a player has loaded and the gang will be initiated

```py
RegisterNetEvent('pure-gangsystem:playerLoaded', function()
    -- Code here
end)
```

**playerLeft** - This is used for when a player has left the server (or picked a new character) and the player will be removed from the gang

```py
RegisterNetEvent('pure-gangsystem:playerRemoved', function()
    -- Code here
end)
```
