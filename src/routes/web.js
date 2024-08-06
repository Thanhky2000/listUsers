const express = require('express');
const router = express.Router();
const {getHome, postCreateUser, getCreatePage, getUpdatePage} = require('../controllers/homeControllers');

router.get("/hello", (req, res) => {
    res.render("index.ejs");
});
router.get('/create', getCreatePage);
router.get('/update/:id', getUpdatePage);
router.post('/create-user', postCreateUser);
router.get("/", getHome);

module.exports = router;