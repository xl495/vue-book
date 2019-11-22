module.exports = app => {
    const express = require('express');
    const router = express.Router({
        mergeParams: true
    })
    
    router.get('/',async (req,res)=>{
        res.send('ok')
    })

    app.use('/admin/api', router)
}