---
title: Desmond-Reprogramming
date: 2024-04-15
building: 26YS
room: Desmond
tags:
  - project/complete
  - programming
---

## Description

Reprogram Desmond CP3 and touch panels

__Purpose__
- Make projectors accessible to XiO for scheduling and remote control
- Use redundant output to send direct line to foldback monitors and remove bluetooth
- Use redundant output to send camera to capture card in lectern
- Remove Polycom Group 700
- Remove redundant touch panel controls
- Add touch panel camera control and simplify user interface
- Add Web Xpanel for remote control
- Add control of booth monitor to tech touch panel
- Add projector mute button to Tech touch panel

## Hardware Changes

- [x] Removed 2x CAE Crestron DM Tx
- [x] Added DM Scaler to output 3 of DM Matrix for foldback screens

## Information

Heading          | Description
---------------- | -----------------

## Final Notes

__On Startup__
- Volume to 80%
- Select Camera Left
- Foldback follows Projector left, but is individually selectable
- Startup is faster, disables shutdown button instead

__Extras__
- Mute Projectors Button
- Booth Speaker Button

__Notes on Camera Control__
- The camera selection, on the main page, selects the camera for control and also sends selected camera to the PC capture card.
- The camera selection, on the "control page", only selects the camera for control.

__Notes on Cameras__
- Left Cam, Overhead Cam and Document Camera are selectable by users for use on the PC.
This leaves only the right camera unavailable to users. Please be aware of this if you are logging onto the back end of the cameras or moving cameras remotely.
Right Cam IP: 10.103.2.117


__Web Control__
- Web Control available on the CP3 Controller. IP: 10.103.2.112
- username and pw are same as other crestr0n device logins
- Be aware that this is changing the room touchpanel



###### Resources

- [Desmond](../../03-Resources/Rooms/Desmond.md)
- [Desmond-Foldback-Monitors](../../01-Projects/Desmond-Foldback-Monitors.md)