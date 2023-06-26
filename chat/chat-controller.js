import * as chatDao from "./chat-dao.js";

function ChatController(app) {
  const findAllChat = async (req, res) => {
    const speeds = await chatDao.findAllChat();
    res.json(speeds);
  };
  const findAllUserChats = async (req, res) => {
    const user = req.params.user;
    const speeds = await chatDao.findChatsById(user);
    res.json(speeds);
  };
  const findMyChats = async (req, res) => {
    const currentUser = req.session["currentUser"];
    const speeds = await chatDao.findSpeedsByAuthorId(currentUser._id);
    res.json(speeds);
  };
  const findChatById = async (req, res) => {
    const chat = await chatDao.findChatById(req.params._id)
    res.json(chat);
  }
  const createChat = async (req, res) => {
    const currentUser = req.session["currentUser"];
    const newChat = { ...req.body, author: currentUser._id };
    const chat = await chatDao.createChat(newChat);
    res.json(chat);
  };

  app.get("/api/chats", findAllChat);
  app.get("/api/chat/:_id", findChatById);
  app.get("/api/chat/:user", findAllUserChats);
  app.post("/api/chat", createChat);
  app.get("/api/my-chats", findMyChats);
}
export default ChatController;