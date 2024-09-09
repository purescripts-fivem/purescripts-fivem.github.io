---
sidebar_position: 2
---

# esx/esx_multicharacter

## Client

Goto around line 98 @ `esx_multicharacter/client/main.lua`

And change the entire function 'SetupCharacter' to:

```jsx title="esx_multicharacter/client/main.lua"
SetupCharacter = function(index)
    if not spawned then
        exports.spawnmanager:spawnPlayer({
            x = Config.Spawn.x,
            y = Config.Spawn.y,
            z = Config.Spawn.z,
            heading = Config.Spawn.w,
            model = Characters[index]['skin'].model or mp_m_freemode_01,
            skipFade = true
        }, function()
            canRelog = false
            if Characters[index] then
                exports['pure-clothing']:initiateApperanceWithPed(PlayerPedId(), {
                    faceFeatures = Characters[index]['skin'].faceFeatures,
                    clothing = Characters[index]['skin'].clothing,
                    hair = Characters[index]['skin'].hair,
                    tattoos = Characters[index]['skin'].tattoos,
                })
            end
            DoScreenFadeIn(600)
        end)
    repeat Wait(200) until not IsScreenFadedOut()

    elseif Characters[index] and Characters[index].skin then
        if Characters[spawned] and Characters[spawned].model then
            RequestModel(Characters[index]['skin'].model)
            while not HasModelLoaded(Characters[index]['skin'].model) do
                RequestModel(Characters[index]['skin'].model)
                Wait(0)
            end
            SetPlayerModel(PlayerId(), Characters[index]['skin'].model)
            SetModelAsNoLongerNeeded(Characters[index]['skin'].model)
        end
        exports['pure-clothing']:initiateApperanceWithPed(PlayerPedId(), {
            faceFeatures = Characters[index]['skin'].faceFeatures,
            clothing = Characters[index]['skin'].clothing,
            hair = Characters[index]['skin'].hair,
            tattoos = Characters[index]['skin'].tattoos,
        })
    end
    spawned = index
    local playerPed = PlayerPedId()
    FreezeEntityPosition(PlayerPedId(), true)
    SetPedAoBlobRendering(playerPed, true)
    SetEntityAlpha(playerPed, 255)
    SendNUIMessage({
        action = "openui",
        character = Characters[spawned]
    })
end
```

## Server

Goto around line 25 @ `esx_multicharacter/server/main.lua`:

Look below to see how to change the table:

```jsx title="esx_multicharacter/server/main.lua"
Replaces this:
local DB_TABLES = {users = 'identifier'}

With this:
local DB_TABLES = {users = 'identifier', clothing_skins = 'citizenid'}
```

Goto around line 75 @ `esx_multicharacter/server/main.lua`:

```jsx title="jl-multicharacter/server/server.lua"
Replace this:

characters[id] = {
    id = id,
    bank = accounts.bank,
    money = accounts.money,
    job = job,
    job_grade = grade,
    firstname = v.firstname,
    lastname = v.lastname,
    dateofbirth = v.dateofbirth,
    skin = v.skin and json.decode(v.skin) or {},
    disabled = v.disabled,
    sex = v.sex == 'm' and TranslateCap('male') or TranslateCap('female')
}

With this:

local result =  MySQL.single.await('SELECT `faceFeatures`, `clothing`, `hair`, `tattoos`, `model`, `modelHash` FROM clothing_skins WHERE citizenid = ?', {v.identifier})
if not result then
    skinTable = {
        faceFeatures = {},
        clothing = {},
        hair = {},
        tattoos = {},
        model = 'mp_m_freemode_01',
        modelHash = GetHashKey('mp_m_freemode_01')
    }
else
    skinTable = {
        faceFeatures = json.decode(result.faceFeatures),
        clothing = json.decode(result.clothing),
        hair = json.decode(result.hair),
        tattoos = json.decode(result.tattoos),
        model = result.model,
        modelHash = result.modelHash
    }
end
characters[id] = {
    id = id,
    bank = accounts.bank,
    money = accounts.money,
    job = job,
    job_grade = grade,
    firstname = v.firstname,
    lastname = v.lastname,
    dateofbirth = v.dateofbirth,
    skin = skinTable,
    disabled = v.disabled,
    sex = v.sex == 'm' and TranslateCap('male') or TranslateCap('female')
}
```
