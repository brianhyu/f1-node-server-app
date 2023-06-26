import * as speedsDao from "./speeds-dao.js";

function SpeedsController(app) {
  const findAllSpeeds = async (req, res) => {
    const speeds = await speedsDao.findAllSpeeds();
    res.json(speeds);
  };
  const findSpeedsByAuthorId = async (req, res) => {
    const author = req.params.author;
    const speeds = await speedsDao.findSpeedsByAuthorId(author);
    res.json(speeds);
  };
  const findMySpeeds = async (req, res) => {
    const currentUser = req.session["currentUser"];
    const speeds = await speedsDao.findSpeedsByAuthorId(currentUser._id);
    res.json(speeds);
  };
  const createTuit = async (req, res) => {
    const currentUser = req.session["currentUser"];
    const newTuit = { ...req.body, author: currentUser._id };
    const actualTuit = await speedsDao.createTuit(newTuit);
    res.json(actualTuit);
  };

  app.get("/api/speeds", findAllSpeeds);
  app.get("/api/speeds/:author", findSpeedsByAuthorId);
  app.post("/api/speeds", createTuit);
  app.get("/api/my-speeds", findMySpeeds);
}

export default SpeedsController;
