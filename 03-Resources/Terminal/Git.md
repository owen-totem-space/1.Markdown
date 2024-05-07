---
title: Git
date: 2024-04-12
cssclasses: 
tags:
  - note
---

# Git

## Recover Staged Files

```shell
git fsck
git fsck --lost-found
```
puts files in:
```shell
.git/lost-found/other
```
