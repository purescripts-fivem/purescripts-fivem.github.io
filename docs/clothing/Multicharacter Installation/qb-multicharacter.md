---
sidebar_position: 1
---

# qb-core/qb-multicharacter

## Client

Goto around line 136 @ `qb-multicharacter/client/main.lua`

And change the entire function 'qb-multicharacter:server:getSkin' to:

```jsx title="qb-multicharacter/client/main.lua"
QBCore.Functions.TriggerCallback('qb-multicharacter:server:getSkin', function(faceFeatures, hair, clothing, tattoos, model)
    model = model ~= nil and tonumber(model) or false
    if model ~= nil then
        CreateThread(function()
        RequestModel(model)
        while not HasModelLoaded(model) do
            Wait(0)
        end
        charPed = CreatePed(2, model, Config.PedCoords.x, Config.PedCoords.y, Config.PedCoords.z - 0.98, Config.PedCoords.w, false, true)
        SetPedComponentVariation(charPed, 0, 0, 0, 2)
        FreezeEntityPosition(charPed, false)
        SetEntityInvincible(charPed, true)
        PlaceObjectOnGroundProperly(charPed)
        SetBlockingOfNonTemporaryEvents(charPed, true)
        exports['pure-clothing']:initiateApperanceWithPed(charPed, {
            faceFeatures = faceFeatures,
            hair = hair,
            clothing = clothing,
            tattoos = tattoos
        })
        end)
    else
        CreateThread(function()
        local randommodels = {
            "mp_m_freemode_01",
            "mp_f_freemode_01",
        }
        model = joaat(randommodels[math.random(1, #randommodels)])
        RequestModel(model)
        while not HasModelLoaded(model) do
            Wait(0)
        end
        charPed = CreatePed(2, model, Config.PedCoords.x, Config.PedCoords.y, Config.PedCoords.z - 0.98, Config.PedCoords.w, false, true)
        SetPedComponentVariation(charPed, 0, 0, 0, 2)
        FreezeEntityPosition(charPed, false)
        SetEntityInvincible(charPed, true)
        PlaceObjectOnGroundProperly(charPed)
        SetBlockingOfNonTemporaryEvents(charPed, true)
        end)
    end
    cb("ok")
end, cData.citizenid)
```

## Server

Goto around line 188 @ `qb-multicharacter/server/main.lua`:

And change the entire function 'qb-multicharacter:server:getSkin' to:

```jsx title="qb-multicharacter/server/main.lua"
QBCore.Functions.CreateCallback("qb-multicharacter:server:getSkin", function(_, cb, cid)
    local result = MySQL.query.await('SELECT * FROM clothing_skins WHERE citizenid = ?', {cid})
    if result[1] ~= nil then
        cb(json.decode(result[1].faceFeatures), json.decode(result[1].hair), json.decode(result[1].clothing), json.decode(result[1].tattoos), result[1].modelHash)
    else
        cb(nil)
    end
end)
```
