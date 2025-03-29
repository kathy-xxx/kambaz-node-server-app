import mongoose from "mongoose";
import schema from "./shema.js";
const model = mongoose.model("EnrollmentModel", schema);
export default model;
