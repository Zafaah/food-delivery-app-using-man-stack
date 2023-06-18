import Joi from "joi";

import mongoose from "mongoose";

const foodSchema = new mongoose.Schema({
   fID: {
      type: String,
      require: true,
      unique: true
   },
   fName: {
      type: String,
      require: true,

   },
   fPrice: {
      type: String,
      require: true,
   },
   fQty: {
      type: String,
      require: true,
   }
}, {
   timestamps: true
});

export const validateFood = (food) => {
   const Schema = Joi.object({
      fID: Joi.string().unique().require(),
      fName: Joi.string().required(),
      fPrice: Joi.string().required(),
      fQty: Joi.string().required(),
   });
   return Schema.validate(food)
};

const foods = new mongoose.model("foods", foodSchema);

export default foods;

