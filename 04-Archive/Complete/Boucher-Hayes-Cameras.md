---
title: Boucher-Hayes-Cameras
date: 2024-04-10
building: 26YS
room: Boucher-Hayes-502
tags: 
  - project/complete
  - project/team
---


## Tasks
- [x] update firmware
- [x] Get com port numbers. Attach in program. (display, projector, cameras)
- [x] Camera inputs 5 -6 
- [x] Confirm relay numbers
- [x] repatch/cable for camera and capture card
- [x] remove poly device
- [x] Write program - no program available
- [x] Find wiring for second Camera
	- [See Below](#Fix-Second-Camera)

## Connected Equipment
- cp3 controller
- DM-MD8x8 matrix
- tsw 1050
- extron mgp 462 pro
- extron DMP 128
- poly group 700
- pansonic projector
- Sony display
- DMC-RMC-4K-Scaler-C

--- 

## Fix-Second-Camera

- Use Toolbox Simpl Debugger to watch Camera Tx and Rx signals
- Try different wiring permutations in CP3 com port
- Use Cam init to try to stimulate Rx.
- Once Rx is seen, camera should be working and controllable.

---

###### Resources
- [YS26-Boucher-Hayes-502](../../03-Resources/Rooms/YS26-Boucher-Hayes-502.md)