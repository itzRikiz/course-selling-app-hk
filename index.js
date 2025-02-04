const express = require("express");
const mongoose = require("mongoose");
const { userRouter } = require("./routes/user");
const { courseRouter } = require("./routes/course");
const PORT = 3000;
const app = express();

app.use(express.json());

app.use("/user", userRouter);
app.use("/course", courseRouter);

async function main() {
  try {
    await mongoose.connect(
      ""
    );
    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("Database connection failed:", error);
  }
}

main();
