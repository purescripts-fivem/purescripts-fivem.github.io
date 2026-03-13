---
sidebar_position: 1
---

# Client Exports and Events

## MDT Management

### Is Open

This will return a boolean if the MDT is open or not

```lua
---@return boolean
local open = exports['pure_mdt']:IsMDTOpen()
```

### Open MDT

This will open the MDT from the client

```lua
exports['pure_mdt']:OpenMDTClient()
```

### Open Report with Id

This will open the MDT then set report to the id given

```lua
---@param number
exports['pure_mdt']:OpenReportWithId(id)
```

## Docket

All of these exports and events can be seen in `client/framework/*yourframework*/` `CreateTarget()`

### Create Court

With this export you can create a court case, you will need to do your own permission check beforehand

```lua
---@return boolean
local success = exports['pure_mdt']:CreateCourt()
```

### Edit Court

This export will bring up an input popup, put in the id and it will then allow you to edit it

```lua
---@return boolean
local success = exports['pure_mdt']:EditCourts()
```

### Open Courts

This is an event, used to open the court view for the general public

```lua
TriggerEvent('doj:openCourts')
```

## Dispatch

### Show Dispatch

This will show the built in dispatch, to trigger this head over to [Server Exports](./server_exports#dispatch)

```lua
exports['pure_mdt']:ShowDispatch()
```

### Hide Dispatch

This will hide the built in dispatch

```lua
exports['pure_mdt']:HideDispatch()
```

### Is Dispatch Open

Returns a boolean if they are in the dispatch or not

```lua
---@return boolean
local open = exports['pure_mdt']:IsInDispatch()
```
