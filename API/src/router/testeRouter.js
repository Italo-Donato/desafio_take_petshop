const testeController = require("../controller/testeController");
module.exports = (app) =>{
    app.get("/teste", testeController.get);
}