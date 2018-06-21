module.exports = function(app) {
    require('dotenv').config()
    const express = require('express')
    const router = express.Router()
    const passport = require('passport')
    const Auth0Strategy = require('passport-auth0')
    const cookieParser = require('cookie-parser')
    const session = require('express-session')

    app.use(session({
      secret: process.env.SECRET,
      resave: false,
      saveUninitialized: false
    }));
  
    const strategy = new Auth0Strategy(
      {
        domain: process.env.AUTH0_DOMAIN,
        clientID: process.env.AUTH0_CLIENT_ID,
        clientSecret: process.env.SECRET,
        callbackURL: process.env.AUTH0_CALLBACK_URL
      },
      (accessToken, refreshToken, extraParams, profile, done) => {
        app.get('db').users.get_user_session({authid: profile.id})
          .then(response => {
            console.log(response)
            if(response.length == 0){
              console.log('its created')
              app.get('db').users.create_user({authid: profile.id})
                .then(response => {
                  done (null, profile.id)
                })
            }
            else{
              done(null, response[0].authid)
            }
          })
      }
    );
    
  
  passport.use(strategy);

  passport.serializeUser(function(user, done){
    console.log('this is the session', user)
    done(null, user);
  })

  passport.deserializeUser(function(user, done){
    done(null, user);
  })

  app.use(passport.initialize())
  app.use(passport.session())

      router.get(
        '/login',
      passport.authenticate('auth0', {
        clientID: process.env.AUTH0_CLIENT_ID,
        domain: process.env.AUTH0_DOMAIN,
        redirectUri: 'http://localhost:3005/auth/callback',
        audience: 'https://' + process.env.AUTH0_DOMAIN + '/userinfo',
        responseType: 'code',
        scope: 'openid'
      }),
    
      function(req, res) {  
        res.redirect('/');
        }
      )
  
        router.get(
          '/callback',
        passport.authenticate('auth0', {
            failureRedirect: '/'
        }),
        function(req, res) {
          console.log(req.user)
          if(req.user){
            res.redirect(req.session.returnTo || 'http://localhost:3000/#/');
          }
          else{
            res.redirect('http://localhost:3000/#/edit/testuser')
          }
        }
      );

      router.get(
        '/me',
        function(req, res){
          app.get('db').users.get_user_session(req.user).then(
            response => {
              if(response.length > 0){
                res.status(200).send(response)
              }
              else{
                res.status(401).send('unauthorized')
              }
        })})

        router.get('/userEdit', (req, res) => {
          console.log('this is userEDit', req.user)
          app.get('db').users.get_user_edit(req.user)
            .then(response => {
              console.log(response)
              return res.status(200).send('test')
            })
        })

    return router
  }
  