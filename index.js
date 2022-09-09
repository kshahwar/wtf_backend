const express = require("express");
const cors = require("cors");
const app = express();
var corsOptions = {
  origin: "http://localhost:8081"
};

const envs = process.env;
app.use(cors(corsOptions));

app.use(express.json());


app.use(express.urlencoded({ extended: true }));

const db = require("./src/Models");


app.get("/", (req, res) => {
  res.json({ message: "Welcome to WTF" });
});

require("./src/Routes/user.routes")(app);

app.use('api/users',require('./src/Routes/user.routes'))


// set port, listen for requests
const PORT = envs.PORT || 8080;


db.sequelize.sync()
  .then((res) => {
    console.log(res+"Synced db.");
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}.`);
      });
  })
  .catch((err) => {
    console.log("Failed to sync db: " + err.message);
  });