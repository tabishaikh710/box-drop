const Joi =require('joi');

const passwordPattern = "(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{8,}";

const authController={
    async register(req, res, next){
        //validate  user input 
      const userRegisterSchema=Joi.object({
      // name username cnicNo email password
      name:Joi.string().min(5).max(30).required(),
      username:Joi.string().min(5).max(30).required(),
      cnicNo:Joi.number().min(5).max(30).required(),
      email:Joi.string().email().required(),
      password:Joi.string().pattern(new RegExp(passwordPattern)).required(),
      confirmPassword:Joi.ref('password')


      }) ;

      const {error}=userRegisterSchema.validate(req.body);
       
      // if error in validation, return error via middleware
      if (error){
        
      }



         
    },
}