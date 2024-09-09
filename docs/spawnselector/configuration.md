---
sidebar_position: 3
---

# Configuration

Here you will find an indepth documentation into the config files and how to change them to your liking.

## Config

Base config file

```title='config/config.lua
Config = {
    -- [[ Frameworks Supported ]] --
    --[[
        qbcore - https://github.com/qbcore-framework
        esx - https://github.com/esx-framework/esx_core
        qbox - https://github.com/Qbox-project/qbx-core
        standalone -
    --]]
    framework = 'qbcore',

    language = 'en', -- maybe remove idek if we will need to use this

    debug = true, -- debug mode

    enableClickingAudio = true, -- enable clicking audio when clicking on a button

    coords = {
        cameraCoords = vector4(-839.7095, -576.650, 96.1750, 214.1250),
        boardCoords = vector4(-837.9325, -579.2559, 96.1980, 214.1250)
    },

    -- [[ Housing Supported ]] --
    --[[
        qb-housing - https://github.com/qbcore-framework/qb-houses,
        ps-housing - https://github.com/Project-Sloth/ps-housing,
        qs-housing,
        bcs-housing,
        nil - if you don't use any housing script
    --]]
    housingScript = 'ps-housing',

    housingSettings = {
        ifHousingUseKeyholders = false, -- if you use qb-housing or ps-housing and want to use keyholders instead of the owner (READ) if you use ps-housing you need to configure it so your own cid is in the has_access table otherwise this will not work
    },

    --[[ icons ]]--
    icons = {
        apartments = {
            icon = 'fa-building', -- these are free font awesome icons
            colour = '#38e160'
        },
        houses = {
            icon = 'fa-house',
            colour = '#38e160'
        },
        lastLocation = {
            icon = 'fa-map-pin',
            colour = '#38e160'
        },
        groupedIcons = {
            icon = 'fa-circle-chevron-right',
            colour = '#38e160'
        }
    },

    nui = {
        selectColour = '#38e160',
        spawnButtonColour = '#38e160',
    },

    anitCombatLog = true, -- if enabled if the player leaves and they are dead it will spawn them last location and not open the spawn menu

    difference = 25.0, -- the difference between the coords of the spawn and the spawn next to it

    timeToPlayAnimForIfEnabled = 1, -- this is the time the animation will play for before clearing it (seconds)
}
```

## Spawns

The spawns config for different spawns that you can use

```title='config/spawns.lua
Config.spawns = {
    {name = 'Mission Row', coords = vector4(419.3939, -991.1760, 29.3152, 90.3872), icon = 'fa-location-dot', colour = '#38e160', anim = 'idle_a', animDict = 'amb@world_human_leaning@male@wall@back@foot_up@idle_a'},
    {name = 'Pier', coords = vector4(-1688.9659, -1051.6799, 13.1025, 231.8320), icon = 'fa-location-dot', colour = '#38e160', scenario = 'WORLD_HUMAN_SMOKING'},
    -- examples above of how if you want to spawn a player with them in an active animation
    {name = 'Pillbox', coords = vector4(270.4436, -615.9338, 44.0116, 72.6246), icon = 'fa-location-dot', colour = '#38e160'},
    {name = 'Train Station', coords = vector4(95.0894, -1708.6066, 29.5116, 227.7118), icon = 'fa-location-dot', colour = '#38e160'},
    {name = 'West Vinewood', coords = vector4(-627.6992, 294.5744, 81.9812, 170.5146), icon = 'fa-location-dot', colour = '#38e160'},
    {name = 'Prison', coords = vector4(1845.9620, 2584.4573, 45.6720, 272.5580), icon = 'fa-location-dot', colour = '#38e160'},
    {name = 'Sandy PD', coords = vector4(1854.5367, 3680.5942, 34.2666, 210.5599), icon = 'fa-location-dot', colour = '#38e160'},
    {name = 'Paleto Hotel', coords = vector4(-103.8195, 6315.4624, 31.5762, 140.8317), icon = 'fa-location-dot', colour = '#38e160'},
}

Config.jobSpawns = {
    ['police'] = {
        {name = 'Blaze Testing', coords = vector4(416.1169, -1038.9733, 29.4665, 232.3573), icon = 'fa-location-dot', colour = '#38e160'},
    },
    -- This is the job name for example ESX: police, QB: police etc etc
}
```

## Themes

The theme is built into the configuration file and also the individual spawn file so you can change the icon and colour of each spawn depending on your need/want as a server
