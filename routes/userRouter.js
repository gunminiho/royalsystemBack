const { Router } = require('express');
const router = Router();


router.get('/', (req,res) => {
    console.log("HOLAAAAA");
    res.send('Hello World');
});


module.exports = router;