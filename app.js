// const argv = require('yargs').argv;

// console.log(argv);
const colors = require('colors');
const argv = require('./config/yargs').argv;

const porHacer = require('./por-hacer/por-hacer');

let comando = argv._[0];
// console.log(comando);

switch (comando) {
    case 'crear':
        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);
        break;
    case 'listar':

        let listado = porHacer.getListado();

        for (let tarea of listado) {
            console.log('=====por Hacer====='.green);
            console.log(tarea.descripcion);
            console.log('Estado', tarea.completado ? 'Completada' : 'Incompleta');
            console.log('===================='.green);
        }

        break;
    case 'actualizar':
        let actualizado = porHacer.actualizar(argv.descripcion, argv.completado);
        console.log(actualizado)
        break;

    case 'borrar':
        let borrado = porHacer.borrar(argv.descripcion);
        console.log(borrado);
        break;
    default:
        console.log('No existe el comando');
        break;


}