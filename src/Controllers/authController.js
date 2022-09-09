const db = require("../Models");
const Users = db.users;
const mysecret= require("../Config/sercret")
const bcrypt = require('bcrypt');
require('dotenv').config();
const jwt = require('jsonwebtoken');
const cryptoKey = require("../Config/sercret");

exports.handleLogin = async (req, res) => {
    const email = req.body.email;
    const pwd= req.body.password
    if (!email || !pwd) return res.status(400).json({ 'message': 'Username and password are required.' });
    const foundUser =await Users.findOne({ where: { email: email } });
    const newUser=JSON.parse(JSON.stringify(foundUser));
    delete newUser.password;
    if (!foundUser) return res.sendStatus(401); //Unauthorized 
    const match = await bcrypt.compare(pwd, foundUser.password);
    
    if (match) {
        const token = jwt.sign(
            newUser,
            mysecret,
            { expiresIn: '2h' }
        );
        // const currentUser = { ...foundUser,token };
        res.cookie('jToken', token, { httpOnly: true, maxAge: 24 * 60 * 60 * 1000 });
        res.json({'success' : "user logged in "})
    } else {
        res.sendStatus(401);
    }
}



