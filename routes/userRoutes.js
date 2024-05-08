const { Router } = require('express');
const router = Router();

router.get('/user', (req,res) => {
    res.send('Hello World');
});

module.exports = router;