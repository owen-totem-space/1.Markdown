---
title: Desmond-QSC-DM-Upgrade
date: 2024-04-15
building: 26YS
room: Desmond
tags:
  - project/complete
---

> [!NOTE]
> - Room booked 2nd - 3rd July
> - ISS Booked

## Description

- Replace the Polycom Soundstructure with a QSC DSP
- Replace the DM Matrix with similar or NVX

###### Purpose
- Soundstructure had it's power supply replaced once and we have no redundancy
- The soundstructure units are pretty old and hard to replace
- We will keep this unit as redundancy for other rooms
- Have a backup plan in place if the DM Matrix goes down

## Task List

- [x] Investigate NVX vs. DM Matrix replacement
- [x] Get work permits for ISS
- [x] contact ISS about UCI for QSC

- [x] Clean all cabling and stage box under Desmond Podium
- [x] Clean cables inside podium
- [x] Run network cables across floor boxes
- [x] Potential Issue with Left Projector scaler

---
###### Resources

- [Matrix Upgrade Quote](https://rcsicampus.sharepoint.com/:b:/r/sites/MediaSevicesStaff/Shared%20Documents/General/AV%20Room%20Installation%20(PO%27s%20-%20Quotes%20-%20RAMS)/Desmond%20LT/Booth%20AV%20Upgrade%202023-24/Desmond%20-%20Crestron%20Upgrade%20Quote%20v1%2023-24.pdf?csf=1&web=1&e=827EbB)
- [QSC Quote](https://rcsicampus.sharepoint.com/sites/MediaSevicesStaff/Shared%20Documents/General/AV%20Room%20Installation%20(PO%27s%20-%20Quotes%20-%20RAMS)/Desmond%20LT/Booth%20AV%20Upgrade%202023-24/Desmond%20-%20QSC%20Upgrade%20Quote%20v1%2023-24.pdf)
- [po-Desmond-Upgrade-DM-Matrix.pdf](https://rcsicampus-my.sharepoint.com/:b:/r/personal/owenmccarthy_rcsi_com/Documents/Archive/po-Desmond-Upgrade.pdf?csf=1&web=1&e=UK4UD9)

[YS26-Desmond](../../03-Resources/Rooms/YS26-Desmond.md)


---

### Outputs

##### Signal Chain
Gain -> EQ -> Delay -> Fader Level

##### AMPS
1. Back 31.65ms
1. Ceiling 25.54ms
1. Front L+R 0ms
1. Outer L+R 16.23ms

##### LINE OUTS
1. Booth Monitor
1. Recording/Line to Roland
1. Podium Soundcard 1
1. Podium Soundcard 2

### Inputs

##### Minimum Signal Chain
Gain -> EQ -> Compressor -> Fader

1. Line Input
2. Line Input
3. Lectern Mic 1
4. Lectern Mic 2
5. Lectern Mic 3
6. Lectern Mic Small Podium
7. Handheld 1
8. Handheld 2
9. Lapel 1
10. Lapel 2
11. Codec In (unused)
12. Program Audio

---

## Installation Notes

- Program didn't work on day 1. No control of projectors
- Issue was that Derek was unaware that he had to change the DM 16x16 device in the simpl program. DM 16x16 CPU3 is a very different device.
- Cables under podium were unplugged from stage box patch and plugged directly. They did not inform me of this. I presume they thought that's where an issue existed. There was no cable issue.
- UCI delayed by a week due to Martyn not passing on email, even though Jonathan replied to that email requesting the Soundstructure



### Updates

- firmware on small podium TSw was way behind. Updated to latest available.
- Spare touchpanel TSW1052, gave minor firmware update.
- Updated firmware on CP3 and DM 16x16 to latest.
- Compiled program with latest Device/Crestron DB, Simpl version.
- DM 16x16 firmware updated Transmitters and scalers
- Disabled Desmond symbol in fusion as the fusion server was making a connection on the same IPID as the touchpanel in store room