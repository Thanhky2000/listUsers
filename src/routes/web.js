const express = require('express');
const router = express.Router();
const {getHome, postCreateUser, getCreatePage, getUpdatePage,postUpdateUser, postDeleteUser,postHandleDestroyUser} = require('../controllers/homeControllers');

router.get("/hello", (req, res) => {
    res.render("index.ejs");
});
router.get('/create', getCreatePage);

router.get('/update/:id', getUpdatePage);

router.post('/create-user', postCreateUser);

router.post('/update-user', postUpdateUser);

router.post('/delete-user/:id', postDeleteUser);

router.post('/delete-user', postHandleDestroyUser);

router.get("/", getHome);


module.exports = router;