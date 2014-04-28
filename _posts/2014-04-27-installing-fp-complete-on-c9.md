---
layout: post
title: "Installing FP Complete on C9"
description: ""
category: scratch
tags: [haskell, ghc, c9, fpcomplete, cloud 9, FP Complete]
---
{% include JB/setup %}

### Setting up ghc (and hopefully eventually fpcomplete) on C9

- Starting from here: <http://www.haskell.org/platform/linux.html>

- Downloaded ghc from here <http://www.haskell.org/ghc/download_ghc_7_6_3>

- Now trying to get libgmp.so.3 by starting here -
<https://gmplib.org/list-archives/gmp-announce/2009-May/000023.html>

- gmp compiles ok, C9 is 64bit, naturally, so i need to get the 64bit haskell
- just exceeded C9 quota, seems to be 1G, the 32bit ghc could be extracted but the 64bit is bigger so ... 
- going for Gideon's Yesod cartridge for openshift @ <http://www.haskell.org/haskellwiki/Web/Cloud>
- here is the bare bones (so far) yesod site - <http://yesod-haiasko.rhcloud.com/>.  Deployed, it occupies like 500M of the 1G, thanks Gideon :)


### Notes

- jekyll needed language env vars on C9 cuz of new version - see c9rj
and c9rjsw (for setting the port and IP)

- we might be quite far away from installing an fp-complete ide on C9 but meanwhile they've made an emacs interface - quote the blog there
