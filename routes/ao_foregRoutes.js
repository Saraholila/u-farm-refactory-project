const express = require('express');
const router = express.Router();
const Registration = require('../models/Ao_foregistration')
const Users = require('../models/User')

// specify what to do when user hit the '/'(home page) route/endpoint
router.get('/ao_foregistration', (req, res) => {
    res.render('ao_foregistration', { title: 'Registration form' })
})


// save data to the database
router.post('/ao_foregistration', async (req, res) => {
    try {
        const items = new Users(req.body);
        console.log(items)
        const userdetails = new Registration(req.body);
        await userdetails.save()
        await Users.register(items, req.body.password , (err) => {
            if (err)
            {
                throw err
            }
            console.log('save success');
            res.redirect('/ao_foList')
        })
    }
    catch (err) {
        res.status(400).send('Sorry! Something went wrong.')
        console.log(err)
    }
})

// retrieve data from the database 
router.get('/ao_foList', async (req, res) => {
    // if (req.session.user) {
        try {
            let items = await Registration.find()
            if (req.query.gender) {
                items = await Registration.find({ gender: req.query.gender })
            }
            res.render('ao_foList', { title: 'AO_FO List', users: items })
        
        } catch (err) {
            res.status(400).send("Unable to find items in the database");
        }
    // }
})

router.post('/delete', async (req, res) => {
    try {
        await Registration.deleteOne({ _id: req.body.id })
        res.redirect('back')
    } catch (err) {
        res.status(400).send("Unable to delete item in the database");
    }
})

router.get('/updateao_fo/:id', async (req, res) => {
    try {
        const updateUser = await Registration.findOne({ _id:req.params.id })
        res.render('updateao_fo', { user: updateUser })
    } catch (err) {
        res.status(400).send("Unable to find item in the database");
    }
})

router.post('/updateao_fo', async (req, res) => {
    try {
        await Registration.findOneAndUpdate({_id:req.query.id}, req.body)
        res.redirect('/ao_foList');
    } catch (err) {
        res.status(404).send("Unable to update item in the database");
    }    
})
module.exports = router;