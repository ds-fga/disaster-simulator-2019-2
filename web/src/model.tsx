export let model = {
    window: null,
    game: {
        points: 5,
    },
    player: {
        name: "Sílvio Santos, o Illuminati Brasileiro",
        age: 900,
        species: "calango",
        speciesDescription: "Calango do Cerrado",
        planet: "earth",
        planetDescription: "Profundezas da Terra",
    },
    world: {
        year: 2010,
    },

    reset() {
        this.game.points = 5;
    },

    menu () {
        this.window = null;
    },
};