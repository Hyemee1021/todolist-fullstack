import TaskSchema from "./TaskSchema.js";

export const insertTask = (taskobj) => {
  return TaskSchema(taskobj).save();
};

export const getAllTasks = () => {
  return TaskSchema.find();
};

export const switchTask = (_id, data) => {
  return TaskSchema.findByIdAndUpdate(_id, data, { new: true });
};

export const deleteTask = (_id) => {
  return TaskSchema.findByIdAndDelete(_id);
};

export const deleteManyTask = (ids) => {
  return TaskSchema.deleteMany({ _id: { $in: ids } });
};
