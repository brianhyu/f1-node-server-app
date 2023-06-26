import speedsModel from "./speeds-model.js";

export const findAllTuits = () =>
  speedsModel.find().populate("author", "username").exec();

export const findTuitsByAuthorId = (author) => speedsModel.find({ author });

export const createTuit = (tuit) => speedsModel.create(tuit);

export const findAllSpeeds =  () => speedsModel.find();

export const createSpeeds = (speed) => speedsModel.create(speed);
