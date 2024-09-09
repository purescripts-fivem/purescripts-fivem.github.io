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

    language = 'en',

    -- [[ Designs Available ]] --
    --[[
        pictures here:

        default - https://i.imgur.com/infNPkg.png
        other - https://i.imgur.com/V2Mwz1m.png
    ]]

    design = 'other', -- this is the design, in which you can change between the two sets of designs we currently offer

    debug = true, -- This just enables debug prints, if having issues with your script, enable this and then check the console and react out to me in the discord

    validateData = { -- this is to do with the create character form, you can change the min/max length of the fields here
        nameLength = {
            min = 3,
            max = 12,
        },
        dob = {
            minYear = 1900,
            maxYear = 2020,
        },
    },

    multicharacterSpawn = 6, -- the index of the spawn in the spawns.lua for which you want to spawn at, THE FIRST ONE IS NUMBER 1

    -- this is a table for whitelisted spots, this is if you want certain players to have extra slots
    whitelistedSpots = {
        -- {
        --     identifier = 'license:52cdb2a17bc155965afb77ceebb67b37c95b2be5', -- this is the identifier which matches below
        --     identifierType = 'license', -- this needs to be a valid license, such as steam, ip, discord, xbl, live, fivem, license, or discord (read the docs here: https://docs.fivem.net/natives/?_0xA61C8FC6)
        --     slots = 7 -- the amount of slots they should have, this needs to match the extra slots above
        -- },
    },

    discord = { -- this is if you want users with a specific role to be able to have more character slots
        enabled = false,
        botToken = '',
        guildId = '',
        roles = {
            ['1108405236185440256'] = 8, -- [roleid here] = amount of slots
        }
    },

    --[[
        pure-clothing,
        illenium-appearance,
        qb-clothing,
        esx_skin,
    ]]

    clothingResource = 'qb-clothing', -- this is the clothing resource you use, above is the current ones supported however it is open source so you can add your own

    esxSpawn = vector4(-284.2856, 562.4627, 172.9182, 19.9895), -- this is for esx users only! (Spawn location for new characters, modify the default value in the users SQL table)

    identifier = 'license', -- this is how you are saving their character, such as steam, discord, license etc etc

    defaultAmountOfSlots = 5, -- This is the default amount of slots a player has, this can be changed in the database

    defaultModel = `mp_m_freemode_01`, -- this is the default model set for the peds in which either have no clothing or are not created as a character

    timecycleModifier = 'V_FIB_IT3', -- custom timecycle modifier, this is the default one to make it look nicer, look on forums for more

    enableNotify = true, -- this is if you want to enable the helper function such as for the validateData it will tell the user what exactly is wrong and where to change it

    notificationTime = 5, -- How long the notification will stay on screen for in seconds

    triggerForSpawnselector = 'apartments:client:setupSpawnUI', -- this is the trigger for when they select a character, you can change this completely in server/framework/userFramework/userFunctions.lua @ line 14

    apartmentStarting = true, -- this is if you want to use the apartment system such as for qbcore they have apartments which it gives you the option to spawn at

    disableDeleteButton = false, -- this is if you want them to not be able to delete their characters

    notifyPosition = 'center-left', -- this is for the notify function to set the position

    defaultBucket = 0, -- this is the default bucket for the player, this is used for when they select their character, if you have any conflicting bucket scripts you can edit it here if not do not touch

    enableBackgroundBlur = true, -- this is if you want to enable the background blur

    prefix = 'char', -- this is for esx only, this is the prefix for the database on how we save their different characters

    setEntityAlpha = true, -- if you want your un created peds to be slightly transparent then enable this
}

```

## Spawns

The spawns config for different spawns that you can use

```title='config/spawns.lua
Config.spawns = {
    -- relies on gamebuild 2699+
    -- Number: 1
    {
        {coords = vector4(-869.8253, -218.3545, 60.0263, 201.0578), anim = 'base', animDict = 'timetable@ron@ig_3_couch'},
        {coords = vector4(-866.1945, -219.3315, 60.0224, 127.5550), scenario = 'PROP_HUMAN_BUM_SHOPPING_CART'},
        {coords = vector4(-864.1705, -227.1222, 60.0156, 293.5235), scenario = 'WORLD_HUMAN_LEANING'},
        {coords = vector4(-861.6526, -220.8748, 60.4157, 159.9564), scenario = 'WORLD_HUMAN_SMOKING'},
        {coords = vector4(-852.6177, -221.1658, 60.0163, 121.8640), anim = 'idle_a', animDict = 'amb@world_human_leaning@male@wall@back@foot_up@idle_a'},

        -- extra slots if they have whitelist, such as below, this needs to match the max number of slots listed below in the whitelistedSpots table
        {coords = vector4(-850.1506, -231.5619, 60.0199, 1.9757), anim = 'world_human_picnic_male_lo_res_base', animDict = 'amb@lo_res_idles@'},
        {coords = vector4(-856.0728, -231.4700, 60.0156, 298.6407), scenario = 'WORLD_HUMAN_HUMAN_STATUE'},
    },

    -- Number: 2
    {
        {coords = vector4(-121.0776, -862.4391, 33.3306, 113.1999), scenario = 'WORLD_HUMAN_SMOKING'},
        {coords = vector4(-124.2769, -861.2552, 32.5306, 201.8996), scenario = 'WORLD_HUMAN_LEANING'},
        {coords = vector4(-118.7015, -865.4608, 32.5594, 37.7790), anim = 'world_human_picnic_female_lo_res_base', animDict = 'amb@lo_res_idles@'},
        {coords = vector4(-126.2822, -864.5850, 33.3303, 290.6728), anim = 'hi_dance_facedj_17_v2_male^5', animDict = 'anim@amb@nightclub@dancers@podium_dancers@'},
        {coords = vector4(-116.0711, -859.9714, 35.0777, 118.7580), anim = 'base', animDict = 'timetable@ron@ig_3_couch'}
    },

    -- Number: 3
    {
        {coords = vector4(-1773.8779, -1161.1821, 12.0180, 105.6267), scenario = 'WORLD_HUMAN_LEANING'},
        {coords = vector4(-1766.9655, -1160.2037, 12.0176, 228.0449), scenario = 'PROP_HUMAN_BUM_SHOPPING_CART'},
        {coords = vector4(-1761.4875, -1152.2964, 12.2182, 228.0451), anim = 'base', animDict = 'timetable@ron@ig_3_couch'},
        {coords = vector4(-1775.0759, -1150.8605, 12.0189, 228.0182), scenario = 'WORLD_HUMAN_SMOKING'},
        {coords = vector4(-1764.9792, -1155.5392, 12.0182, 101.0098), scenario = 'CODE_HUMAN_CROSS_ROAD_WAIT'}
    },

    -- Number: 4
    {
        {coords = vector4(293.1154, -1584.7590, 29.5321, 2.2552), scenario = 'WORLD_HUMAN_SMOKING'},
        {coords = vector4(301.6517, -1585.4432, 29.6564, 140.3674), anim = 'base', animDict = 'timetable@ron@ig_3_couch'},
        {coords = vector4(304.8588, -1589.2360, 29.5322, 127.6758), anim = 'idle_a', animDict = 'amb@world_human_leaning@male@wall@back@foot_up@idle_a'},
        {coords = vector4(310.9654, -1591.6073, 29.5322, 281.3483), scenario = 'CODE_HUMAN_CROSS_ROAD_WAIT'},
        {coords = vector4(295.7007, -1580.5994, 29.9321, 73.3252), anim = 'base', animDict = 'timetable@ron@ig_3_couch'}
    },

    -- relies on gamebuild 2699+
    -- Number: 5
    {
        {coords = vector4(911.3660, 52.3247, 110.7009, 185.3017), scenario = 'WORLD_HUMAN_SMOKING'},
        {coords = vector4(912.0974, 43.4463, 110.7009, 292.8749), anim = 'base', animDict = 'timetable@ron@ig_3_couch'},
        {coords = vector4(922.7551, 43.2746, 110.6614, 55.5768), anim = 'idle_a', animDict = 'amb@world_human_leaning@male@wall@back@foot_up@idle_a'},
        {coords = vector4(919.0404, 53.5269, 110.7009, 284.3542), scenario = 'CODE_HUMAN_CROSS_ROAD_WAIT'},
        {coords = vector4(917.0410, 43.4578, 110.7011, 359.9633), anim = 'idle_a_jimmy', animDict = 'timetable@jimmy@mics3_ig_15@'}
    },

    -- Number: 6
    {
        {coords = vector4(3831.7266, 4462.5630, 1.7187, 98.9633), scenario = 'WORLD_HUMAN_SMOKING'},
        {coords = vector4(3829.8020, 4458.1382, 1.7309, 39.7350), anim = 'world_human_picnic_female_lo_res_base', animDict = 'amb@lo_res_idles@'},
        {coords = vector4(3821.6985, 4461.5938, 2.5304, 265.5848), scenario = 'CODE_HUMAN_CROSS_ROAD_WAIT'},
        {coords = vector4(3828.9021, 4470.4741, 2.0352, 225.1551), anim = 'idle_a', animDict = 'amb@world_human_leaning@male@wall@back@foot_up@idle_a'},
        {coords = vector4(3820.4468, 4468.2109, 2.6559, 219.2950), anim = 'base', animDict = 'timetable@ron@ig_3_couch'}
    },

}
```

## Themes

Themes enabling you to style the character selection and id card how you want

```json title='config/themes.json
{
  "characterSelection": {
    "background": "#212121",
    "topBackground": "#323232",
    "topTextColour": "#686868",
    "border": "0.3em solid #323232",
    "borderRadius": "8px",
    "textColour": "#ffffff"
  },
  "idCard": {
    "inputTextColour": "#ffffff",
    "idCardTextColour": "#ffffff",
    "governmentText": "#A06900",
    "textOnCard": "#868686",
    "genderButton": {
      "background": "#212121",
      "borderRadius": "8px",
      "selectedBorder": "1px solid #ffffff"
    }
  }
}
```
