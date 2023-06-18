import Joi from "joi";
import mongoose from "mongoose"

const userSchema = new mongoose.Schema(
   {
      FullName: {
         type: String,
         require: true,
      },
      user_Id: {
         type: String,
         require: true,
         unique: true
      },
      user_Name: {
         type: String,
         require: true,

      },
      Location: {
         type: String,
         require: true,

      },
      phone: {
         type: String,
         require: true,
         unique: true
      },
      password: {
         type: String,
         require: true,
         minLength: 5,
         maxLength: 10,

      },

   }, {
   timestamps: true
}
);

export const validateUser = (user) => {
   const Schema = Joi.object(
      {
         FullName: Joi.string().required(),
         user_Id: Joi.string().unique().required(),
         user_Name: Joi.string().required(),
         location: Joi.string().required(),
         phone: Joi.string().unique().required()
      });
   return Schema.validate(user)
};

const users = new mongoose.model("users", userSchema);

export default users
