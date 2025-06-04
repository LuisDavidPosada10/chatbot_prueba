import swaggerUi from "swagger-ui-express";
import YAML from "yamljs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const swaggerDocument = YAML.load(path.join(__dirname, "../swagger.yaml"));

export default (app) => {
  app.use(
    "/api-docs",
    swaggerUi.serve,
    swaggerUi.setup(swaggerDocument, {
      customSiteTitle: "Chatbot API Docs",
      customCss: ".swagger-ui .topbar { display: none }",
    })
  );
};