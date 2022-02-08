const agendaController = require("../controller/agendaController");
module.exports = (app) =>{
    app.get("/agenda", agendaController.get);
    app.post("/agenda", agendaController.post);
    app.delete("/agenda", agendaController.delete);
}