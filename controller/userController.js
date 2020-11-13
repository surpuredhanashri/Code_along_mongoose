//get, post etc for that we require router
const express = require('express')
var router = express.Router();

//new obj created....we want obj id
var ObjetctId = require('mongoose').Types.ObjectId;

var{User} = require('../model/User')

//get method for all users
router.get('/',(req,res) => {
    User.find((err,docs) => {
        if(!err){res.send(docs);}
        else{console.log('Error in retriving users : ' + JSON.stringify(err,undefined,2));}
    })
})

//get method particular one user by id
router.get('/:id',(req,res) => {
    if(!ObjetctId.isValid(req.params.id))
        return res.status(400).send('no record with given id: ${req.params.id}')

    User.findById(req.params.id,(err,docs) => {
        if(!err){res.send(docs);}
        else{console.log('Error in retriving users : ' + JSON.stringify(err,undefined,2));}
    })
})

// // //post method
router.post('/',(req,res) =>{
    var usr = new User({
        name : req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        type:  req.body.type
    });

    usr.save((err,docs) =>{
        if(!err){res.send(docs)}
        else{console.log('Error in saving users : ' + JSON.stringify(err,undefined,2));}
    })
})

//Put(Update) Method
router.put('/:id',(req,res) => {
    if(!ObjetctId.isValid(req.params.id))
        return res.status(400).send('no record with given id: ${req.params.id}');
    var usr = new User(req.body);
    console.log(usr)
    User.findByIdAndUpdate(req.params.id, { $set: usr }, { new: true }, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in User Update :' + JSON.stringify(err, undefined, 2)); }
    });
})

// //detele method
router.delete('/:id',(req,res) => {
    if(!ObjetctId.isValid(req.params.id))
        return res.status(400).send('no record with given id: ${req.params.id}')

        User.findByIdAndRemove(req.params.id,(err,docs) =>{
            if(!err){res.send(docs)}
            else{console.log('Error in Deleting users : ' + JSON.stringify(err,undefined,2));}
    
        })
    })
        
module.exports = router;