import Database from "../Database/index.js";
import { v4 as uuidv4 } from "uuid";
export function findAllEnrollments() {
  return Database.enrollments;
}
export function enrollUserInCourse(userId, courseId) {
  const { enrollments } = Database;
  enrollments.push({ _id: uuidv4(), user: userId, course: courseId });
}
export function createEnrollment(userId, courseId) {
  const newEnrollment = { _id: uuidv4(), user: userId, course: courseId };
  Database.enrollments = [...Database.enrollments, newEnrollment];
  return newEnrollment;
}
export function deleteEnrollment(userId, courseId) {
  const { enrollments } = Database;
  Database.enrollments = enrollments.filter(
    (enrollment) =>
      !(enrollment.user == userId && enrollment.course == courseId)
  );
}
