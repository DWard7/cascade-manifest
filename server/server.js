const express = require("express");
const app = express();

const dotenv = require("dotenv");
dotenv.config();

const cors = require("cors");
app.use(cors(), express.json());

const connectDB = require("./config/mongoose.config");
connectDB();

const cascadeRouter = require("./routes/cascade.routes");
app.use("/", cascadeRouter);

const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`listening on port: ${port}`));
