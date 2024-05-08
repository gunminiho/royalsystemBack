const { Router } = require('express');
const userRoutes = require('./userRoutes');
const router = Router();

console.log("index.js router");
router.use(userRoutes);

module.exports = router;