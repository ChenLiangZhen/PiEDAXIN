const express = require('express');
const router = express.Router();
const db = require('../DBConection')


router.get("/test",async (req,res,next)=>{
    try{
        let result = await db.all();
        return res.json(result);
    }
    catch(err){
        console.log(err);
        return res.sendStatus(500);
    }
})

router.get("/create/:Name/:Email/:Password/:AvatarURL",async (req,res,next)=>{
    try{
        await db.createAccount(req.params.Name, req.params.Email, req.params.Password, req.params.AvatarURL);
        console.log("ROUTERSUCCESS");
    }
    catch(err){
        //console.log(err + "PARAMS:" + JSON.stringify(req.params) + "RES:" + JSON.stringify(req.params));
        console.log(err);
        return res.sendStatus(500);
    }
})

router.get("/auth/:Email/:Password",async (req,res,next)=>{
    try{
        let result = await db.authAccount(req.params.Email, req.params.Password);
        res = req.params.Password === res.json(JSON.stringify(result));
        // return req.params.Password === res.json(JSON.stringify(result));
        console.log("ROUTERSUCCESS");
    }
    catch(err){
        //console.log(err + "PARAMS:" + JSON.stringify(req.params) + "RES:" + JSON.stringify(req.params));
        console.log(err);
        return res.sendStatus(500);
    }
})

router.get("/alterHeart/:Name/:Amount",async (req,res,next)=>{
    try{
        let result = await db.alterHeart(req.params.Name, req.params.Amount);
        // return req.params.Password === res.json(JSON.stringify(result));
        console.log("ROUTERSUCCESS");
    }
    catch(err){
        //console.log(err + "PARAMS:" + JSON.stringify(req.params) + "RES:" + JSON.stringify(req.params));
        console.log(err);
        return res.sendStatus(500);
    }
})

router.get("/fetchHeart",async (req,res,next)=>{
    try{
        let result = await db.fetchHeart();
        // return req.params.Password === res.json(JSON.stringify(result));
        console.log("ROUTERSUCCESS");
    }
    catch(err){
        //console.log(err + "PARAMS:" + JSON.stringify(req.params) + "RES:" + JSON.stringify(req.params));
        console.log(err);
        return res.sendStatus(500);
    }
})
module.exports = router;