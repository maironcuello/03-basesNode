const argv = require('./config/yargs').argv;
const colors = require('colors');
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

let comando = argv._[0];

switch (comando) {

    case 'listar':
        listarTabla(argv.base, argv.limite)
            .then(listar => console.log(`La tabla de ${argv.base} fue listada hasta su limite ${argv.limite}`.blue))
            .catch(err => console.log(err));
        break;

    case 'crear':

        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`La tabla de ${argv.base} con limite ${argv.limite} fue creada`))
            .catch(err => console.log(err).colors.red);
        break;

    default:
        console.log('Comando no reconocido');
        break;
}


// console.log(process.argv);


// let argv2 = process.argv;
// let parametro = argv[2];
// let base = parametro.split('=')[1]