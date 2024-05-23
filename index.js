const express = require("express");
const {
    getForm,
    postForm,
    getRecepti,
    deleteRecepti,
} = require("./controllers/recepti_form");

const app = express();

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true}));

app.get("/form", getForm);
app.post("/form", postForm);
app.get("/recepti", getRecepti);
app.get("/brisi", deleteRecepti);

app.listen(3000, () => console.log("Server started at port 3000"));

