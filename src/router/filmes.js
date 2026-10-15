// rotas - endpoints

import express from "express";
import ControllerFilmes from "../controller/filmes.js"

const router = express.Router();
//O padrao eh: endpoint - controller.funcao
//busca todos
router.get("/buscar", ControllerFilmes.Buscar)

//busca um - id
router.get("/buscarUm/:id", ControllerFilmes.BuscarUm)

//cria
router.post("/criar", ControllerFilmes.Criar)

//alterar
router.put("/alterar/:id", ControllerFilmes.Alterar)

//alterar
router.put("/alterarstatus/:id", ControllerFilmes.AlterarStatus)

//deletar
router.delete("/deletar/:id", ControllerFilmes.Deletar)

export default router;