---
sidebar_position: 1
---

# Installation and Updating Guide

## Installation

### 1. Install all dependencies

You will need to download the following resources, and ensure the mdt is started **after** these resources have started (Can always leave the mdt to start at the bottom of your server.cfg)

- [ox_lib](https://github.com/CommunityOx/ox_lib/releases)
- [oxmysql](https://github.com/CommunityOx/oxmysql/releases)

### 2. Configure

There is a number of different settings for the multicharacter, in which you can see find in the `config/config.lua`

## Framework Specific

### QBOX

Uncomment out the `@qbx_core/modules/playerdata.lua` in the **fxmanifest.lua**

Remove the old resources:
`qbx_spawn`

If you want the apartments to work with this, you will need to go to `qbx_properties` and comment out this, this will stop the UI and use the spawnselectors one

AFTER:

```lua
RegisterNetEvent('apartments:client:setupSpawnUI', function()
    -- if #sharedConfig.apartmentOptions == 1 then
    --     inputConfirm(1)
    --     return
    -- end
    -- Wait(400)
    -- ManagePlayer()
    -- SetupCamera(true)
    -- SetupBoard()
    -- StartScaleform()
    -- SetupScaleform()
    -- InputHandler()
end)
```

### QB CORE

Remove the old resources:

`qb-spawn`

### ESX

Just drag and drop!
