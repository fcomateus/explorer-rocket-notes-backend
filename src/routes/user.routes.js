const { Router } = require("express");

const UsersController = require("../controllers/UsersController")

const usersRoutes = Router();

function myMiddleware(request, response, next) {
    console.log("Você passou pelo Middleware!");

    if(!request.body.isAdmin){
        return response.json({ message:"user unauthorized" });
    }

    //como ele sabe que essa função next()
    //chama a userController.create ??
    //pois essa função não foi declarada
    //em nenhum local
    next();
}
    
const userController = new UsersController()

//aplicando Middleware para todas as rotas de uma vez
usersRoutes.use(myMiddleware)
usersRoutes.post("/", userController.create);
// DE NOVO ESSA PORRA DE use() aaaA


//aplicando Middleware rota por rota
//usersRoutes.post("/", myMiddleware, userController.create);


module.exports = usersRoutes;

//teste, troquei nome no github, quero ver se está dando certo os commits