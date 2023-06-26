import chatModel from "./chat-model.js";
import messageModel from "./message-model.js";
import userModel from "../users/users-model.js"

export const findAllChat = () =>
chatModel.find().populate("author", "username").exec();

export const findChatById = (chatId) =>
chatModel.find({_id: chatId});

export const findChastById = (user) => {
  chats = userModel.find({_id: user}, {username: true})
  chats.forEach((chat) => {
    console.log(chat);
  });
  chatModel.find({ author });
}

export const createChat = (tuit) => chatModel.create(tuit);

export const findAllMessages = (chatId) => messageModel.find({ author: chatId });