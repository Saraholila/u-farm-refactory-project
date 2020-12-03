const express = require('express');
const router = express.Router();
const Registration = require('../models/Urbanfarmer');
const multer = require('multer');
path = require('path')
const bodyParser = require('body-parser')

//Setting image upload storage engine
const storage = multer.diskStorage({
    destination: './public/uploads/',
    filename:(req, file, cb)=>{
      cb(null, file.fieldname + '-' + Date.now() + 
      path.extname(file.originalname));
    }
  });
  
  //Image upload
  const upload = multer({
    storage: storage,
  }).single('upload');
  
// specify what to do when user hit the '/'(home page) route/endpoint
router.get('/urbanfarmerreg', (req, res) => {
    res.render('urbanfarmerreg', { title: 'Urban Farmer Uploads' })
})

// save data to the database
router.post('/urbanfarmerreg', upload, async (req, res) => {
    try {
        const registration = new Registration(req.body);
        registration.upload = req.file.filename;
        await registration.save(() => {
            console.log('save success');
            res.redirect('/ufuploadList')
        })
    }
    catch (err) {
        res.status(400).send('Sorry! Something went wrong.')
        console.log(err)
    }
})

// retrieve data from the database 
router.get('/ufuploadList', async (req, res) => {
    try {
        let items = await Registration.find()
        if (req.query.gender) {
            items = await Registration.find({ gender: req.query.gender })
        }
        res.render('ufuploadList', { title: 'Urban farmer upload list', users: items })
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

router.get('/updateprod/:id', async (req, res) => {
    try {
        const updateUser = await Registration.findOne({ _id:req.params.id })
        res.render('updateprod', { user: updateUser })
    } catch (err) {
        res.status(400).send("Unable to find item in the database");
    }
})

router.post('/updateprod', async (req, res) => {
    try {
        await Registration.findOneAndUpdate({_id:req.query.id}, req.body)
        res.redirect('/ufuploadList');
    } catch (err) {
        res.status(404).send("Unable to update item in the database");
    }    
})
module.exports = router;