import m from 'mithril';


/**
 * Retorna uma lista de classes a partir dos argumentos.
 * 
 * @param args - String ou lista de classes para ser adicionada
 */
export function classes(...args) {
    let clsList = [];
    for (let cls of args) {
        if (typeof cls === 'string') {
            clsList.push(cls);
        }
        else if (cls instanceof Array) {
            console.log(cls);
            cls.map(x => clsList.push(x));  
        }
        else if (typeof cls === 'object' && cls.attrs) {
            cls.attrs.map(x => clsList.push(x));
        }
    }
    return clsList.join(" ");
}

