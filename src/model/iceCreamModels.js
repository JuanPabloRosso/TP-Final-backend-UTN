import mongoose from "mongoose";

const iceCreamSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
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
  },
  {
    versionKey: false,
  }
);

const IceCream = mongoose.model("IceCream", iceCreamSchema);

const getAllIceCream = () => {
  try {
    return IceCream.find();
  } catch (error) {
    throw error;
  }
};

const getIceCreamById = (id) => {
  try {
    return IceCream.findById(id);
  } catch (error) {
    throw error;
  }
};

const getData = (data) => {
  try {
    const iceCream = IceCream.findOne(data);
    return iceCream;
  } catch (error) {
    throw error;
  }
};

const getIceCreamExpired = () => {
  try {
    const iceCreamExpired = IceCream.find({
      expiredAt: {
        $lte: new Date(),
      },
    });

    return iceCreamExpired;
  } catch (error) {
    throw error;
  }
};

const createIceCream = (newIceCream) => {
  try {
    const iceCream = new IceCream(newIceCream);

    return iceCream.save();
  } catch (error) {
    throw error;
  }
};

const updateIceCream = (id, update) => {
  try {
    return IceCream.findByIdAndUpdate(id, update, { new: true });
  } catch (error) {
    throw error;
  }
};

const deleteIceCream = (id) => {
  try {
    return IceCream.findOneAndDelete({ _id: id });
  } catch (error) {
    throw error;
  }
};

export default {
  getAllIceCream,
  getIceCreamById,
  createIceCream,
  updateIceCream,
  deleteIceCream,
  getIceCreamExpired,
  getData,
};
