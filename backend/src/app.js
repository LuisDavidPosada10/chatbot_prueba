import express from "express";
import cors from "cors";

import messageRoutes from "./routes/message.routes.js";
import setupSwagger from "./swagger.js";

const app = express();
app.use(
  cors({
    origin: process.env.CORS_ORIGIN || "*",
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
setupSwagger(app);

app.use("/api/messages", messageRoutes);

export default app;