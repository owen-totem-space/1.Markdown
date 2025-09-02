---
title: College-Hall-Camera-Install
date: 2024-04-10
building: 123SSG
room: College-Hall
tags:
  - project/complete
---

## Description

Install Aver PTZ camera for use by the podium laptop for Teams Meetings or Teaching. The camera should be accessible via the network for control and configuration. The camera should be controlled by the program and default to a working state when users turn the system on.

The following needs to be decided:
- Camera Position
- Cabling options
- Control options

## Tasks

- [x] Reprogram
	-  Remove up and down from button pad
	-  Add web XPanel
	-  Add Aver Camera

- [x] Cable Camera
	- Cabling To Lectern
	-  Cabling To Network
	-  Power For Converters
- [x] Get HDMI - Cat6 Converters
- [x] Debug pan/tilt programming

## Information

Device         | MAC               | Link
-------------- | ----------------- | ---------
HD-MD-400-CE   | 00:10:7f:84:41:b5 | [Autoswitch IP]
Aver PTZ       | 00:18:1A:09:75:95 | [Camera IP]
MPC3           | c4:42:68:25:59:6a | [XPanel IP]

[Camera IP]: http://10.2.160.54
[Autoswitch IP]: http://10.2.160.45
[XPanel IP]: http://10.2.160.42

---

###### Resources
- [Aver-PTZ330](../../02-Areas/Equipment/Aver-PTZ330.md)
- [SSG123-College-Hall](../../03-Resources/Rooms/SSG123-College-Hall.md)
- [College-Hall-Podium-Cabling](College-Hall-Podium-Cabling.md)