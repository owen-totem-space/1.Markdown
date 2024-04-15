---
title: Team-Map
date: 2024-04-11
tags: [moc]
---

[Map](../Map.md) | 
--- | ---

## Issues

<div><div class="block-language-dataviewjs node-insert-event" style="overflow-x: auto;"><div><ul class="dataview list-view-ul"><li><span><a data-tooltip-position="top" aria-label="01-Issue-Resolutions/Automate-Duplicate-Display.md" data-href="Team/01-Issue-Resolutions/Automate-Duplicate-Display.md" href="01-Issue-Resolutions/Automate-Duplicate-Display.md" class="internal-link" target="_blank" rel="noopener">Automate-Duplicate-Display</a></span></li><li><span><a data-tooltip-position="top" aria-label="Team/01-Issue-Resolutions/UC-Engine-IP-Address-Changed.md" data-href="Team/01-Issue-Resolutions/UC-Engine-IP-Address-Changed.md" href="01-Issue-Resolutions/UC-Engine-IP-Address-Changed.md" class="internal-link" target="_blank" rel="noopener">UC-Engine-IP-Address-Changed</a></span></li><li><span><a data-tooltip-position="top" aria-label="Team/01-Issue-Resolutions/TR-Room-Screens.md" data-href="Team/01-Issue-Resolutions/TR-Room-Screens.md" href="01-Issue-Resolutions/TR-Room-Screens.md" class="internal-link" target="_blank" rel="noopener">TR-Room-Screens</a></span></li></ul></div></div></div>

## Information

<div><div class="block-language-dataviewjs node-insert-event" style="overflow-x: auto;"><div><ul class="dataview list-view-ul"><li><span><a data-tooltip-position="top" aria-label="Team/02-Information/Common-Purchases.md" data-href="Team/02-Information/Common-Purchases.md" href="02-Information/Common-Purchases.md" class="internal-link" target="_blank" rel="noopener">Common-Purchases</a></span></li><li><span><a data-tooltip-position="top" aria-label="Team/02-Information/Crestron-OLH-Links.md" data-href="Team/02-Information/Crestron-OLH-Links.md" href="02-Information/Crestron-OLH-Links.md" class="internal-link" target="_blank" rel="noopener">Crestron-OLH-Links</a></span></li><li><span><a data-tooltip-position="top" aria-label="Team/02-Information/Required-Software.md" data-href="Team/02-Information/Required-Software.md" href="02-Information/Required-Software.md" class="internal-link" target="_blank" rel="noopener">Required-Software</a></span></li><li><span><a data-tooltip-position="top" aria-label="Team/02-Information/USBC-Research.md" data-href="Team/02-Information/USBC-Research.md" href="02-Information/USBC-Research.md" class="internal-link" target="_blank" rel="noopener">USBC-Research</a></span></li><li><span><a data-tooltip-position="top" aria-label="Team/02-Information/XiO-Cloud.md" data-href="Team/02-Information/XiO-Cloud.md" href="02-Information/XiO-Cloud.md" class="internal-link" target="_blank" rel="noopener">XiO-Cloud</a></span></li></ul></div></div></div>

---

###### Notes

- Remove "Team" from all urls to make them work on github

## Issues

```dataviewjs
const pages = '#issue'

const data = dv.pages(pages).file.link

dv.list(data)
```

## Information

```dataviewjs
const pages = '#team/information'

const data = dv.pages(pages).file.link

dv.list(data)
```

---