---
title: AV-VLAN
date: 2024-05-27
tags:
  - project/active
---

## Description

- Find all devices that are on the network and transfer them to the AV VLAN of 10.103.2.xx
- Add Crestron devices to XiO Cloud and track programs
- Find access to QSC devices
- Find all sennheiser microphones and put them on the network
- Add screens to XiO cloud
- Enable screens to power on and off when room not in use
	- Buy crestron HD-CTL-101 for flex screens that don't have this feature

- See also:
	- [YS26-Networking](../04-Archive/Complete/YS26-Networking.md)
	- [KPL-Networking](../04-Archive/Complete/KPL-Networking.md)
	- [Network all screens](../04-Archive/Complete/Networking-Screens-121.md)
	- [Sennheiser-Cockpit](../../03-Resources/FAQ/Sennheiser-Cockpit.md)
	- [Camera-List](../02-Areas/Dashy/Camera-List.md)

---

## Rooms with devices not on VLAN
### Ardilaun

- [BlockB-Study-Room](../../03-Resources/Rooms/BlockB-Study-Room.md)

### SSG121
- [SSG121-Kiran-Pathak-Lab](../../03-Resources/Rooms/SSG121-Kiran-Pathak-Lab.md)
- Radiology Room
- [SSG121-MR-101](../../03-Resources/Rooms/SSG121-MR-101.md)
- [SSG121-MR-301](../../03-Resources/Rooms/SSG121-MR-301.md)
- [SSG121-MR-302](../../03-Resources/Rooms/SSG121-MR-302.md)
- [SSG121-MR-401](../../03-Resources/Rooms/SSG121-MR-401.md)
- [SSG121-MR-G01](../../03-Resources/Rooms/SSG121-MR-G01.md)

### SSG123
- [SSG123-Albert](../../03-Resources/Rooms/SSG123-Albert.md)
- [SSG123-Mary-Emily-Dowson-Room](../../03-Resources/Rooms/SSG123-Mary-Emily-Dowson-Room.md)
- [SSG123-TR4](../../03-Resources/Rooms/SSG123-TR4.md)
- [SSG123-SARA-MR](../../03-Resources/Rooms/SSG123-SARA-MR.md)
- [SSG123-College-Hall](../03-Resources/Rooms/SSG123-College-Hall.md)
- [SSG123-Exam-Hall](../03-Resources/Rooms/SSG123-Exam-Hall.md)
- [SSG123-PBS-MR](../03-Resources/Rooms/SSG123-PBS-MR.md)
- [SSG123-SARA-MR](../03-Resources/Rooms/SSG123-SARA-MR.md)

---

### Problem Migrating UC-Engines to VLAN

- When the uc-engines migrated to the VLAN, they had an issue every morning after the nightly reboot and I imitated the problem multiple times through rebooting manually. IT didn't happen for every manual reboot, but every 2nd, 3rd or 4th time.
- It appears from the log files that the DHCP server was refusing the IP that was being requested.
- There were logs of the uc-engine requesting both it's old 10.2.176.x IP and 10.103.2.x IP. Perhaps this contributed to the problem.
- If so, perhaps performing the following may be necessary:
	```powershell
	ipconfig /release
	
	or
	
	ipconfig /renew
	```

### DHCP-Client Log File
![](../../04-Archive/Attachments/DHCPNACK_UC-Engine.png)

---

Radiology TR Room
- 192.168.1.120 - Shure MXA910 mic Network
- 192.168.1.110 - Shure MXA910 mic Audio Network
- QSC LAN A - 192.168.1.140
- QSC LAN B - 10.2.176.128

Ardilaun - Study Room
- Sennheiser - 10.103.2.206
- QSC - 10.103.2.207

KPL/Dispensory
- QSC - 10.2.176.144

