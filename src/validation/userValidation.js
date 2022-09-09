const Joi = require('joi')
const { joiPasswordExtendCore } = require('joi-password');
const joiPassword = Joi.extend(joiPasswordExtendCore);
 
    const validUser = Joi.object({
    
        id: Joi.number().required(),
                           
        uid: Joi.string().alphanum().min(2).max(50).required(),
               
        first_name: Joi.string().required(),
                         
        last_name: Joi.string().required(),
        
        email: Joi.string().min(5).max(255).required(),
                  
        mobile: Joi.number().min(10).required(),
        password: Joi.string().min(8).required(),

        password: joiPassword.string().minOfSpecialCharacters(1).minOfLowercase(1).minOfUppercase(1).minOfNumeric(1).noWhiteSpaces().min(8).required(),

        role: Joi.string().required() ,               
        
        status_: Joi.boolean().required(),
    })
  
module.exports= validUser;

  
