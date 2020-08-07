import { promesaLenta, promesaMedia, promesaRapida, buscarHeroe, buscarHeroeAsync } from './js/promesas';

//las dos formas son equivalentes
// promesaLenta.then( console.log );
// promesaMedia.then( mensaje => console.log(mensaje) );
// promesaRapida.then( console.log );

//race ejecutar las promesas en conjunto y obtener el mensaje de la más rápida
//solo sale mensaje de la rápida
Promise.race([promesaLenta, promesaMedia, promesaRapida])
    .then((mensaje) => (console.log(mensaje)));


//async. Asyn devuelve una promesa 
buscarHeroe('capi').then(heroe => console.log(heroe));
buscarHeroeAsync('spider').then(heroe => console.log(heroe));

//async con errores
buscarHeroe('capi2')
    .then(heroe => console.log(heroe))
    .catch(console.warn);
buscarHeroeAsync('spider2')
    .then(heroe => console.log(heroe))
    .catch(console.warn);