---
title: XiO-Duplicate-Mac-Address
date: 2024-04-26
tags:
  - issue
---
# XiO Duplicate Mac Address

## Description

- Devices go offline in XiO and can't reconnect even though they are online locally. This error has only been observed during periods when a large amount of our devices went offline overnight, likely due to RCSI network changes.

- Error only detected by connecting to the device in toolbox then running `hydrogenstatus` to check XiO connection.

- It's unknown whether the source of this error is XiO/Crestron/Microsoft servers or a local switch config. I contacted Crestron Support to find the solution.

---
## Solution:

- Unclaim the device in XiO Cloud
- Reboot the device
- Wait 20-30 mins (Crestron said this, it doesn't always need to be this long)
- Claim the device in XiO cloud again.
- Issue should be solved, try rebooting the device again if it doesn't come back online in XiO Cloud
