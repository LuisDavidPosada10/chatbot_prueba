import Message from "../models/messages.model.js";
import { getIAResponse } from "../services/iaService.js";

export const getMessages = async (req, res) => {
  try {
    const messages = await Message.findAll({
      order: [["createdAt", "ASC"]],
    });
    return res.status(200).json(messages);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export const postMessage = async (req, res) => {
  const { content } = req.body;
  if (!content)
    return res.status(400).json({ error: "El mensaje no puede estar vacio" });
  try {
    const [userMessage, iaResponse] = await Promise.all([
      Message.create({ content, sender: "user" }),
      getIAResponse(content),
    ]);
    const botMessage = await Message.create({
      content: iaResponse,
      sender: "bot",
    });
    return res.status(201).json([userMessage, botMessage]);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export const deleteMessages = async (req, res) => {
  try {
    await Message.destroy({ truncate: true });
    return res.status(200).json({
      success: true,
      message: "Todos los mensajes fueron eliminados",
    });
  } catch (error) {
    console.error("Error al eliminar mensajes:", error);
    return res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};