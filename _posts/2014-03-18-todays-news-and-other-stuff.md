---
layout: post
title: "Today's news and other stuff"
description: "vote for Anno, DDOS attacks, OpenShift's new Bronze plan and some figuring out about free hosting"
category: news 
tags: [games, anno, openshift, github, hosting, haskell, heroku]
---
{% include JB/setup %}
{% include links %}

**[Anno online] did come up with a new version today,** including a new population 
growth strategy, detailed resource consumption and accounting, and 3 new epic 
buildings.  While the new pop grows naturally larger without doing anything, as
 does income, there isn't much to do actually - the 3 epics must be researched 
in the library first which will take months. Some new main quests were apparently added too.

Voting for [Anno online][1] has started at the [European Game Awards](http://www.european-games-award.com/).
I would like to vote but unfortunately the site redirects to an [error page](http://die-entwicklerkonferenz.de)
 stating they have been overwhelmed with requests and voting is currently down.

Said *overwhelming* reminds me of **[Github's recent experience with DDOS attacks] (https://github.com/blog/1796-denial-of-service-attacks)** and how they managed.
  We do really care for the eternal life and health of Github (oh, ok, 
for Google's too :P) so it is good to know our free pages are being cared for :)

In other news **[Redhat announced today its attractive Openshift Bronze subscriber plan](https://www.openshift.com/blogs/announcing-more-paid-plan-options-and-add-on-storage).**
A notch above their free plan, it provides additional storage at $1/1G a month. 
This made me realize the holy trio of free hosting is shaping up quite well:
 * **Web hosting** - [Github Pages](http://pages.github.com/) of course :)
 * **Application hosting** - [Heroku][], [OpenShift][]
 * **Database hosting** - [OpenShift][]
 * **IDE hosting** - [fpcomplete][], [cloud 9][]

Hm, it's a quartet, holy anyways :). It doesn't seem very obvious but the thin 
silver-blue-red line running here is free [Haskell][] hosting.  While 
 [fpcomplete][] is totally perfect, it has no free persistent storage, nor free
 [Github][] integration.  Of the above listed only [Heroku][] has free 
application persistency *and supports Haskell*, and only [OpenShift] seems to provide a free database space up to 1G and the means to serve it outside.  [Heroku][] offers a free Postgres DB limited to 10K rows *only*.
