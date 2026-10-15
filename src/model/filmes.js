const filmes = new Array (
    {titulo: "Planeta dos macacos", classificacao: "12", descricao:"Ruim", lancamento:true},
    {titulo: "Poderoso Xefinho", classificacao: "18", descricao:"Excelente", lancamento:false},
    {titulo: "Branca de ne", classificacao: "L", descricao:"Bom", lancamento:true},
)

class ModelFilmes {
    Buscar() {
        return filmes
    }

    BuscarUm(id) {
        return filmes [id]
    }

    Criar(titulo, classificacao, descricao, lancamento) {
        filmes.push({titulo, classificacao, descricao, lancamento})
    }

    Alterar(id, titulo, classificacao, descricao, lancamento) {
        filmes[id].titulo = titulo
        filmes[id].classificacao = classificacao
        filmes[id].descricao = descricao
        filmes[id].lancamento = lancamento
    }

    AlterarStatus(id) {
        filmes[id].classificacao = !filmes[id].classificacao
    }

    Deletar(id) {
        filmes.splice(id, 1)
    }
    
}

export default new ModelFilmes