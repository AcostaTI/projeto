
const Atendimento = require('../models/Atendimento')

module.exports = app => {

    app.get('/atendimentos', (req, res) => res.send('Você está na rota de atendimentos, com GET'));

    app.post('/atendimentos', (req, res) => {
        
        const atendimento = req.body

        Atendimento.adiciona(atendimento)   
        res.send('Você está na rota de atendimentos, com POST')
    })
}