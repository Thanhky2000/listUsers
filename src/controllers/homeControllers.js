const connection = require('../config/database');
const {getAllUsers, getUserById, updateUsersById,deleteUserById,} = require('../service/CRUDservices');



const getHome = async (req,res) => {
    let results = await getAllUsers();
    return res.render('home.ejs', {listUsers: results});
   
}

const postCreateUser = async (req, res) => {
    let email = req.body.email;
    let name = req.body.name;
    let city = req.body.city;
    // console.log('email= ', email, 'name= ', name, 'city= ', city);
    
     
        let [results, fields] = await connection.query(`INSERT INTO Users (email, name, city) VALUES (?, ?, ?)`,[email, name, city]
        );
        console.log(results)
          res.redirect('/');
}
      

const getCreatePage = (req, res) => {
    res.render('create.ejs');
}

const getUpdatePage = async (req, res) => {
    const userId = req.params.id;
    let user = await getUserById(userId);
    res.render('Update.ejs', {userEdit : user});
}

const postUpdateUser = async (req, res) => {
    let email = req.body.email;
    let name = req.body.name;
    let city = req.body.city;
    let userId = req.body.userId;
    console.log('email= ', email, 'name= ', name, 'city= ', city, 'userId = ', userId);
    
     
        await updateUsersById(email, name, city, userId);
        res.redirect('/');
}

const postDeleteUser = async (req, res) => {
    // 
    const userId = req.params.id;
    let user = await getUserById(userId);
          res.render('confirmDeleteUser.ejs', {userEdit : user});
}

const postHandleDestroyUser = async (req, res) => {
    let userId = req.body.userId;
        await deleteUserById(userId);
        res.redirect('/');
}

module.exports = {
    getHome,
    postCreateUser,
    getCreatePage,
    getUpdatePage,
    postUpdateUser,
    postDeleteUser,
    postHandleDestroyUser,
}