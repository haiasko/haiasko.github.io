---
title: yesod scaffold on heroku
layout: post
category: code
tags: [haskell, yesod, heroku]
---

This is a yesod scaffold successfully deployed on Heroku - initial compilation took like 13 minutes, subsequent deployments - 4.

It is the result of a simple yesod init with a postgres backend.  Application.hs was adjusted to parse Heroku's DATABASE_URL environment variable.  

Instructions:

-  Heroku [instructions](https://devcenter.heroku.com/articles/third-party-buildpacks)
-  ghc [buildpack](https://github.com/begriffs/heroku-buildpack-ghc)
-  postgres DATABASE_URL [parsing](http://pbrisbin.com/posts/parsing_database_url/)

Thanks so bunches to everyone who made this possible, you all rawk and are too numerous to list here :) Kudos y namaste :)
