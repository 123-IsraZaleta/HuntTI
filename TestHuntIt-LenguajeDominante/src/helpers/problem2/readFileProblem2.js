import Swal from 'sweetalert2';
import { playersResult } from './playersResult';

export const readFileProblem2 = ( file ) => {
    let k = 0;
    let j = 0;
    try {
        const fileReader = new FileReader();
            fileReader.readAsText( file );
            fileReader.onload = ( { target } ) => {
                const uint8array = new TextEncoder("utf-8").encode( target.result );
                const data = new TextDecoder().decode( uint8array );
                const words = data.split(/\n/);
                const numbersCleaning = words.map( (word) => word.replace('\r', '') );
                const numbersLineArray = numbersCleaning.map( (number) => number.split(" "));
                if( numbersLineArray[0].length !== 1 ){
                    return Swal.fire('Error', `must be type 1 number of rounds`, 'error');
                }
                for (let i = 1; i < ( numbersLineArray.length ); i++) {
                    k++
                    if( numbersLineArray[i].length !== 2 ){
                        return Swal.fire('Error', `Must be type 2 scores each round`, 'error');
                    }
                    if( numbersLineArray[k][j] === numbersLineArray[k][j+1]){
                        return Swal.fire('Error', `Please dont type same scores`, 'error');
                    }
                }
                const rounds = parseInt( numbersLineArray[0][0] );
                if( ( numbersLineArray.length )-1 !== rounds || rounds >= 10001 ){
                    return Swal.fire('Error', `Please Type ${numbersLineArray[0][0]} rounds or ur rounds number is > 10000`, 'error');
                }
                const finalResult = playersResult( rounds, numbersLineArray);
                if( !finalResult ){
                    return Swal.fire('Alert',`No hay empates, se puede asumir siempre existe un ganador único`, 'warning');
                }
                window.location.reload();
            }
            fileReader.onerror = ( ) => {
                return Swal.fire('Error', fileReader.error, 'error');
            }
    } catch (error) {
        return Swal.fire('Error', `${ error }`, 'error');
    }
}