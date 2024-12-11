import iceCreamModels from "../model/iceCreamModels.js";
import { validationResult } from "express-validator";

const getIceCreamById = async (req, res) => {
  try {
    const { id } = req.params;
    const iceCream = await iceCreamModels.getIceCreamById(id);
    if (!iceCream) {
      return res.status(404).json({ error: "iceCream not found" });
    }

    res.json(iceCream);
  } catch (error) {
    res.status(500).json({ error });
  }
};

const getAllIceCream = async (req, res) => {
  try {
    const iceCreams = await iceCreamModels.getAllIceCream();
    res.json(iceCreams);
  } catch (error) {
    res.status(500).json({ error: "server error" });
  }
};

const getIceCreamExpired = async (req, res) => {
  try {
    const iceExpired = await iceCreamModels.getIceCreamExpired();
    if (!iceExpired) {
      return res.status(404).json({ error: "iceCream expired not found" });
    }

    res.json(iceExpired);
  } catch (error) {
    res.status(500).json({ error });
  }
};

const createIceCream = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const { name, price, description, stock, expiredAt } = req.body;
    if (!name || !price || !description || !stock || !expiredAt) {
      return res.status(400).json({ error: "bad request, invalid data" });
    }
    const newIceCream = await iceCreamModels.createIceCream({
      name,
      price,
      description,
      stock,
      expiredAt,
    });

    console.log(newIceCream);
    res.status(201).json(newIceCream);
  } catch (error) {
    res
      .status(500)
      .json({ message: "server error: error when adding ice cream" });
  }
};

const updateIceCream = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const { id } = req.params;
    const { body } = req;
    const iceCream = await iceCreamModels.updateIceCream(id, body);
    if (!iceCream) {
      return res.status(404).json({ message: "ice cream not found" });
    }

    res.json(iceCream);
  } catch (error) {
    res.status(500).json({ error: "server error: error updating ice cream" });
  }
};

const deleteIceCream = async (req, res) => {
  try {
    const { id } = req.params;
    const iceCream = await iceCreamModels.deleteIceCream(id);
    if (!iceCream) {
      return res.status(404).json({ error: "ice cream not found" });
    }

    res.json({ message: "ice cream removed" });
  } catch (error) {
    res.status(500).json({ error: "server error: error removing ice cream" });
  }
};

export {
  getAllIceCream,
  getIceCreamById,
  createIceCream,
  updateIceCream,
  deleteIceCream,
  getIceCreamExpired,
};
