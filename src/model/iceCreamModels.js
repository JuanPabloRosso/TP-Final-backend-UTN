import mongoose from "mongoose"

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
});

const IceCream = mongoose.model('IceCream', iceCreamSchema);

const getAllIceCream = () => {
    return IceCream.find()
}

const getIceCreamById = (id) => {
    return IceCream.findById(id)
}

const createIceCream = (newIceCream) => {
    const iceCream = new IceCream(newIceCream)
    return iceCream.save()
}

const updateIceCream = (id, update) => {
    return IceCream.findByIdAndUpdate(id, update)
}

const deleteIceCream = (id) => {
    return IceCream.deleteOne({_id: id})
}

export default {getAllIceCream, getIceCreamById, createIceCream, updateIceCream, deleteIceCream} 