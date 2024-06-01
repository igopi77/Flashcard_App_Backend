const dbConnection = require("./config/dbConnection");
const express = require("express");
const env = require("dotenv");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

const configEnv = env.config();

const port =  process.env.PORT||5000;

app.use(express.json());
app.use(cors("AllowAllOrigins"));
app.use(bodyParser.json());
app.use("/api/notes", require("./routes/notesRoutes"));

app.listen (port, () => {
    console.log(`Backen Server is running on ${port}`);
})
dbConnection();