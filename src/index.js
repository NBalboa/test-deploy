const EXPRESS = require("express");
const APP = EXPRESS();
const PORT = 3001;

APP.get("/", (req, res) => {
    res.json({ msg: "Hi this a test deploy using render" });
});

APP.get("/hello", (req, res) => {
    res.json({ msg: "Hello" });
});

APP.get("/:name", (req, res) => {
    const { name } = req.params;
    res.json({ msg: `Hi ${name}` });
});

APP.listen(PORT, function listening() {
    console.log(`Running on sever ${PORT}`);
});
