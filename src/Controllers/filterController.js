const db = require("../Models");
const Users = db.users;
const Op = db.Sequelize.Op;
exports.filter =  (req, res) => {
    console.log("from filter")
    const name= req.query.name;
    const email=req.query.email;
    const role = req.query.role;
    const status = req.query.status;
    const mobile =req.query.mobile;
    console.log(name, "name")
    if(!(name||email||role||status||mobile)){
        res.send("please enter filter")
    }

    //.................................................single filter 
    if(email){
        Users.findAll({where: { email: email } }
         ).then((user)=>{
        const newUser=JSON.parse(JSON.stringify(...user));
        console.log(newUser, "newUsre")
        delete newUser.password;
        console.log(newUser, "newUsre after")
        res.send(newUser)}).catch(err=>{console.log(err)})
         return 
    }
    
    if(mobile){
        Users.findAll({where: { mobile: mobile }  }
         ).then((user)=>{
            const newUser=JSON.parse(JSON.stringify(...user));
            console.log(newUser, "newUsre")
            delete newUser.password;
            console.log(newUser, "newUsre after")
            res.send(newUser)}).catch(err=>{console.log(err)})
             return 
    }
    

    if(name){
        Users.findAll({where: { first_name: name } }
         ).then((user)=>{
            const newUser=JSON.parse(JSON.stringify(...user));
            console.log(newUser, "newUsre")
            delete newUser.password;
            console.log(newUser, "newUsre after")
            res.send(newUser)}).catch(err=>{console.log(err)})
             return 
    }
    
    if(role){
        Users.findAll({where: { role: role } }
         ).then((user)=>{
            const newUser=JSON.parse(JSON.stringify(...user));
            console.log(newUser, "newUsre")
            delete newUser.password;
            console.log(newUser, "newUsre after")
            res.send(newUser)}).catch(err=>{console.log(err)})
             return 
    }
    
    if(status){
        Users.findAll({where: { status_ : status } }
         ).then((user)=>{
            const newUser=JSON.parse(JSON.stringify(...user));
            console.log(newUser, "newUsre")
            delete newUser.password;
            console.log(newUser, "newUsre after")
            res.send(newUser)}).catch(err=>{console.log(err)})
             return 
    }


  //.............................................................. multi level filter 
// var data
// await Users.findAll().then(user => {data= user})
// console.log(data)
// const filters = req.query;
//   const filteredUsers = data.filter(user => {
//     let isValid = true;
//     for (key in filters) {
//       console.log(key, user[key], filters[key]);
//       isValid = isValid && user[key] == filters[key];
//     }
//     return isValid;
//   });
//   res.send(filteredUsers);


      }