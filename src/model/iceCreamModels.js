import mongoose from "mongoose";

const iceCreamSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  price: {
    type: Number,
    required: true,
    min: 0,
  },
  description: {
    type: String,
    trim: true,
  },
  stock: {
    type: Number,
    required: true,
    min: 0,
  },
  expiredAt: {
    type: Date,
    required: true,
  },
});

const IceCream = mongoose.model("IceCream", iceCreamSchema);

const getAllIceCream = () => {
  return IceCream.find();
};

const getIceCreamById = (id) => {
  return IceCream.findById(id);
};

const getIceCreamExpired = () => {
  const iceCreamExpired = IceCream.find({
    expiredAt: {
      $lte: new Date(),
    },
  });

  return iceCreamExpired;
};

const createIceCream = (newIceCream) => {
  const iceCream = new IceCream(newIceCream);
  return iceCream.save();
};

const updateIceCream = (id, update) => {
  return IceCream.findByIdAndUpdate(id, update, { new: true });
};

const deleteIceCream = (id) => {
  return IceCream.deleteOne({ _id: id });
};

export default {
  getAllIceCream,
  getIceCreamById,
  createIceCream,
  updateIceCream,
  deleteIceCream,
  getIceCreamExpired,
};
