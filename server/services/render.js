/**
 * This file allows to render other files to the server
*/

const axios = require('axios');

// Export method for the index
exports.homeRoutes = (req, res) => {
    // Make get request to get user data to index
    axios.get('http://localhost:3000/api/users')
    .then((response)=>{
        console.log(response);
        res.render('index', {users: response.data});
    })
    .catch(err=>{
        res.send(err);
    })

    //res.render('index', {users: "New Data"});
};

// Export method for add user
exports.addUser = (req, res) => {
    res.render('add_user');
};

// Export method for update user
exports.updateUser = (req, res) => {
    // When updating, all the data of user should be sent into the update page
    axios.get('http://localhost:3000/api/users', {params:{id: req.query.id}})
    .then((userdata)=>{
        res.render('update_user', {user:userdata.data})
    })
    .catch(err=>{
        res.send(err);
    })
    // res.render('update_user');
};