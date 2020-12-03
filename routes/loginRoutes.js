const express = require('express');
const router = express.Router();
const passport = require('passport')
const login = require('../models/LoginSchema')
const Users = require('../models/User')


router.get('/login', (req, res) =>{
    res.render('login', { title: 'Login Form' });
  });

// Process the name and password that are submitted in the login page
router.post('/login', passport.authenticate('local',{failureRedirect:'/login'}),(req, res) =>{
    req.session.user = req.user;
    const role = req.user.role

    if(role =='FarmerO')
        {
          res.redirect('/ao_foList');  
        }
    else(role == 'UrbanF') 
        {
          res.redirect('/fo_ufList')  
        }
    
})  

  // save data to the database
// router.post('/login', async (req, res) => {
//     try {
//         const login = new Login(req.body);
//         await login.save(() => {
//             console.log('save success');
//             res.redirect('/registration')
//         })
//     }
//     catch (err) {
//         res.status(400).send('Sorry! Something went wrong.')
//         console.log(err)
//     }
// })

module.exports = router;