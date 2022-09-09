
const db = require("../Models");
const Users = db.users;
const mysecret = 'mysecret';
const jwt = require('jsonwebtoken');
exports.verify= async (req, res) => {
    let token = req.get("x-access-token");
    console.log(token)
  if (!token) {
    return res.status(401).end();
  }                                           // return an unauthorized error
  let payload;
  try {
    payload = jwt.verify(token, mysecret);
    console.log(payload)
  } catch (err) {
    if (err) {                                // JWT is unauthorized
      return res.status(401).send(err.message);
    }
    return res.status(400).send(err.message);
  }
  console.log(payload.id , "payload id")
  const id = payload.id   
  Users.findByPk(id).then((result)=>{
    const newUser=JSON.parse(JSON.stringify(result));
    delete newUser.password;                   // password removed
  res.send(newUser)}).catch(err=>{console.log(err)})

};