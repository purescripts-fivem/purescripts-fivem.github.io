"use strict";(self.webpackChunkpurescripts_docs=self.webpackChunkpurescripts_docs||[]).push([[4899],{1689:(n,o,e)=>{e.r(o),e.d(o,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>t,metadata:()=>a,toc:()=>l});var r=e(4848),i=e(8453);const t={sidebar_position:3},s="Configuration",a={id:"spawnselector/configuration",title:"Configuration",description:"Here you will find an indepth documentation into the config files and how to change them to your liking.",source:"@site/docs/spawnselector/configuration.md",sourceDirName:"spawnselector",slug:"/spawnselector/configuration",permalink:"/spawnselector/configuration",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"defaultSidebar",previous:{title:"Installation",permalink:"/spawnselector/installation"},next:{title:"Exports - Client",permalink:"/spawnselector/exports"}},c={},l=[{value:"Config",id:"config",level:2},{value:"Spawns",id:"spawns",level:2},{value:"Themes",id:"themes",level:2}];function u(n){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,i.R)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(o.h1,{id:"configuration",children:"Configuration"}),"\n",(0,r.jsx)(o.p,{children:"Here you will find an indepth documentation into the config files and how to change them to your liking."}),"\n",(0,r.jsx)(o.h2,{id:"config",children:"Config"}),"\n",(0,r.jsx)(o.p,{children:"Base config file"}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-title='config/config.lua",children:"Config = {\r\n    -- [[ Frameworks Supported ]] --\r\n    --[[\r\n        qbcore - https://github.com/qbcore-framework\r\n        esx - https://github.com/esx-framework/esx_core\r\n        qbox - https://github.com/Qbox-project/qbx-core\r\n        standalone -\r\n    --]]\r\n    framework = 'qbcore',\r\n\r\n    language = 'en', -- maybe remove idek if we will need to use this\r\n\r\n    debug = true, -- debug mode\r\n\r\n    enableClickingAudio = true, -- enable clicking audio when clicking on a button\r\n\r\n    coords = {\r\n        cameraCoords = vector4(-839.7095, -576.650, 96.1750, 214.1250),\r\n        boardCoords = vector4(-837.9325, -579.2559, 96.1980, 214.1250)\r\n    },\r\n\r\n    -- [[ Housing Supported ]] --\r\n    --[[\r\n        qb-housing - https://github.com/qbcore-framework/qb-houses,\r\n        ps-housing - https://github.com/Project-Sloth/ps-housing,\r\n        qs-housing,\r\n        bcs-housing,\r\n        nil - if you don't use any housing script\r\n    --]]\r\n    housingScript = 'ps-housing',\r\n\r\n    housingSettings = {\r\n        ifHousingUseKeyholders = false, -- if you use qb-housing or ps-housing and want to use keyholders instead of the owner (READ) if you use ps-housing you need to configure it so your own cid is in the has_access table otherwise this will not work\r\n    },\r\n\r\n    --[[ icons ]]--\r\n    icons = {\r\n        apartments = {\r\n            icon = 'fa-building', -- these are free font awesome icons\r\n            colour = '#38e160'\r\n        },\r\n        houses = {\r\n            icon = 'fa-house',\r\n            colour = '#38e160'\r\n        },\r\n        lastLocation = {\r\n            icon = 'fa-map-pin',\r\n            colour = '#38e160'\r\n        },\r\n        groupedIcons = {\r\n            icon = 'fa-circle-chevron-right',\r\n            colour = '#38e160'\r\n        }\r\n    },\r\n\r\n    nui = {\r\n        selectColour = '#38e160',\r\n        spawnButtonColour = '#38e160',\r\n    },\r\n\r\n    anitCombatLog = true, -- if enabled if the player leaves and they are dead it will spawn them last location and not open the spawn menu\r\n\r\n    difference = 25.0, -- the difference between the coords of the spawn and the spawn next to it\r\n\r\n    timeToPlayAnimForIfEnabled = 1, -- this is the time the animation will play for before clearing it (seconds)\r\n}\n"})}),"\n",(0,r.jsx)(o.h2,{id:"spawns",children:"Spawns"}),"\n",(0,r.jsx)(o.p,{children:"The spawns config for different spawns that you can use"}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-title='config/spawns.lua",children:"Config.spawns = {\r\n    {name = 'Mission Row', coords = vector4(419.3939, -991.1760, 29.3152, 90.3872), icon = 'fa-location-dot', colour = '#38e160', anim = 'idle_a', animDict = 'amb@world_human_leaning@male@wall@back@foot_up@idle_a'},\r\n    {name = 'Pier', coords = vector4(-1688.9659, -1051.6799, 13.1025, 231.8320), icon = 'fa-location-dot', colour = '#38e160', scenario = 'WORLD_HUMAN_SMOKING'},\r\n    -- examples above of how if you want to spawn a player with them in an active animation\r\n    {name = 'Pillbox', coords = vector4(270.4436, -615.9338, 44.0116, 72.6246), icon = 'fa-location-dot', colour = '#38e160'},\r\n    {name = 'Train Station', coords = vector4(95.0894, -1708.6066, 29.5116, 227.7118), icon = 'fa-location-dot', colour = '#38e160'},\r\n    {name = 'West Vinewood', coords = vector4(-627.6992, 294.5744, 81.9812, 170.5146), icon = 'fa-location-dot', colour = '#38e160'},\r\n    {name = 'Prison', coords = vector4(1845.9620, 2584.4573, 45.6720, 272.5580), icon = 'fa-location-dot', colour = '#38e160'},\r\n    {name = 'Sandy PD', coords = vector4(1854.5367, 3680.5942, 34.2666, 210.5599), icon = 'fa-location-dot', colour = '#38e160'},\r\n    {name = 'Paleto Hotel', coords = vector4(-103.8195, 6315.4624, 31.5762, 140.8317), icon = 'fa-location-dot', colour = '#38e160'},\r\n}\r\n\r\nConfig.jobSpawns = {\r\n    ['police'] = {\r\n        {name = 'Blaze Testing', coords = vector4(416.1169, -1038.9733, 29.4665, 232.3573), icon = 'fa-location-dot', colour = '#38e160'},\r\n    },\r\n    -- This is the job name for example ESX: police, QB: police etc etc\r\n}\n"})}),"\n",(0,r.jsx)(o.h2,{id:"themes",children:"Themes"}),"\n",(0,r.jsx)(o.p,{children:"The theme is built into the configuration file and also the individual spawn file so you can change the icon and colour of each spawn depending on your need/want as a server"})]})}function d(n={}){const{wrapper:o}={...(0,i.R)(),...n.components};return o?(0,r.jsx)(o,{...n,children:(0,r.jsx)(u,{...n})}):u(n)}},8453:(n,o,e)=>{e.d(o,{R:()=>s,x:()=>a});var r=e(6540);const i={},t=r.createContext(i);function s(n){const o=r.useContext(t);return r.useMemo((function(){return"function"==typeof n?n(o):{...o,...n}}),[o,n])}function a(n){let o;return o=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:s(n.components),r.createElement(t.Provider,{value:o},n.children)}}}]);