const express = require('express');
const router = express.Router();
const Registration = require('../models/Landingpage')
const Users = require('../models/User')

// specify what to do when user hit the '/'(home page) route/endpoint
router.get('/landingPage', (req, res) => {
    res.render('landingPage', { title: 'Landing Page' })
})

// save data to the database
router.post('/landingPage', async (req, res) => {
    try {
        const items = new Users(req.body);
        console.log(items)
        const registration = new Registration(req.body);
        await registration.save() 
            await Users.register(items, req.body.password , (err) => {
                if (err)
                {
                    throw err
                }
                console.log('save success');
                res.redirect('/landingPageList')
            })
       }
    catch (err) {
        res.status(400).send('Sorry! Something went wrong.')
        console.log(err)
    }
})


// retrieve data from the database 
router.get('/landingPageList', async (req, res) => {
    try {
        let items = await Registration.find()
        if (req.query.gender) {
            items = await Registration.find({ gender: req.query.gender })
        }
        res.render('landingPageList', { title: 'Urban Farmer List', users: items })
    } catch (err) {
        res.status(400).send("Unable to find items in the database");
    }
})

router.post('/delete', async (req, res) => {
    try {
        await Registration.deleteOne({ _id: req.body.id })
        res.redirect('back')
    } catch (err) {
        res.status(400).send("Unable to delete item in the database");
    }
})

// router.get('/update/:id', async (req, res) => {
//     try {
//         const updateUser = await Registration.findOne({ _id:req.params.id })
//         res.render('update', { user: updateUser })
//     } catch (err) {
//         res.status(400).send("Unable to find item in the database");
//     }
// })

// router.post('/update', async (req, res) => {
//     try {
//         await Registration.findOneAndUpdate({_id:req.query.id}, req.body)
//         res.redirect('fo_ufList');
//     } catch (err) {
//         res.status(404).send("Unable to update item in the database");
//     }    
// })
module.exports = router;