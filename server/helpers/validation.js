 import joi from "joi"

 function validateUserData(data) {
    const JoiSchema = joi.object({
      
      names: joi.string().min(3).required(),
      email: joi.string().email().min(5).required(),
      password: joi.string().min(6).required(),
    });
  
    return JoiSchema.validate(data);
  }

  function validateUserModData(data) {
    const JoiSchema = joi.object({
      names: joi.string().min(3),
      email: joi.string().email().min(5),
    })
  
    return JoiSchema.validate(data);
  }


  function validateMsgData(data) {
    const JoiSchema = joi.object({
      name: joi.string().min(3).optional(),
      email: joi.string().email().min(5).required(),
      msg: joi.string().min(5).required(),
    }).options({ abortEarly: false });
  
    return JoiSchema.validate(data);
  }

  function validateSignin(user) {
    const schema = joi.object({
      email: joi.string() .email() .required(),
      password: joi.string().required()
    });
  
    return schema.validate(user);
  };



export default {validateUserData,validateUserModData,validateMsgData,validateSignin}