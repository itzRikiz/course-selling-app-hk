const express = require("express");
const jwt = require("jsonwebtoken");
const { userRouter } = require("./routes/user");
const PORT = 3000;
const app = express();

app.use(express.json());

app.use("/user", userRouter);

app.post("courses", (req, res) => {
  req.json({
    message: "signup",
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
