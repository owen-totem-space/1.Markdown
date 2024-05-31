---
title: XiO-Duplicate-Mac-Address
date: 2024-04-26
tags:
  - resource/issue
  - resource/team
  - crestron/xio
---
# XiO Duplicate Mac Address

## Description

- Devices go offline in XiO and can't reconnect even though they are online locally. This error has only been observed during periods when a large amount of our devices went offline overnight, likely due to RCSI network changes.

- Error only detected by connecting to the device in toolbox then running `hydrogenstatus` to check XiO connection.

- It's unknown whether the source of this error is XiO/Crestron/Microsoft servers or a local switch config.

---
## Solution:

- Unclaim the device in XiO Cloud
- Reboot the device
- Wait 30 mins (Crestron said this, it doesn't always need to be this long)
- Claim the device in XiO cloud again.
- Issue should be solved, try rebooting the device again if it doesn't come back online in XiO Cloud

---

## Crestron Case #00178623

```
Hi Owen,  
  
Indeed I can see in the backend XiO that this device entry has a different SN set up, causing the 'duplicate MAC' on processor side.  
  
Can you try these steps:  
  
1) unclaim the device in XIO Cloud  
2) reboot the processor - wait approx 30 minutes  
3) claim the device again  
  
During the time the device is unclaimed, it will reach out to the XiO first contact service, which should correct the device entry in the backend XiO DB.  
  
Please let me know.  
  
Thanks.  
  
Kind Regards | Met vriendelijke groeten,  
  
Tim Goossens  
Crestron True Blue Support Team  
  
[SupportEurope@crestron.com](mailto:SupportEurope@crestron.com)  
BE: +32 15 50 99 20
```
