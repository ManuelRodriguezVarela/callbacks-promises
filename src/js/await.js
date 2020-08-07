import { buscarHeroeAsync, buscarHeroeForAway } from "./promesas";


const heroesIds = ['capi', 'iron', 'spider'];
const heroesPromesas = heroesIds.map(id => buscarHeroeForAway(id));
//const heroesPromesas = heroesIds.map(buscarHeroeForAway);

//uso de away, espera a que se resuelvan las promesas, away sólo funciona en funciones asíncronas por eso el async
// export const obtenerHeroesArr = async() => {
//     const heroesArr = [];

//     for(const id of heroesIds) {
//         const heroe = await buscarHeroeAsync(id);
//         heroesArr.push(heroe);
//     }

//     return heroesArr;
// }

//no se recomiendo el resolver promesas dentro de un ciclo for
export const obtenerHeroesArr = async() => {
    // const heroesArr = [];

    // //ahora tengo un arreglo de promesas
    // for(const id of heroesIds) {
    //     heroesArr.push(buscarHeroeForAway(id));
    // }
    // //con el all, resuelve promesas al mismo tiempo. IMPORTANTE uso aquí del away. Nunca away dentro de un for
    // return await Promise.all(heroesArr);

    //MÁS ELEGANTE
    return await Promise.all(heroesIds.map(buscarHeroeForAway));
}

//manejar errores con away es con try catch
export const obtenerHeroeAway = async(id) => {
    try{
        const heroe = await buscarHeroeAsync(id);
        return heroe;
    } catch(err) {
        throw err;
    }
}

//for await
export const heroesCiclo = async () => {
    console.time('heroesCiclo');
    for await (const heroe of heroesPromesas){
        console.log(heroe);
        console.time('heroesCiclo');
    }

    //const heroes = await Promise.all(heroesPromesas);
    //heroes.forEach(heroe => console.log(heroe));
}

//if await
export const heroeIfAwait = async(id) => {
    if((await buscarHeroeAsync(id)).nombre === 'Ironman') {
        console.log('es el mejor de todos');
    } else {
        console.log('naaaaaa');
    }
}