
// const express = require('express')
// const controller = require("../Controllers/user.js");


// const router = express.Router();
// router.post('/',controller.createUser)
// router.get('/:id', controller.getUserbyID)
// router.get('/', controller.getUsers)
// router.delete('/:id',controller.deleteUser)
// module.exports= router;


module.exports = app => {
    const users = require("../Controllers/userController.js");
    const login = require("../Controllers/authController.js")
    const verify = require("../Controllers/verifyUserController.js")
    const filter = require("../Controllers/filterController.js")
    let router = require("express").Router();
    router.post("/login",login.handleLogin)
    router.get("/verify",verify.verify)
    router.get("/filter", filter.filter);
    router.get("/:id", users.getUserbyID);
    router.delete("/:id", users.deleteUser);
    router.post("/", users.handleregister);
    router.get("/", users.getUsers);
    app.use('/api/users', router);
    
  };