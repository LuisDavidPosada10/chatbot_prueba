import app from "./src/app.js";
import connection from "./src/connection.js";

async function startServer() {
  try {
    await connection.authenticate();
    console.log("Conexión a la BD establecida correctamente.");
    await connection.sync({ force: false });
    app.listen(3000, () => {
      console.log("Servidor escuchando en el puerto 3000");
    });
  } catch (error) {
    console.error("Error al iniciar la aplicación:", error);
  }
}

startServer();