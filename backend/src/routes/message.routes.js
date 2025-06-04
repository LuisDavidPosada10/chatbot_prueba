import express from "express";
import { postMessage, getMessages, deleteMessages } from "../controllers/message.controller.js";

const router = express.Router();

router.get("/", getMessages);
router.post("/", postMessage);
router.delete("/", deleteMessages);

export default router;