---
sidebar_position: 5
---

# jl-multicharacter

<!-- Add **Markdown or React** files to `src/pages` to create a **standalone page**:

- `src/pages/index.js` → `localhost:3000/`
- `src/pages/foo.md` → `localhost:3000/foo`
- `src/pages/foo/bar.js` → `localhost:3000/foo/bar` -->

## Client

Goto around line 70 @ `jl-multicharacter/client/client.lua`:

```jsx title="jl-multicharacter/client/client.lua"
Replace this:

spawnedPeds[i] = CreatePed(
  1,
  model,
  coords.x,
  coords.y,
  coords.z - 1.0,
  Config.Locations[i].location.w,
  false,
  false
);
TriggerEvent(
  Config.Scripts['loadplayerclothing'],
  spawnedPeds[i],
  json.decode(SkinLoaded[i].skin)
);

With this:

spawnedPeds[i] = CreatePed(
  1,
  model,
  coords.x,
  coords.y,
  coords.z - 1.0,
  Config.Locations[i].location.w,
  false,
  false
);
exports['pure-character']:initiateApperanceWithPed(spawnedPeds[i], SkinLoaded[i].skin)
```

## Server

Goto around line 111 @ `jl-multicharacter/server/server.lua`:

```jsx title="jl-multicharacter/server/server.lua"
Replace this:

local result = MySQL.query.await('SELECT * FROM charskin WHERE playerid = ? ', { data[i].citizenid })
if Config.UseFivemAppearance then
    if result[1] ~= nil then
        resSkin[i] = {
            data = json.decode(result[1].skin),
            cid = data[i].cid
            }
        else
            resSkin[i] = {
                data = nil,
                cid = data[i].cid
            }
        end
    else
        if result[1] ~= nil then
            resSkin[i] = {
                skin = result[1].playerskin,
                cid = data[i].cid
            }
        else
            resSkin[i] = {
                model = false,
                skin = false,
                cid = data[i].cid
            }
        end
    end
end

With this:

local result =  MySQL.single.await('SELECT `faceFeatures`, `clothing`, `hair`, `tattoos`, `model`, `modelHash` FROM clothing_skins WHERE citizenid = ?', {data[i].citizenid})
if not result then
    print('no skin data found')
    resSkin[i] = {
        model = false,
        skin = false,
        cid = data[i].cid
    }
else
    resSkin[i] = {
        model = result.model,
        modelHash = result.modelHash,
        skin = {
            faceFeatures = json.decode(result['faceFeatures']),
            hair = json.decode(result['hair']),
            clothing = json.decode(result['clothing']),
            tattoos = json.decode(result['tattoos']),
        },
        cid = data[i].cid
    }
end
```
