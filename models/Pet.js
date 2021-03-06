
const conexao = require('../infraestrutura/conexao')
const uploadDeArquivo = require('../arquivos/uploadDeArquivos')
class Pet {

    adiciona(pet, res) {

        const sql = 'INSERT INTO Pets SET ?'

        uploadDeArquivo(pet.imagem, pet.nome, (erro, novoCaminho) => {

            if (erro) {
                
                res.status(400).json(erro)    
            } else {

                const novoPet = {nome: pet.nome, imagem: pet.imagem}
                conexao.query(sql, pet, erro => {
                    
                    if (erro) {
                        console.log(erro)
                        res.status(400).json(erro)
                    } else {
                        
                        res.status(201).json(novoPet)
                    }
                })
            }
        })

    }
}

module.exports = new Pet()