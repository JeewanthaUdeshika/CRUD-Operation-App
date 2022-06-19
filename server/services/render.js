/**
 * This file allows to render other files to the server
*/

// Export method for the index
exports.homeRoutes = (req, res) => {
    res.render('index', {users: "New Data"});
};

// Export method for add user
exports.addUser = (req, res) => {
    res.render('add_user');
};

// Export method for update user
exports.updateUser = (req, res) => {
    res.render('update_user');
};