import foods, { validateFood } from "../models/food_model";


export const getAllFood = async (req, res) => {
   const food = await foods.find();
   res.send(food)
};

export const getSinglePro = async (req, res) => {
   const { id } = req.params
   const food = await foods.findOne({ _id: id });
   res.send(food);
}

export const addFood = async (req, res) => {
   const { error } = validateFood(req.body);

   if (error) return res.status(400).send({ error: error.details[0].message })
   const newFood = new foods({
      fID: req.body.fID,
      fName: req.body.fName,
      fPrice: req.body.fPrice,
      fQty: req.body.fQty
   }
   );
   await newFood.save();
   res.send(newFood)
};

export const updateFood = async (req, res) => {
   const { id } = req.params;

   const { error } = validateFood(req.body);
   if (error) return res.status(404).send({ error: error.details[0].message })

   const food = await foods.findOneUpdate({ _id: id });

   if (!food) return res.status(404).send({ massage: "food not found" });

   res.send(food)

};

export const deleteFood = async (req, res) => {
   const { id } = req.params;

   const { error } = validateFood(req.body);
   if (error) return res.status(404).send({ error: error.details[0].message });

   const food = await foods.findOneDelete({ _id: id });
   if (!food) return res.status(404).send({ message: "food not found" });

   res.send(food)
}