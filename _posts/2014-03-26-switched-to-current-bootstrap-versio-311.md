---
layout: post
title: "Switched to current Bootstrap version (3.1.1)"
description: ""
category: code
tags: [bootstrap, jekyll, emacs]
---
{% include JB/setup %}
{% include links %}

Tweaked the default twitter theme that comes with [jekyllbootstrap][]
to use the latest (v3.1.1) version of Twitter's [Bootstrap][].  The
difference for this site here is that the navigation bar collapses to
a button on smaller screen sizes and is fixed at the top.

Having to edit some html made me give up trying to became a vim fan,
and switch back to good old [emacs][].  Currently investigating how to
integrate the [melpa][] package repository so i can easily install
modes for editing various source files, first for markdown.