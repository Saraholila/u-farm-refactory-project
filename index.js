// import express in our project using require key word

//dependencies
const express = require('express');
const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');
require('dotenv/config');
const bodyParser= require('body-parser');
const path = require('path');
const User = require('./models/User');
const loginRoutes = require('./routes/loginRoutes');
const ao_foregRoutes = require('./routes/ao_foregRoutes');
const urbanfarmerRoutes = require('./routes/urbanfarmerRoutes');
const fo_ufRoutes = require('./routes/fo_ufRoutes');
const landingpageRoutes = require('./routes/landingpageRoutes');
const passport = require('passport');

// create an express application by calling the express() function
// Instantiations
const app = express();

const expressSession = require ('express-session')({
  secret:'secret',
  resave: false,
  saveUninitialized: false
});




// Database connection
mongoose.connect(process.env.DB_CONNECTION, {
  useUnifiedTopology: true,
   useNewUrlParser: true, 
   useCreateIndex: true,
   useFindAndModify: false
  } );

mongoose.connection 
.on("open", () => { 
  console.log("Mongoose connection open");
 }) 
 .on("error", err => { 
   console.log(`Connection error: ${err.message}`);
  });

// Configurations
app.set('view engine' , 'pug')
app.set('views', './views');

// middleware settings
// Simple request time logger for a specific route
app.use((req, res, next) => {
  console.log('A new request received at ' + Date.now());
  next();
});

app.use(bodyParser.urlencoded({extended: true}))
app.use(expressSession);
app.use(passport.initialize());
app.use(passport.session());

app.use(express.static(path.join(__dirname, 'public')))
app.use('/', loginRoutes);
app.use('/', ao_foregRoutes)
app.use('/',fo_ufRoutes)
app.use('/', urbanfarmerRoutes);
app.use('/', landingpageRoutes);

// Passport configurations
passport.use(User.createStrategy());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
    



  // Logout
  app.post('/logout', (req, res) => {
    if (req.session){
      req.session.destroy((err)=>{
        if (err) {
          // failed to destroy session
        } else {
            return res.redirect('/login');
          
        }
      })
    }
  })

  // route for errors
  app.get('*', (req, res)=>{
    res.send('Input Error')

  })
// Server listening to port 3000
  app.listen(3000, function() {
    console.log('listening on 3000')
  })










