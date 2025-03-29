import { v4 as uuidv4 } from "uuid";
import model from "./model.js";
export function findAllEnrollments() {
  return model.find();
}
export async function findCoursesForUser(userId) {
  const enrollments = await model.find({ user: userId }).populate("course");
  return enrollments.map((enrollment) => enrollment.course);
}
export async function findUsersForCourse(courseId) {
  const enrollments = await model.find({ course: courseId }).populate("user");
  return enrollments.map((enrollment) => enrollment.user);
}
export function enrollUserInCourse(user, course) {
  return model.create({ user, course, _id: `${user}-${course}` });
}
export function unenrollUserFromCourse(user, course) {
  return model.deleteOne({ user, course });
}
export function createEnrollment(userId, courseId) {
  const newEnrollment = { _id: uuidv4(), user: userId, course: courseId };
  return model.create(newEnrollment);
}
export function deleteEnrollment(userId, courseId) {
  return model.deleteOne({ user: userId, course: courseId });
}
