const express = require("express");
const app = express();
const path = require("path");

require("./models/db");

app.set("PORT", process.env.PORT || 3000);

app.use(express.json());

app.use(require("./routes/index.route"));
app.use(require("./routes/usuario.routes"));
app.use(require("./routes/Motos.routes"));

app.get("/api", (req, res) => {
  res.json({ api: "works!" });
});
app.get("/page", (req, res) => {
  res.sendFile(path.join(__dirname + "/public/index.html"));
});
// Public
app.use(express.static(path.join(__dirname, "public")));

app.listen(app.get("PORT"), () => {
  console.log(`Server on port ${app.get("PORT")}`);
});
