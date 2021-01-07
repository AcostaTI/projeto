const fs = require('fs')

fs.createReadStream("./assets/cachorro-peludo.jpg")
    .pipe(fs.createWriteStream("./assets/cachorro-leudo-stream.jpg"))
    .on("finish", () => console.log("Imagem foi escrito com sucesso"))

