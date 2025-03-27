import * as enrollmentsDao from "./dao.js";
export default function EnrollmentRoutes(app) {
  app.delete("/api/enrollments/users/:userId/courses/:courseId", async (req, res) => {
    const { userId, courseId } = req.params;
    console.log(`deleting enrollment for user ${userId} and course ${courseId}`);
    const status = await enrollmentsDao.deleteEnrollment(userId, courseId);
    res.send(status);
  });
  app.post("/api/enrollments/users/:userId/courses/:courseId", (req, res) => {
    const { userId, courseId } = req.params;
    console.log(`creating enrollment for user ${userId} and course ${courseId}`);
    const newEnrollment = enrollmentsDao.createEnrollment(userId, courseId);
    res.send(newEnrollment);
  });
  app.get("/api/enrollments", (req, res) => {
    const enrollments = enrollmentsDao.findAllEnrollments();
    res.send(enrollments);
  });
}
