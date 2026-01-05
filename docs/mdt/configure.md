---
sidebar_position: 2
---

# Configuring the Resource

Within the MDT, there is a number of configuration options

You will find the config file with all explantions of what that specific part does, however here are some important ones to note

### Synced Editing

This enables the reports to be synced between players meaning multiple people can edit it at once

`hocusUrl` - This is the websocket server in which you should setup, in order to port foward your websocket you will need to speak to your VPS provider in order to achieve this, you can set this to false and this will be an offline editor (if using an offline editor I would recommend turning on oneEditor)

`oneEditor` - This is used to only allow one person to edit the report at a time, this is suggest if you are not using sockets and or using hocus

`useSockets` - This is used instead of using a websocket a framework built in lua to simulate it, this is for the all the categories on a report other than summary, this means it dynamically updates such as user 1 adds a officer involved user 2 will see that and can edit it if both editing the report!

```lua
-- hocusUrl = 'wss://127.0.0.1:1244', -- either set the url or set to false if u want to use an offline editor
hocusUrl = false,
oneEditor = true, -- this is only used if you use the offline editor, this is very recommended!
useSockets = true, -- sockets meaning synced report other than summary, this is such as officers involved, title etc - this is very recommended!
```

### Permission Based System

Throughout the MDT, there is a number of different permission checks such as your standard job check, and then the actual permissions that set within the MDT

```lua
    postChat = 0, -- To be able to post a chat
    postBulletin = 4, -- To be able to post a bulletin
    editCharge = 12, -- To be able to edit a charge within the charges section
    manageTags = 4, -- To manage tags on the performance view
    deleteRadio = 3, -- To be able to delete a radio station
    deleteBulletin = 4, -- To be able to delete a bulletin
    deleteReport = 12, -- To be able to delete a report
    createCourt = 4 -- To be able to create a court case
```

Set these to a grade higher than you have avaiable if you want to stop them using completely such as the above being 12 and the max rank being 10 ensures no one can access this

### QB Core Exclusive

For QB Core within the radio system, you will need to navigate to qb-radio/client

```lua title='qb-radio/client'
local function connecttoradio(channel)
    if channel > Config.MaxFrequency or channel <= 0 then QBCore.Functions.Notify(Lang:t('restricted_channel_error'), 'error') return false end
    if Config.RestrictedChannels[channel] ~= nil then
        if not Config.RestrictedChannels[channel][PlayerData.job.name] or not PlayerData.job.onduty then
            QBCore.Functions.Notify(Lang:t('restricted_channel_error'), 'error')
            return false
        end
    end
    RadioChannel = channel
    if onRadio then
        exports["pma-voice"]:setRadioChannel(0)
    else
        onRadio = true
        exports["pma-voice"]:setVoiceProperty("radioEnabled", true)
    end
    exports["pma-voice"]:setRadioChannel(channel)
    if SplitStr(tostring(channel), ".")[2] ~= nil and SplitStr(tostring(channel), ".")[2] ~= "" then
        QBCore.Functions.Notify(Lang:t('joined_to_radio', {channel = channel .. ' MHz'}), 'success')
    else
        QBCore.Functions.Notify(Lang:t('joined_to_radio', {channel = channel .. '.00 MHz'}), 'success')
    end
    return true
end

-- Add this line:
exports('connecttoradio', connecttoradio)
```

This then allows the ConnectRadio function in qbcore to connect to the radio system default to qbcore
