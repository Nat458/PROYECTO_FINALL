const express = require('express');
const router = express.Router();
const User = require('../models/user');

// Ruta de login 
router.post('/login', async (req, res) => {
  const { correo, contraseña } = req.body;

  try {
    const user = await User.findOne({ correo });
    if (!user) return res.status(401).json({ message: 'Usuario no encontrado' });

    if (user.contraseña !== contraseña) {
      return res.status(401).json({ message: 'Contraseña incorrecta' });
    }

    res.status(200).json({ message: 'Login exitoso', user });
  } catch (err) {
    console.error('Error en login:', err);
    res.status(500).json({ message: 'Error del servidor' });
  }
});

module.exports = router;