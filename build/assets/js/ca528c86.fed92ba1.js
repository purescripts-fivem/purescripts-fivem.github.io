"use strict";(self.webpackChunkpurescripts_docs=self.webpackChunkpurescripts_docs||[]).push([[5843],{8740:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>t,default:()=>o,frontMatter:()=>l,metadata:()=>a,toc:()=>d});var s=r(4848),i=r(8453);const l={sidebar_position:3},t="Exports / Events",a={id:"clothing/exports",title:"Exports / Events",description:"Exports - Client",source:"@site/docs/clothing/exports.md",sourceDirName:"clothing",slug:"/clothing/exports",permalink:"/clothing/exports",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"defaultSidebar",previous:{title:"Installation",permalink:"/clothing/installation"},next:{title:"Configuration",permalink:"/clothing/configuration"}},c={},d=[{value:"Exports - Client",id:"exports---client",level:2},{value:"Appearance Manager",id:"appearance-manager",level:3},{value:"Peds",id:"peds",level:3},{value:"Menu Management",id:"menu-management",level:3},{value:"Events - Client - Handlers",id:"events---client---handlers",level:2},{value:"Menu Management",id:"menu-management-1",level:3},{value:"Events - Client - Triggers",id:"events---client---triggers",level:2},{value:"Appearance Manager",id:"appearance-manager-1",level:3},{value:"Peds",id:"peds-1",level:3},{value:"Menu Management",id:"menu-management-2",level:3}];function h(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"exports--events",children:"Exports / Events"}),"\n",(0,s.jsx)(n.h2,{id:"exports---client",children:"Exports - Client"}),"\n",(0,s.jsx)(n.h3,{id:"appearance-manager",children:"Appearance Manager"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"initiateApperance"})," - This is used for initiating the appearance of the player."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-py",children:"exports['pure-clothing']:initiateApperance()\n"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"initiateApperanceWithPed"})," - This is used for initiating the appearance of a ped."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-py",children:"local appearance = {\r\n    hair = {},\r\n    clothing = {},\r\n    faceFeatures = {},\r\n    tattoos = {},\r\n}\r\n\r\nexports['pure-clothing']:initiateApperanceWithPed(ped, appearance)\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["ped: ",(0,s.jsx)(n.code,{children:"number"})," - The model hash of the ped."]}),"\n",(0,s.jsxs)(n.li,{children:["appearance: ",(0,s.jsx)(n.code,{children:"table"})," - The appearance of the ped.","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["hair: ",(0,s.jsx)(n.code,{children:"table"})," - The hair of the ped."]}),"\n",(0,s.jsxs)(n.li,{children:["clothing: ",(0,s.jsx)(n.code,{children:"table"})," - The clothing of the ped."]}),"\n",(0,s.jsxs)(n.li,{children:["faceFeatures: ",(0,s.jsx)(n.code,{children:"table"})," - The face features of the ped."]}),"\n",(0,s.jsxs)(n.li,{children:["tattoos: ",(0,s.jsx)(n.code,{children:"table"})," - The tattoos of the ped."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"setPlayerClothing"})," - This is used for setting the players clothing (can delete any table you do not want to set)."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-py",children:"local clothing = {\r\n    {\r\n        'name': 'jacket',\r\n        'value2': 0,\r\n        'value1': 0\r\n    },\r\n    {\r\n        'name': 'arms',\r\n        'value2': 0,\r\n        'value1': 0\r\n    },\r\n    {\r\n        'name': 'vests',\r\n        'value2': 0,\r\n        'value1': 0\r\n    },\r\n    {\r\n        'name': 'undershirt',\r\n        'value2': 0,\r\n        'value1': 0\r\n    },\r\n    {\r\n        'name': 'pants',\r\n        'value2': 0,\r\n        'value1': 0\r\n    },\r\n    {\r\n        'name': 'shoes',\r\n        'value2': 0,\r\n        'value1': 0\r\n    },\r\n    {\r\n        'name': 'masks',\r\n        'value2': 0,\r\n        'value1': 0\r\n    },\r\n    {\r\n        'name': 'earrings',\r\n        'value2': -1,\r\n        'value1': -1\r\n    },\r\n    {\r\n        'name': 'decals',\r\n        'value2': 0,\r\n        'value1': 0\r\n    },\r\n    {\r\n        'name': 'watches',\r\n        'value2': -1,\r\n        'value1': -1\r\n    },\r\n    {\r\n        'name': 'bracelets',\r\n        'value2': -1,\r\n        'value1': -1\r\n    },\r\n    {\r\n        'name': 'glasses',\r\n        'value2': -1,\r\n        'value1': -1\r\n    },\r\n    {\r\n        'name': 'bags',\r\n        'value2': 0,\r\n        'value1': 0\r\n    },\r\n    {\r\n        'name': 'helmets',\r\n        'value2': -1,\r\n        'value1': -1\r\n    },\r\n    {\r\n        'name': 'chains',\r\n        'value2': 0,\r\n        'value1': 0\r\n    }\r\n}\r\n\r\nexports['pure-clothing']:setPlayerClothing(clothing, sex)\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["clothing: ",(0,s.jsx)(n.code,{children:"table"})," - The clothing of","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["name: ",(0,s.jsx)(n.code,{children:"string"})," - The name of the clothing."]}),"\n",(0,s.jsxs)(n.li,{children:["value1: ",(0,s.jsx)(n.code,{children:"number"})," - The value 1 of the clothing."]}),"\n",(0,s.jsxs)(n.li,{children:["value2: ",(0,s.jsx)(n.code,{children:"number"})," - The value 2 of the clothing"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["sex: ",(0,s.jsx)(n.code,{children:"string"})," - 'male' | 'female' | nil - set to nil if you do not want to set the ped"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"peds",children:"Peds"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"loadDefaultPed"})," - This is used for loading the default ped."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-py",children:"exports['pure-clothing']:loadDefaultPed()\n"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"setPed"})," - This is used for setting the ped."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-py",children:"exports['pure-clothing']:setPed(ped)\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["ped: ",(0,s.jsx)(n.code,{children:"string"})," - The model for the ped."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"menu-management",children:"Menu Management"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"openMenu"})," - This is used for opening the menu."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-py",children:"exports['pure-clothing']:openMenu(menu)\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["menu: ",(0,s.jsx)(n.code,{children:"string"})," - The menu to open."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Different Menu Types:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["createCharacter: ",(0,s.jsx)(n.code,{children:"string"})," - Create character menu."]}),"\n",(0,s.jsxs)(n.li,{children:["clothing: ",(0,s.jsx)(n.code,{children:"string"})," - Clothing menu."]}),"\n",(0,s.jsxs)(n.li,{children:["faceFeatures: ",(0,s.jsx)(n.code,{children:"string"})," - Face features menu."]}),"\n",(0,s.jsxs)(n.li,{children:["tattoo: ",(0,s.jsx)(n.code,{children:"string"})," - Tattoos menu."]}),"\n",(0,s.jsxs)(n.li,{children:["hair: ",(0,s.jsx)(n.code,{children:"string"})," - Hair menu."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"events---client---handlers",children:"Events - Client - Handlers"}),"\n",(0,s.jsx)(n.h3,{id:"menu-management-1",children:"Menu Management"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"openedMenu"})," - This is triggered when the player has opened a menu."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-py",children:"RegisterNetEvent('pure-clothing:openedMenu', function()\r\n    print('menu opened, stuff here')\r\nend)\n"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"exitedMenu"})," - This is triggered when the player has left a menu."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-py",children:"RegisterNetEvent('pure-clothing:exitedMenu', function()\r\n    print('menu closed, stuff here')\r\nend)\n"})}),"\n",(0,s.jsx)(n.h2,{id:"events---client---triggers",children:"Events - Client - Triggers"}),"\n",(0,s.jsx)(n.h3,{id:"appearance-manager-1",children:"Appearance Manager"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"initiateApperance"})," - This is used for initiating the appearance of the player."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-py",children:"TriggerEvent('pure-clothing:initiateApperance')\n"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"initiateApperanceWithPed"})," - This is used for initiating the appearance of a ped."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-py",children:"local appearance = {\r\n    hair = {},\r\n    clothing = {},\r\n    faceFeatures = {},\r\n    tattoos = {},\r\n}\r\n\r\nTriggerEvent('pure-clothing:initiateApperanceWithPed', ped, appearance)\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["ped: ",(0,s.jsx)(n.code,{children:"number"})," - The model hash of the ped."]}),"\n",(0,s.jsxs)(n.li,{children:["appearance: ",(0,s.jsx)(n.code,{children:"table"})," - The appearance of the ped.","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["hair: ",(0,s.jsx)(n.code,{children:"table"})," - The hair of the ped."]}),"\n",(0,s.jsxs)(n.li,{children:["clothing: ",(0,s.jsx)(n.code,{children:"table"})," - The clothing of the ped."]}),"\n",(0,s.jsxs)(n.li,{children:["faceFeatures: ",(0,s.jsx)(n.code,{children:"table"})," - The face features of the ped."]}),"\n",(0,s.jsxs)(n.li,{children:["tattoos: ",(0,s.jsx)(n.code,{children:"table"})," - The tattoos of the ped."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"peds-1",children:"Peds"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"setPed"})," - This is used for setting the ped."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-py",children:"TriggerEvent('pure-clothing:setPed', ped)\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["ped: ",(0,s.jsx)(n.code,{children:"string"})," - The model for the ped."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"menu-management-2",children:"Menu Management"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"openMenu"})," - This is used for opening the menu."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-py",children:"TriggerEvent('pure-clothing:openMenu', menu)\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["menu: ",(0,s.jsx)(n.code,{children:"string"})," - The menu to open."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Different Menu Types:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["createCharacter: ",(0,s.jsx)(n.code,{children:"string"})," - Create character menu."]}),"\n",(0,s.jsxs)(n.li,{children:["clothing: ",(0,s.jsx)(n.code,{children:"string"})," - Clothing menu."]}),"\n",(0,s.jsxs)(n.li,{children:["faceFeatures: ",(0,s.jsx)(n.code,{children:"string"})," - Face features menu."]}),"\n",(0,s.jsxs)(n.li,{children:["tattoo: ",(0,s.jsx)(n.code,{children:"string"})," - Tattoos menu."]}),"\n",(0,s.jsxs)(n.li,{children:["hair: ",(0,s.jsx)(n.code,{children:"string"})," - Hair menu."]}),"\n"]})]})}function o(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>t,x:()=>a});var s=r(6540);const i={},l=s.createContext(i);function t(e){const n=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);