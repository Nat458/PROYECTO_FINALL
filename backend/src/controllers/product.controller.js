// OPERACIONES CRUD DE LOS PRODUCTOS //
const Product = require('../models/product');

exports.getAll = async (req, res) => {
  const items = await Product.find().lean();
  res.json(items);
};

exports.create = async (req, res) => {
  const item = await Product.create(req.body);
  res.status(201).json(item);
};

exports.remove = async (req, res) => {
  const deleted = await Product.findByIdAndDelete(req.params.id);
  if (!deleted) return res.status(404).json({ error: 'Item not found' });
  res.json({ message: 'Item deleted', id: req.params.id });
};

exports.activate = async (req, res) => {
  const updated = await Product.findByIdAndUpdate(req.params.id, { active: true }, { new: true });
  if (!updated) return res.status(404).json({ error: 'Item not found' });
  res.json(updated);
};

exports.deactivate = async (req, res) => {
  const updated = await Product.findByIdAndUpdate(req.params.id, { active: false }, { new: true });
  if (!updated) return res.status(404).json({ error: 'Item not found' });
  res.json(updated);
  };