import mongoose from "mongoose";
import schema from "./schema.js";
const model = mongoose.model("QuizAttemptsModel", schema);
export default model;
