import model from "./model.js";
export const createUser = (user) => {
  delete user._id;
  return model.create(user);
};
export const findAllUsers = () => model.find();
export const findUserById = (id) => model.findById(id);
export const findUserByUsername = (username) => model.findOne({ username });
export const findUserByCredentials = ({ username, password }) =>
  model.findOne({ username, password });
export const findUsersByPartialName = (partialName) => {
  const regex = new RegExp(partialName, "i");
  // 'i' makes it case-insensitive
  return model.find({
    $or: [{ firstName: { $regex: regex } }, { lastName: { $regex: regex } }],
  });
};

export const findUsersByRole = (role) => model.find({ role });

export const updateUser = (id, user) =>
  model.updateOne({ _id: id }, { $set: user });
export const deleteUser = (id) => model.deleteOne({ _id: id });
