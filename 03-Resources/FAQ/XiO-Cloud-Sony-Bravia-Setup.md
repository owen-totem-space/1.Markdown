---
title: "XiO Cloud: Sony Bravia Setup"
tags:
  - resource/team
  - resource/tutorial
---

# Sony-Bravia-XiO-Direct

## Description

- Activate XiO Cloud connection for the screen to connect directly to XiO Cloud
- Sony Bravia can then be accessed at `http://10.103.2.x/sony/webui`
- Screen settings and updates can now be managed from the backend of the screen
- Power, Select Input and volume can be managed in XiO

## Solution

> [!Note]
>There are multiple reboots required during this process, so it takes some time.

###### First
- Enter Pro Mode Settings 
- Go to Startup Services
- Enable Bravia Web Control UI
- Enable Remote Firmware Update Service
- Enable Crestron Connected App
- Reboot required after install of each App
- Set the Admin Password (this is required for access to Web UI also)
- username should be "admin"
- password should be our standard department password

###### Next
- XiO Cloud App appears after Crestron Connected App is installed
- If it hasn't appeared, reboot.
- Install XiO Cloud App
- Go to "Home Page" and select XiO Cloud App, a serial number/mac will appear
- Claim on XiO with these details

---
###### Resources
- https://pro-bravia.sony.net/guides/startup_services/crestron_xio_cloud/