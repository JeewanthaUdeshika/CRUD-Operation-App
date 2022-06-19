/**
 * This file contains all the controlling methods of the database (CRUD)
 */
const Joi = require('Joi');
// Getting database file
var UserDB = require('../model/model');

// Create and save new user
exports.create = (req, res) =>{
    // Validate request
    // Check if the data is validated
    const {error} = validateData(req.body);

    if (error) {
        res.status(400).send(error.details[0].message);
        return;
    }

    // If npt create the user
    const user = new UserDB({
        name: req.body.name,
        email:req.body.email,
        gender: req.body.gender,
        status: req.body.status
    });

    // Save data in the database
    user
        .save(user)
        .then(data=>{
            // res.send(data)  // If saved in the data base, send saved data to user
            res.redirect("/add_user");
        })
        .catch(err=>{
            res.status(500).send({
                message: err.message+"j" || "Some error ocurred"
            });
        });
}

// Retrieve and return all users/ retrive and return a single user
exports.find = (req, res) =>{
    // If there is id in the URL, Find user according to that id
    if (req.query.id){
        const id = req.query.id;

        UserDB.findById(id)
        .then(data=>{
            if (!data){
                res.status(404).send({message: "Coudn't find user with that id"});
            }
            else{
                res.send(data);
            }
        })
        .catch(err=>{
            res.status(500).send({messsage: "An Error occured"});
        })
    }
    else{
        UserDB.find()
            .then(user=>{
        res.send(user)
        })
        .catch(err=>{
            res.status(500).send({message:err.message || "Error Occured while retriving user information"})
        })
    }

}

// Update a new user by user id
exports.update = (req, res) => {
    // Check the request is empty or not
    if (!req.body){
        return res
        .status(400)
        .send({message: "Data to update cannot be empty"});
    }

    // Get given id
    const id = req.params.id;
    UserDB.findByIdAndUpdate(id, req.body,{useFindAndModify:false})
    .then(data=> {
        if(!data){
            res.status(404).send({message: `Cannot update user with user ID ${id}. May be user cannot find`})
        }
        else{
            res.send(data)
        }
    })
    .catch(err =>{
        res.status(500).send({message: "Error in update user"})
    })
}

// Delete a user with specified user id in the request
exports.delete = (req, res) => {
    // Get ID to delete
    const id = req.params.id;

    UserDB.findByIdAndDelete(id)
    .then(data => {
        if(!data){
            res.status(404).send({message: `Cannot Delete with id ${id}. May be id is wrong`})
        }
        else{
            res.send({message: "Successfuly Deleted!!!"})
        }
    })
    .catch(err =>{
        res.status(500).send({message: "Could not delete the user"})
    }
    )


}

// Function to valiidate the user data
function validateData (course) {
    // Joi schema
    const schema = Joi.object({
        name: Joi.string().min(3).required(),
        email: Joi.string().email({
            minDomainSegments: 2,}),
        gender: Joi.string().required(),
        status: Joi.string().required()
    });

    return schema.validate(course);
}
