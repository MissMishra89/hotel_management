import express from "express";
const app = express();
const port = 5000;
app.use(express.json());
app.get("/", (req, res) => {
  res.json({ greet: "hello" });
});
app.post("/login", (req, res) => {
  console.log(req.body);
  res.json({ greet: "hello" });
});
app.post("/signup", (req, res) => {
  res.json({ name: "khushi" });
});
app.listen(port, () => {
  console.log(`server started on ${port}`);
});
