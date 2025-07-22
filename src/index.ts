import express from "express";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "🚀 Hello world!", env: process.env.TAL });
});

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`App listening on port ${8080}`);
});
