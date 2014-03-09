testing markdown here until i get to grips with jekyll, please ignore :)

This is a yesod scaffold successfully deployed on Heroku - initial compilation took like 13 minutes, subsequent deployments - 4.

It is the result of a simple yesod init with a postgres backend.  Application.hs was adjusted to parse Heroku's DATABASE_URL environment variable.  The following buildpack was used: 

Instructions:

  Heroku
  ghc Buildpack
  postgres DATABASE_URL parsing

Thanks so bunches to everyone who made this possible, you all rawk and are too numerous to list here :) Kudos y namaste :)
