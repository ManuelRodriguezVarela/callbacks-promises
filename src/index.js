import { obtenerHeroesArr, obtenerHeroeAway, heroesCiclo, heroeIfAwait } from "./js/await";

//away devuelve una promesa, entonces se recibe cone el then
//obtenerHeroesArr().then(console.table);

console.time('await');

obtenerHeroesArr().then((heroes) => {
    console.table(heroes);
    console.timeEnd('await');
});

console.time('await2');
obtenerHeroeAway('capi2')
    .then(heroe => {
        console.log(heroe);
        console.timeEnd('await2');
    }).catch(console.warn);

heroesCiclo();

heroeIfAwait('iron');