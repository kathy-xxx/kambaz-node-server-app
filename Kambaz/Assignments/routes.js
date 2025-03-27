import * as assignmentsDao from "./dao.js";
export default function AssignmentRoutes(app) {
  app.put("/api/assignments/:assignmentId", async (req, res) => {
    const { assignmentId } = req.params;
    const assignmentUpdates = req.body;
    console.log(`updating assignment ${assignmentId} with:`, assignmentUpdates);
    const status = await assignmentsDao.updateAssignment(assignmentId, assignmentUpdates);
    res.send(status);
  });
  app.delete("/api/assignments/:assignmentId", async (req, res) => {
    const { assignmentId } = req.params;
    console.log(`deleting assignment ${assignmentId}`);
    const status = await assignmentsDao.deleteAssignment(assignmentId);
    res.send(status);
  });
  app.get("/api/assignments/:assignmentId", async (req, res) => {
    const { assignmentId } = req.params;
    const assignment = await assignmentsDao.findAssignment(assignmentId);
    res.send(assignment);
  });
}
