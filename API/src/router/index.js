const testeRouter = require("./testeRouter");
const agendaRouter = require("./agendaRouter");

module.exports = (app) =>{
    testeRouter(app);
    agendaRouter(app);
}