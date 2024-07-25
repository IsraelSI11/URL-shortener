/*
Generador del codigo alfanumérico de la url, comprobando que no se repita en la base de datos
*/
const generateCode = async () => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    let code = ''
    for (let i = 0; i < 7; i++) {
        code += characters.charAt(Math.floor(Math.random() * characters.length))
    }
    // Comprobar si el código ya existe en la base de datos
    //TODO
    return code
}
