
export const isMessage = ( instruction = '', message ) => {

    let j = 0;
    let k = 0; //Contadores para mantener la referencia

    for (let i = 0; i < message.length; i++) {

        if( message[i] === instruction[j] ){
            j = j + 1;
            if( j === instruction.length ){
                k = j; //Para mantener la referencia de que se encontró la palabra
                j = 0;
            }
        }
    }
    if( k === instruction.length ){
        const valor = 'Si';
        return valor;
    }else{
        const valor = 'No';
        return valor;
    }
}