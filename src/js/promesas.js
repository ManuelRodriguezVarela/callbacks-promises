const heroes = {
    capi: {
        nombre: 'Capitán América',
        poder: 'Aguantar inyecciones sin morir'
    },
    iron: {
        nombre: 'Ironman',
        poder: 'Absurda cantidad de dinero'
    },
    spider: {
        nombre: 'Spider',
        poder: 'La mejor reacción alergica a las picaduras de araña'
    },
}

export const buscarHeroe = (id) => {
    
    const heroe = heroes[id];

    //retornar promesa. Reciben 2 argumentos opcionales
    return new Promise((resolve, reject) => {
        if(heroe) {
            resolve( heroe );
        } else {
            reject(`No existe un héroe con el id ${id}`);
        }
    });
}

export const buscarHeroeForAway = (id) => {
    
    const heroe = heroes[id];

    //retornar promesa. Reciben 2 argumentos opcionales
    return new Promise((resolve, reject) => {
        if(heroe) {
            // setTimeout(() => {
            //     resolve( heroe );
            // }, 1000);
            //IGUAL QUE LO DE ARRIBA
            setTimeout(() => resolve(heroe), 1000);
        } else {
            reject(`No existe un héroe con el id ${id}`);
        }
    });
}

const promesaLenta = new Promise( (resolve, reject) => {
    setTimeout(() => resolve('Promesa lenta'), 4000);
});

const promesaMedia = new Promise( (resolve, reject) => {
    setTimeout(() => resolve('Promesa media'), 2000);
});

const promesaRapida = new Promise( (resolve, reject) => {
    setTimeout(() => resolve('Promesa rápida'), 500);
});

export {
    promesaLenta,
    promesaMedia,
    promesaRapida
}

//Async convierte la función en asíncrona NO el async del nombre buscarHeroeAsync, sino el async de después del igual
export const buscarHeroeAsync = async(id) => { //crea una promisa sin necesidad del new y de gestionar el resolve y reject
    
    const heroe = heroes[id];

    if(heroe) {
        //=resolve
        return heroe;
    } else {
        //=reject
        throw Error(`No existe un héroe con el id ${id}`);
    }
}