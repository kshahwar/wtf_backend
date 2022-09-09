const db = require("../Models");
const Users = db.users;
const Op = db.Sequelize.Op;
const bcrypt = require('bcrypt');
const validUser =require('../validation/userValidation')
const cryptoKey = require("../Config/sercret");

exports.handleregister = async (req, res) => {
  let data = req.body;
  const uid =  data.uid;
  const first_name =  data.first_name;
  const last_name =  data.last_name;
  const email =  data.email;
  const mobile =  data.mobile;
  let password =  data.password;
  const role = data.role;
  const status_=data.status_
  const {error}=validUser.validate(req.body);
  if(error){
  res.status(404).send(error.message);
  }
  else{
  password = await bcrypt.hash(password, 10);
   const result = {
    uid,
    first_name,
    last_name,
    email,
    mobile,
    password,
    role,
    status_
   }
  
   const duplicate = await Users.findOne({ where: { email: email } });;
    if (duplicate) {
      return res.sendStatus(409); //Conflict 
    }
    else{
   Users.create(result).then(data=>{
    res.status(200).send(data);
   }).catch(err=>{
    res.status(500).send({
        message:
          err.message || "Some error occurred while creating the User."
      });
   })
};
  }
}
// Retrieve and check all Users from the database.
exports.getUsers = (req, res) => {
  Users.findAll({
    attributes: { exclude: ['password','createdAt','updatedAt'] }
  }).then(users => res.send(users)).catch(err=>{console.log(err)})
  
};
// Find a single User with an id
exports.getUserbyID = (req, res) => {
  const id= req.params.id;
    Users.findByPk(id).then((result)=>{
    res.send(result)}).catch(err=>{console.log(err)})
  
};
// Update a User by the id 
exports.updateUser = (req, res) => {
  
};
// Delete a User with id
exports.deleteUser = (req, res) => {
  const id= req.params.id;
  Users.destroy({where:{id:id}})
  .then(respond=>res.send("deleted successfully")).catch(err=>{console.log(err)})
  
};