import { buscarHeroe as buscarHeroePromise } from './js/promesas';
import './styles.css';

const heroeId = 'capi';
const heroeId2 = 'iron';
const heroeId3 = 'spider';

//callback
// buscarHeroe(heroeId, (error, heroe) => {
//     if(error) {
//         console.error(error);
//     } else {
//         console.info(heroe);
//     }
// });

//infierno callback. Esto es un dolor de cabeza
// buscarHeroe(heroeId, (error, heroe1) => {
//     if(error) { return console.error(error); } 
    
//     buscarHeroe(heroeId2, (error, heroe2) => {
//         if(error) { return console.error(error); } 

//         buscarHeroe(heroeId2, (error, heroe3) => {
//             if(error) { return console.error(error); } 
//             console.info(`Enviando a ${heroe1.nombre}, ${heroe2.nombre} y ${heroe3.nombre} a la misión`);
//         });
//     });
// });

//Solucción infierno callback. Las promesas
// buscarHeroePromise(heroeId).then(heroe => {
//     //console.info(`Enviando héroe ${heroe.nombre} a la misión`);
//     buscarHeroePromise( heroeId2 ).then(heroe2 => {
//         console.info(`Enviando héroe ${heroe.nombre} y ${heroe2.nombre} a la misión`);
//     })
// })

//ejecutar promesas en paralelo
Promise.all([buscarHeroePromise(heroeId), buscarHeroePromise(heroeId2), buscarHeroePromise(heroeId3)])
    //.thesn( heroes => {...}) //abajo destructuración
    .then( ([heroe1, heroe2, heroe3]) => { //destructuración
        console.info(`Enviando a ${heroe1.nombre}, ${heroe2.nombre} y ${heroe3.nombre} a la misión`);
    }).catch( error => {
        console.error(error);
    }).finally(() => {
        console.info('finally');
    });