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

//El callback retorna ...
export const buscarHeroe = (id, callback) => {
    const heroe = heroes[id];

    if(heroe) {
        callback(null, heroe);
    } else {
        //un error
        callback(`No existe un héroe con el id ${id}`);
    }
}