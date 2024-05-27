---
title: Dataview Scratchpad
date: 2024-04-15
cssclasses: 
tags:
  - note
  - dataview
  - obsidian
---

## Using dv.view

```
const path = "path to JS file"

//Slow method
await dv.view(path)

//Fast Method
const content = await dv.io.load(path);
dv.executeJs(content)
```

## Example

```dataviewjs
await dv.view("../../03-Resources/Javascript/tasklist-top-level",{pages: '#projects/complete'})
```


---

###### Resources
[Obsidian Forum Post](https://forum.obsidian.md/t/is-there-a-way-to-make-dataviews-dv-view-function-run-faster/62984)
