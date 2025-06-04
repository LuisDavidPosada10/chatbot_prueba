import Message from "../models/messages.model.js";
import { getIAResponse } from "../services/iaService.js";

export const getMessages = async (res) => {
  try {
    const messages = await Message.findAll({
      order: [["createdAt", "ASC"]],
    });
    res.json(messages);
  } catch (error) {
    res.status(500).json({ error: error.message });
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
    res.status(201).json([userMessage, botMessage]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteMessages = async (res) => {
  try {
    await Message.destroy({ truncate: true });
    res.status(200).json({ message: "Messages deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}