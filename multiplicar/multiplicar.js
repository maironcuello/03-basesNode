const file = require('fs');
const colors = require('colors');

let listarTabla = async(base, limite) => {

    if (!Number(base)) {
        throw (`La base ${base} no es un numero`)
    }

    let data = '';
    for (let i = 1; i <= limite; i++) {
        data += `${base} * ${i} = ${base * i}\n`;
    }

    console.log(data);


}

let crearArchivo = async(base, limite) => {

    if (!Number(base)) {
        throw (`La base ${base} no es un numero`)
    }

    let data = '';

    for (let i = 1; i <= limite; i++) {
        data += `${base} * ${i} = ${base * i}\n`;
    }

    file.writeFile(`././tablas/tablaDel-${base}.txt`, data, (err) => {
        if (err) throw err;

    });

}
module.exports = { crearArchivo, listarTabla };