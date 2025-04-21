import mongoose from "mongoose";
const schema = new mongoose.Schema(
  {
    _id: String,
    title: { type: String, default: "New Quiz" },
    course: { type: String, ref: "CourseModel" },
    published: { type: Boolean, default: false },
    availableFrom: Date,
    availableUntil: Date,
    dueDate: Date,
    createdBy: String,
  },
  { collection: "quizzes", timestamps: true }
);
export default schema;
