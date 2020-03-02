const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || 8080;

app.use(express.static(path.join(__dirname, "dist")));
app.get("*", (request, response) => {
    response.sendFile(path.resolve(__dirname, "dist/index.html"));
});

app.listen(port, () => {
    console.log(`Serveur démarrer au port ${port}`);
});
