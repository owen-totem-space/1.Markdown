---
title: Block-B-Networking
date: 2024-05-16
building: Ardilaun
room: Study-Room
tags:
  - project/complete
---

## Description

- Put equipment in Block B/Ardilaun Floor 3 onto RCSI Network
- Add microphones to cockpit
- Add crestron devices to XiO Cloud
- See if screens can be added to XiO or utilise a web ui

### Task List
- [x] Create XiO Cloud Room
- [x] Update firmware on Crestron MPC3
- [x] Update Screen Firmware
- [x] Enable XiO software on screens
- [x] Enable Web UI on screen
- [x] Cat6 cable to network mic charger 
- [x] Replace Dante cat 6 cable
- [x] Add Everything to XiO
- [x] Put QSC Flex System on network
- [x] Investigate if new switch is needed
	- https://www.elara.ie/productdetail.aspx?productcode=ECE7923350
	- https://www.elara.ie/productdetail.aspx?productcode=ECE5831775
	- https://www.elara.ie/productdetail.aspx?productcode=ECE5826760
	- https://www.elara.ie/productdetail.aspx?productcode=MME0714416

### Old Static Setup

IPID             | IP                | MAC
---------------- | ----------------- | --- 
03               | 192.168.1.200     | 88:c9:e8:99:e4:93
04               | 192.168.1.205     | 88:c9:e8:d4:a2:7e
05               | 192.168.1.210     | 88:c9:e8:d4:a2:d1
06               | 192.168.1.215     | 88:c9:e8:d4:a2:d2
07               | 192.168.1.220     | 88:c9:e8:d4:a2:d8
08               | 192.168.1.225     | 88:c9:e8:d4:a2:7b
09   Extron      | 192.168.1.254     | 00:05:A6:26:17:51

Device           | IP                | MAC
---------------- | ----------------- | --- 
QSC              | 192.168.10.100    | 00:60:74:F4:0F:6E
Dante            | 192.168.10.111    | 00:1B:66:37:24:3B
Sennheiser Rx    | 192.168.10.110    | 00:1B:66:37:24:3A
Sennheiser CHG   | Not networked     | 00:1B:66:38:24:DF
Crestron MPC3-201| 192.168.1.100     | c4:42:68:0d:e1:78

### New Setup on RCSI Network

IPID  | Device        | IP                | MAC
----- | ------------- | ----------------- | -----------------
03    | Sony Bravia   | 10.2.224.124      | 88:c9:e8:99:e4:93
04    | Sony Bravia   | 10.2.224.125      | 88:c9:e8:d4:a2:7e
05    | Sony Bravia   | 10.2.224.126      | 88:c9:e8:d4:a2:d1
06    | Sony Bravia   | 10.2.224.131      | 88:c9:e8:d4:a2:d2
07    | Sony Bravia   | 10.2.224.132      | 88:c9:e8:d4:a2:d8
08    | Sony Bravia   | 10.2.224.134      | 88:c9:e8:d4:a2:7b
09    | Extron IN1804 | 10.2.224.138      | 00:05:A6:26:17:51

Device           | IP                | MAC
---------------- | ----------------- | -----------------
QSC              | 10.2.224.67       | 00:60:74:F4:0F:6E
Dante            | 10.2.224.112      | 00:1B:66:37:24:3B
Sennheiser Rx    | 10.2.224.117      | 00:1B:66:37:24:3A
Sennheiser CHG   | 10.2.224.143      | 00:1B:66:38:24:DF
Crestron MPC3-201| 10.2.224.115      | c4:42:68:0d:e1:78


---

##### Extron authentication
- Connect via PCS, on USB, password requested, did not find password.
- Enabled DHCP via User Interface menu on device
- Access Web UI with username Admin, no password.
- Connect via PCS, enter IP, no password requested
- User and password do not appear activated on backend

[Extron 1804 Manual](https://media.extron.com/public/download/files/userman/68-3274-01_C_IN1804UG.pdf)

##### Sennheiser
![](../Attachments/BlockB-Sennheiser-screenshot1.png)

##### QSC
![](../Attachments/blockB-QSC-screenshot1.png)

