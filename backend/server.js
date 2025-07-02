require('dotenv').config();
const app = require('./src/app');
const connectDB = require('./src/config/db'); // Asegúrate de importar aquí también si no está

const PORT = process.env.PORT || 3000;

// PRIMERO conecta a Mongo, LUEGO inicia el server
connectDB().then(() => {
  app.listen(PORT, '0.0.0.0', () => {
  console.log(`API corriendo en http://localhost:${PORT}`);
});

}).catch((err) => {
  console.error('❌ Falló la conexión a MongoDB:', err);
});
