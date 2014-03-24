---
layout: post
title: "Sony Ericsson Neo V upgrade"
description: ""
category: code
tags: [mobile, neoV, android, kitkat, xperia, mt11i, sony]
---
{% include JB/setup %}

Trying to upgrade to latest Android available for the Sony Ericcson Xperia Neo V (MT11i)

Starting from [here](https://github.com/LegacyXperia/Wiki/wiki/Installing-LegacyXperia-for-Dummies)

 - got flashtool for linux - [http://www.flashtool.net](http://www.flashtool.net/index.php)

 - Excerpt from [http://forum.xda-developers.com/showthread.php?t=1604559](http://forum.xda-developers.com/showthread.php?t=1604559) - works here - 
->Go to the dialer and dial `*#*#7378423#*#*`
->Tap on Service info
->Tap on Software info
->Find where it say:
Customization Version:
XXXX-XXXX_XXX

- downloading http://www.mediafire.com/download/pp6iei56xbjwb4r/MT11a_4.1.B.0.587_Generic+Trade+US%2C+CDF-1254-9468.ftf.7z mentioned [here](http://forum.xda-developers.com/showpost.php?p=38371938&postcount=82)

- unlocking boot loader - http://unlockbootloader.sonymobile.com/instructions - got a code, didn't use it, unlocked with flashtool

- found this by Google - http://www.uloz.to/xWW7P1M/mt11i-4-1-b-0-587-1255-1755-r1i-global-ftf - flashing now - success - ICS 4.0, installed Chrome, working

- getting the latest KitKat build from http://legacyxperia.basketbuild.com/index.php?dir=main/haida/cm-11.0/nightlies/ - installed the kernel, got into CM boot recovery, installed the latest release and gapps, restarted - success - got Android 4.4.2 KitKat

- and now i find this: http://xperiafirmware.com/8-firmware/16-sony-ericsson-xperia-neo-v-mt11 (not tested)

### Ending here :)

http://forum.xda-developers.com/showpost.php?p=47895928&postcount=1
