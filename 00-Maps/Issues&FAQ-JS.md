---
title: Issues&FAQ-JS
tags:
  - moc
---

## Issues

```dataviewjs
const pages = '#resource/team and #resource/issue'
const data = dv.pages(pages)

const dataSorted = data
										.sort(b => b.title)
										.map( b => {
													const path = b.file.link.path
													const newName = dv.fileLink(path,false,b.title)
													return newName
										});
 
dv.list(dataSorted)
```

## How To's
```dataviewjs
const pages = '#resource/team and #resource/tutorial'
const data = dv.pages(pages)

const dataSorted = data
										.sort(b => b.title)
										.map( b => {
													const path = b.file.link.path
													const newName = dv.fileLink(path,false,b.title)
													return newName
										});
 
dv.list(dataSorted)
```

## Information
```dataviewjs
const pages = '#resource/team and #resource/information'
const data = dv.pages(pages)

const dataSorted = data
										.sort(b => b.title)
										.map( b => {
													const path = b.file.link.path
													const newName = dv.fileLink(path,false,b.title)
													return newName
										});
 
dv.list(dataSorted)
```
---
