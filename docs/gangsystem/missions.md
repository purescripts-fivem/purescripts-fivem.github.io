---
sidebar_position: 7
---

# Missions

## Quest System

We have a fully interactive quest system which allows users to do a variety of tasks in order to earn pre set rewards along with reputation points in which can be spent within the gangsystem's store.

There is a variety of different quests in which the user can complete, these include:

- itemHandover - A ped will spawn and the user has to give them specific items in return for a reward.
- findCar - A car will spawn and the user has to lockpick and dump it in the water.
- findProp - A prop will spawn and the user has to find it and return it to the ped.
- gangNpcKill - A number of peds will spawn and the user has to take them all out.
- assassinateNpc - A specific ped will spawn and the user has to assassinate them.

### Adding a Quest

When adding a quest you need to think about a lot of things, such as the type of the quest, the only ones you will need to add for different types are: `itemHandover`, `assassinateNpc`, as the rest of these are pre defined by a random element and you can just change it within the config file.

After configuring these tables you can then add them to the Config.quests.missionQuests table, this will then be added successfully after a server restart.

#### itemHandover

```lua
{
    id = 'GANG_ITEM_1', -- Change this so it does not conflict with other quests
    type = 'itemHandover', -- This is the set type
    objectiveText = 'Ive heard some drug dealer wants some pills, go give him 50 oxy', -- This is the text that will be displayed to the user and sent through the laptop with a notification
    requirements = {
        -- You have two types here, items and cash, you can add as many as you want or can set the entire requirements to nil if you want to make it a free quest such as below
        items = {
            { name = 'oxy', amount = 50 },
        },
        cash = {
            amount = 50000,
        }
    },
    peds = {
        -- This is where the ped will be spawning, you can set the location, model, task and finishedText
        location = vector4(275.659, -835.4254, 28.2373, 0.0), -- However if you use random location this will be ignored
        model = `s_m_y_dealer_01`, -- This model is never changed
        task = 'WORLD_HUMAN_DRUG_DEALER', -- This is the task
        finishedText = 'Give me that oxy' -- This is displayed on the 3rd eye only
    },
    rewards = {
        -- These are the set rewards for after completeting a successful quest
        items = {
            {name = 'oxy', amount = 100}
        },
        cash = {
            amount = 75000
        },
        custom = function(source)
            if source then
                -- Here you can add any custom code you want to run after the quest has been completed successfully
                print('BLAZE: adding source: ', source)
            end
        end,
    },
},
```

#### assassinateNpc

```lua
{
    id = 'GANG_ASSASSIN_1', -- Change this so it does not conflict with other quests
    type = 'assassinateNpc', -- This is the set type
    objectiveText = 'Go take out this guy, Its a guy in a suit, with slick back hair', -- This is the text that will be displayed to the user and sent through the laptop with a notification
    requirements = nil, -- This is where you can set the requirements for the quest, you can set this to nil if you want it to be a free quest such as it is currently
    peds = {
        location = vector4(1132.13, -479.63, 65.01, 162), -- This is where the ped will be spawning, you can set the location, model - however if you use random location this will be ignored
        model = `cs_milton`, -- This model is never changed, such as need to explain the description of the ped
    },
    rewards = {
        -- These are the set rewards for after completeting a successful quest
        items = {
            { name = 'weapon_heavypistol', amount = 1},
        },
        custom = function(source)
            if source then
                -- Gangs:AddReputation(source, 1.0)
                print('BLAZE: adding source: ', source)
            end
        end,
    },
},
```
