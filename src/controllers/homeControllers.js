const connection = require('../config/database');
const {getAllUsers} = require('../service/CRUDservices');



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
          res.send('Create success');
}
      

const getCreatePage = (req, res) => {
    res.render('create.ejs');
}

const getUpdatePage = (req, res) => {
    const userId = req.params.id;
    console.log("id >>", req.params);
    res.render('Update.ejs');
}

module.exports = {
    getHome,
    postCreateUser,
    getCreatePage,
    getUpdatePage,
}