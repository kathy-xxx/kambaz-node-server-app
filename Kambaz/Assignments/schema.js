import mongoose from "mongoose";
const schema = new mongoose.Schema(
  {
    _id: String,
    title: String,
    modules: String,
    available_from_date: Date,
    available_until_date: Date,
    points: Number,
    description: String,
    description: String,
    course: { type: String, ref: "CourseModel" },
  },
  { collection: "assignments" }
);
export default schema;
