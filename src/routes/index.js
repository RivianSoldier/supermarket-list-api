const express = require("express");
const ListItem = require("../models/ListItem");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hello World!");
});

router.get("/list-items", async (req, res) => {
  try {
    const items = await ListItem.find();
    return res.json(items);
  } catch (error) {
    return res.status(400).json({ error });
  }
});

router.post("/list-items", async (req, res) => {
  try {
    const { name, quantity, checked } = req.body;

    if (!name || name.length < 3) {
      return res.status(400).json({
        error: "Name is required and must have at least 3 characters",
      });
    }

    if (!quantity || typeof quantity !== "number") {
      return res
        .status(400)
        .json({ error: "Quantity is required and must be a number." });
    }

    const newItem = await ListItem.create({
      name,
      quantity,
      checked: checked || false,
    });
    return res.json(newItem);
  } catch (error) {
    return res.status(400).json({ error });
  }
});

router.delete("/list-items/:id", async (req, res) => {
  try {
    const id = req.params.id;
    if (!id) {
      return res.status(400).json({ error: "ID is required." });
    }

    const deletedItem = await ListItem.findByIdAndDelete(id);
    return res.json(deletedItem);
  } catch (error) {
    return res.status(400).json({ error });
  }
});

router.put("/list-items/:id", async (req, res) => {
  try {
    const id = req.params.id;
    if (!id) {
      return res.status(400).json({ error: "ID is required." });
    }

    const { name, quantity, checked } = req.body;

    if (!name || name.length < 3) {
      return res.status(400).json({
        error: "Name is required and must have at least 3 characters",
      });
    }

    if (!quantity || typeof quantity !== "number") {
      return res
        .status(400)
        .json({ error: "Quantity is required and must be a number." });
    }

    const updatedItem = await ListItem.findByIdAndUpdate(
      id,
      {
        name,
        quantity,
        checked: checked || false,
      },
      { new: true }
    );
    return res.json(updatedItem);
  } catch (error) {
    return res.status(400).json({ error });
  }
});

module.exports = router;
