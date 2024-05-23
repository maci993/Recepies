const recepti = require("../models/recepti");

const getForm = (req, res) => {
    res.render("form");
};

const postForm = async (req, res) => {
    const { recept, sostojki } = req.body;
    let data = {
        recept,
        sostojki,
    };
    await recepti.add(data);
    res.redirect("/recepti");
};

const getRecepti = async (req, res) => {
    let data = await recepti.list();
    res.render("recepti", { data });
};

const deleteRecepti = async (req, res) => {
    await recepti.remove(req.query.index);
res.redirect("/recepti");
};

module.exports = {
    getForm,
    postForm,
    getRecepti,
    deleteRecepti,
};