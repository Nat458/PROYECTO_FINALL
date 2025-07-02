// OPERACIONES CRUD DE LOS USUARIOS //
const User = require("../models/user");

exports.getAll = async (req, res) => {
  const users = await User.find().lean();
  res.json(users);
};

exports.create = async (req, res) => {
  const user = await User.create(req.body);
  res.status(201).json(user);
};

exports.remove = async (req, res) => {
  const deleted = await User.findByIdAndDelete(req.params.id);
  if (!deleted) return res.status(404).json({ error: 'User not found' });
  res.json({ message: 'User deleted', id: req.params.id });
};

exports.activate = async (req, res) => {
  const updated = await User.findByIdAndUpdate(req.params.id, { active: true }, { new: true });
  if (!updated) return res.status(404).json({ error: 'User not activated' });
  res.json(updated);
};

exports.deactivate = async (req, res) => {
  const updated = await User.findByIdAndUpdate(req.params.id, { active: false }, { new: true });
  if (!updated) return res.status(404).json({ error: 'User not deactivated' });
  res.json(updated);
};