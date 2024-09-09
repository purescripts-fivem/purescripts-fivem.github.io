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
    -- lib.notify(table)
    QBCore.Functions.Notify(table.title)
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

## Progressbar

This is used for the creating and scratching of sprays.

Change this to however your progress bar does it, just make sure to call the `onCancel` and `onFinish` functions.

### Client

```lua title='client/framework/progressbar.lua'
function progressBar(isScratch, animDict, anim, onCancel, onFinsh)
    local time = Config.sprays.timeToCreateSpray
    if isScratch then
        time = Config.sprays.timeToScratch
    end
    local text = _Lang('sprays.creatingSpray')
    if isScratch then
        text = _Lang('sprays.scratchSpray')
    end
    QBCore.Functions.Progressbar('create_spray', text, time * 1000, false, true, {
        disableMovement = true,
        disableCarMovement = true,
        disableMouse = false,
        disableCombat = true,
    }, {
        animDict = animDict,
        anim = anim,
        flags = 1,
    }, {}, {}, function() -- Done
        onFinsh()
    end, function() -- Cancel
        onCancel()
    end)
end
```

## Show Text

These are called if you use the interaction instead of target to display the text to the user.

### Client

```lua title='client/framework/sprayChecks.lua'
function showText(text, config)
    if not config then config = {} end
    lib.showTextUI(text, config)
end
```

- text: `string` | The text to be displayed
- config: `table`
  - position: `string` | The position of the text (top-left, top-right etc - in config)

```lua title='client/framework/sprayChecks.lua'
function hideText()
    lib.hideTextUI()
end
```

## Spray Checks

These are called before the user is actually allowed to spray, therefore you can put your own checks in here.

### Client

```lua title='client/framework/sprayChecks.lua'
function sprayChecks(source, uniqueId, gangId)
    -- return false if you dont want to allow the player to spray such as check if they are in a house or not else return true
    -- if returning false then return the reason also such as return false, 'Spraying in house'
    return true
end
```

- source: `number` | The player's source
- uniqueId: `string` | The unique id of the spray
- gangId: `number` | The gang id of the player

### Server

```lua title='server/framework/sprayChecks.lua'
function sprayChecks(source, uniqueId, gangId)
    -- return false if you dont want to allow the player to spray such as check if they are in a house or not else return true
    -- if returning false then return the reason also such as return false, 'Spraying in house'
    return true
end
```

- source: `number` | The player's source
- uniqueId: `string` | The unique id of the spray
- gangId: `number` | The gang id of the player

## Spray Fonts

### Spray Font Adjustments

This is used for adjusting the font of the spray.

```lua title='client/framework/sprayFonts.lua'
function generateCorrectSpray(text, font)
    local scaleFactor = Config.sprays.scaleFactor

    if font == 'Subway' then
        scaleFactor = scaleFactor - 3.0
    end
    if font == 'Underground' then
        scaleFactor = scaleFactor - 3.0
    end
    if font == 'NextUp' then
        text = text:upper()
        scaleFactor = scaleFactor - 7.0
    end

    return text, scaleFactor
end
```

- text: `string` | The text of the spray
- font: `string` | The font of the spray

### Custom Fonts

This is used for adding custom fonts to your server.

- Download the font you want to use (.ttf format)
- Download this program [GFX Font Converter](https://forum.cfx.re/t/tool-gfx-font-converter/4952616)
- Watch the video on how this works [Youtube](https://www.youtube.com/watch?v=lDwyVDsGTdQ) (Ignore how he puts it in the game, just how he creates the gfx file)
- Drag this file into your `stream/` folder
- Add the font to your `pure-gangsystem/config/gangs.lua` file

```lua
availableFonts = {
    'blowbrush',
    'FortyScript',
    'Grafite',
    'NextUp',
    'Painterz',
    'Subway', -- REPLACE ONE OF THESE FONTS WITH YOUR FONT NAME
},
```

- Folder directory to replace the image is `pure-gangsystem/web/build/sprays/`
- Then spawn the font in game and then take a picture and replace the spray(NUMBER) whereas the number being the spray number you are replacing

- Restart the server and then you should be good to use this font within the game!

## Give Blueprints

This is used when they have a blueprint bench and generate a blueprint.

### Server

Currently this is set up for pure-crafting however you will have to adjust to your own crafting!

```lua title='server/framework/giveBlueprint.lua'
function givePlayerBlueprint(source)
    local blueprint = exports['pure-crafting']:getRandomBlueprint()
    giveItem(source, blueprint, 1)
end
```
