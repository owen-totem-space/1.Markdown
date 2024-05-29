---
title: Rooms
date: 2024-04-16
cssclasses: 
tags:
  - room-list
  - moc
---

```dataviewjs
const pages = '#room-info'

dv.table(["Name", "Building"], dv.pages(pages)
	.sort(r => r.building)
	.map(r => [r.file.link, r.building]))
```
