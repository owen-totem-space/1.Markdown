---
title: UC-Engine-IP-Address-Changed
date: 2024-04-08
tags: [issue, xio, flex]
---

> [!CAUTION]
> XiO Cloud settings take precedence over local settings. [XiO Cloud Help](../02-Information/Crestron-OLH-Links.md#XiO-Cloud)

#### Description

In a flex system, the Mercury Touchpanel needs the IP address of the UC-Engine that it is connected to. The UC-Engine does not need to know the IP of the Mercury device. 

If the IP address of the UC-Engine changes, this new IP address will need to be entered into the Mercury device's settings. This can be done via XiO Cloud or directly on the device.

---

#### XiO Cloud Resolution:

```
- Go to XiO -> Find the UC-Engine -> Note it's IP address from the "Network" dropdown
- Select the connected Mercury X device
- Select Settings in top tab buttons
- Go to "Applications" dropdown
- Ensure checkbox beside "Application Mode" is selected
- You can now change the "UC Engine Address" to the IP noted earlier.
- UC-Engine Port = 49500
- Save Changes
```

#### Local Network Resolution:

```
- Find and note IP address of UC-Engine (XiO, Toolbox, any other method)
- Note IP address of Mercury X from it's front screen or other method available
- Visit IP address of Mercury X in a browser
- Login with device credentials
- Select "Device" in side menu
- Scroll down to "Applications" dropdown and enter IP address of UC-Engine in "Teams Video PC Address"
- UC-Engine Port = 49500
- Save Changes
```
---

