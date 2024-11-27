---
title: Physio-Movement-Redesign
date: 2024-04-12
building: 123SSG
room: Physio-Movement
tags:
  - project/active
---

email eimear mcdonnell
## 241016
- find model projector - do drivers
- get 2x dm Rx and 1x DM Tx



---

- https://docs.crestron.com/en-us/7750/Content/Topics/Configuration/Initial-Setup.htm
- https://www.crestron.com/getmedia/3b3588d1-9356-4d4b-a2df-b3ac1c6fff14/mg_bp_installation_setup_crestron_rf_products
## Description

Install new switching system in physio movement lab. The current system is extremely prone to errors and communication problems between switchers and the button panel.

I plan to replace the two switcher system with a single dual output DMPS3.

## Program Notes

- Same user interface as everywhere else
- 2 camera switch for control
- Cameras should always switch capture card and screen.
- Pc inputs should only switch screens, not capture card.
- Mic audio should always be routed to capture card.

## Task List

- [ ] Set up test rig with AP3 and Wireless Touchpanel
	- Install battery in touchpanel
	- Set up CEN-GWEXER
- [ ] Create Schematic
- [ ] Create Program
	- [ ] User Interface
	- [ ] Web XPanel
- [ ] Install new equipment

## Purchases

- [x] Buy battery for Wireless Touchpanel TST-902
- [x] Buy wireless CEN-GWEXER

###### Quotes & PO
- [Crestron Equipment_Rev1-Quote with products and scope.pdf](https://rcsicampus-my.sharepoint.com/:b:/r/personal/owenmccarthy_rcsi_com/Documents/Archive/Crestron%20Equipment_Rev1-Quote%20with%20products%20and%20scope.pdf?csf=1&web=1&e=GPoQ2a)
- [po-TST902-CEN-GWEXER](https://rcsicampus-my.sharepoint.com/:b:/r/personal/owenmccarthy_rcsi_com/Documents/Archive/po-ExamHall-RMC4.pdf?csf=1&web=1&e=zfsnpx)

## Cabling
- Can We run new rs232/network cabling?

---

## Pictures

- ![ |200](../04-Archive/Attachments/Physio-Movement-Rack.jpg)
	- [Link](../04-Archive/Attachments/Physio-Movement-Rack.jpg)
- ![|200](../04-Archive/Attachments/Physio-Movement-Projector.jpg)
	- [Link](../04-Archive/Attachments/Physio-Movement-Projector.jpg)


---

## New Equipment Information

| Equipment   | MAC               | IP           | Serial       |
| ----------- | ----------------- | ------------ | ------------ |
| DMPS        | 00.10.7f.a8.41.62 | 10.103.2.197 | 1807JBH15435 |
| DM-TX-201-C | 00.10.7f.4c.06.64 |              | 11212991     |
| CEN-GWEXER  | c4.42.68.51.78.ec | 10.103.2.228 | 2338JBH10299 |
