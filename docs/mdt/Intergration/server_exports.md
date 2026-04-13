---
sidebar_position: 2
---

# Server Exports

## MDT Management

### MdtTriggerEvent

This will trigger an event for everyone in the MDT, usually used to update states

```lua
---@param eventname string
---@param data string | table
exports['pure_mdt']:MdtTriggerEvent(eventname, data)
```

### Open MDT

This will open the MDT

```lua
---@param src number
---@return boolean
local success = exports['pure_mdt']:OpenMDT(src)
```

### Get Total Charges

Within the MDT, it works of a 3 tier charge system 'Infraction', 'Misdemeanor' and 'Felony', this export will search for all the charges a player has in which are not a 'Infraction'

```lua
---@param uniqueId string
---@return amount number
local amount = exports['pure_mdt']:GetTotalCharges(uniqueId)
```

### Change Callsign

This will change their callsign, ensure they already have a callsign on the MDT

```lua
---@param src number
---@param callsign string
---@return boolean
local success = exports['pure_mdt']:NewCallsign(src, callsign)
```

## Profiles

### Update Mugshot

This will update the persons mugshot

```lua
---@param mugshot string
---@param charId string
exports['pure_mdt']:UpdateMugshot(mugshot, charId)
```

### Add Gallery Image

This will add a gallery image to the persons profile

```lua
---@param image string
---@param charId string
exports['pure_mdt']:AddGallery(image, charId)
```

## Dispatch

### Add Dispatch Call

This will add a disptach call, it is essential you add this to your dispatch script in order to sync them, this returns the dispatch id

```lua
-- CallDataType
-- data: {
    -- code: string;
    -- title: string;
    -- id: number;
    -- colour: 'green' | 'orange' | 'red' | 'blue' | 'yellow';
    -- coords: number[];
    -- jobs: string[];
    -- createCall: boolean;
    -- timestamp: number;
    -- location: string;
    -- sound: string;
    -- callArray: {
        -- timestamp: number;
        -- location: string;
        -- name: string;
        -- message: string;
        -- car: string;
        -- plate: string;
        -- colour: string;
        -- number: string;
        -- weapon: string;
    -- }
    -- blipData = {
    --     radius: number | false, -- If the blip is a radius
    --     sprite: number, -- Sprite of the blip
    --     colour: number, -- Colour of the blip
    --     scale: number, -- Scale of the blip
    --     timeout: number, -- In minutes, defaults to 10
    -- },
-- }
local id = exports['pure_mdt']:AddDispatchCall(data)
```

Or use the event

```lua
TriggerServerEvent('mdt:dispatch:AddCall', data)
```

### Remove Dispatch Call

This removes the dispatch call from the MDT

```lua
---@param id number
exports['pure_mdt']:RemoveDispatchCall(id)
```

## Weapons

### Register Weapon

This is used say in ox_inventory as per example below to add a police weapon as a registered weapon
If using ox_inventory the hook will already detect a weapons purchase from the gunstore

```lua
---@param serial string
---@param registered boolean
---@param weaponName string
exports['pure_mdt']:RegisterWeapon(serial, registered, weaponName)
```

```lua title="ox_inventory/modules/items/server.lua
---@line 182
REPLACE:
if metadata.registered ~= false and (metadata.ammo or item.name == 'WEAPON_STUNGUN') then
    local registered = type(metadata.registered) == 'string' and metadata.registered or inv?.player?.name
    metadata.registered = registered
    metadata.serial = GenerateSerial(metadata.serial)
end

WITH:
if metadata.registered ~= false and (metadata.ammo or item.name == 'WEAPON_TASER') then
    local registered = type(metadata.registered) == 'string' and metadata.registered or inv?.player?.name
    metadata.registered = registered
    metadata.serial = GenerateSerial(metadata.serial)
    exports['pure_mdt']:RegisterWeapon(metadata.serial, metadata.registered, string.gsub(item.name, 'WEAPON_', ''))
end
```

## Vehicles

### Check Vehicle Points

This is for checking a vehicles points in which is displayed on the MDT

```lua
---@param plate string
---@return integear
local points = exports['pure_mdt']:CheckVehiclePoints(plate)
```

### Add Vehicle Points

This is for adding points to a vehicle

```lua
---@param plate string
---@param amount number
---@return boolean
local success = exports['pure_mdt']:AddVehiclePoints(plate, amount)
```

### Remove Vehicle Points

This is for removing points to a vehicle

```lua
---@param plate string
---@param amount number
---@return boolean
local success = exports['pure_mdt']:RemoveVehiclePoints(plate, amount)
```

# Server Events

## Dispatch

### Attached to Call

This will be hit when a player has attached to a call

```lua
---@param playerId number
---@param callerSource number
---@param callId number
---@param callData CallDataType (See ddd to dispatch above)
RegisterNetEvent('pure_mdt:playerAttached', function (playerId, callerSource, callId, callData)
    print('pure_mdt:playerAttached: ', playerId, callerSource, callId, json.encode(callData, {indent = true}))
end)
```
