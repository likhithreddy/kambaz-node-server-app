import * as dao from "./dao.js";

export default function QuizRoutes(app) {
  app.post("/api/courses/:cid/quizzes", async (req, res) => {
    const { cid } = req.params;
    const userId = req.session["currentUser"]?._id || "anonymous";
    const quiz = await dao.createQuiz(cid, userId);
    res.json(quiz);
  });

  app.get("/api/courses/:cid/quizzes", async (req, res) => {
    const { cid } = req.params;
    const quizzes = await dao.findQuizzesForCourse(cid);
    res.json(quizzes);
  });

  app.delete("/api/quizzes/:qid", async (req, res) => {
    const { qid } = req.params;
    const status = await dao.deleteQuiz(qid);
    res.send(status);
  });

  app.patch("/api/quizzes/:qid/publish", async (req, res) => {
    const { qid } = req.params;
    const quiz = await dao.togglePublish(qid);
    res.json(quiz);
  });
}
