---
title: Team-DataView
date: 2024-05-29
tags:
  - dataview
  - team
  - moc
---

## Issues

```dataviewjs
const pages = '#resource/team and #resource/issue'
 const data = dv.pages(pages).file.link
dv.list(data)
```

## How To's
```dataviewjs
const pages = '#resource/team and #resource/tutorial'
const data = dv.pages(pages).file.link
dv.list(data)
```

## Information
```dataviewjs
const pages = '#resource/team and #resource/information'
const data = dv.pages(pages).file.link
dv.list(data)
```
---

### Rooms
```dataviewjs
const pages = '#room-info'

dv.table(["Name", "Building"], dv.pages(pages)
	.sort(r => r.building)
	.map(r => [r.file.link, r.building]))
```