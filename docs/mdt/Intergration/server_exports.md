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

## Dispatch

### Add Dispatch Call

This will add a disptach call, it is essential you add this to your dispatch script in order to sync them, this returns the dispatch id

```lua
-- data: {
    -- code: string;
    -- title: string;
    -- id: number;
    -- colour: string;
    -- coords: number[];
    -- jobs: string[];
    -- createCall: boolean;
    -- timestamp: number;
    -- location: string;
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
