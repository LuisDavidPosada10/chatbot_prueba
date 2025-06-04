import { DataTypes } from "sequelize";
import connection from "../connection.js";

const Message = connection.define(
  "Messages",
  {
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    sender: {
      type: DataTypes.ENUM("bot", "user"),
      allowNull: false,
    },
  }, {
    timestamps: true,
  });
export default Message;