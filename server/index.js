// Require(s)
const express = require("express");
const recipeRouter = require("./routes/recipe");
require("./models/database");

// Variable(s)
const PORT = process.env.PORT || 3000; // Default: 3000 (use the process.env.PORT else use 3000 by default)
const app = express();

// Use(s)
app.use(recipeRouter);
app.get("/", function (req, res) {
    res.send("Bienvenue sur RecettesDuMonde !");
});

// Listener
app.listen(PORT, () => {
    console.log(
        "Server is listening on port "
        + PORT + "\n" +
        "Server URL: http://localhost:" + PORT
    );
});