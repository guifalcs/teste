const express = require('express')
const router = express.Router()


router.post('/tasks', async(req,res)=>{
    return res.send("Hello")
})


module.exports = router