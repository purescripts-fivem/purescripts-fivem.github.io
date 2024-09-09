---
sidebar_position: 2
# slug: /
---

# FiveM | Escrow Errors

## Error parsing script syntax error ...

This means your server artifacts are outdated. Please update to the latest recommended version to avoid any compatibility issues [update here](https://runtime.fivem.net/artifacts/fivem/build_server_windows/master/).

## You lack the required entitlement to use

The [asset](https://keymaster.fivem.net/asset-grants) you are trying to use is owned by a different [keymaster](https://keymaster.fivem.net/) account than your server's license key or the one in which you purchased it with there please transfer the [asset](https://keymaster.fivem.net/asset-grants) to the same account as your server's license key, or restart your server.

## Failed to verify protected resource

Common reasons why this error occurs and solutions:

- Using Filezilla - use another FTP client such as [WinSCP](https://winscp.net/eng/download.php)
- File has corrupted while downloading - re-download the file from [keymaster](https://keymaster.fivem.net/)
- You are transferring the folder to the VPS file by file - Upload the .zip file and extract it after it is already on your VPS
