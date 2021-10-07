import Swal from 'sweetalert2';
import { saveAs } from 'file-saver';

export const readFileProblem2 = ( file) => {

    let max_1 = 0
    let max_2 = 0
    const j = 0
    let player = 0
    let score = 0

    try {

        const fileReader = new FileReader();
            fileReader.readAsText( file );
            fileReader.onload = ( { target } ) => {
                const uint8array = new TextEncoder("utf-8").encode( target.result );
                const data = new TextDecoder().decode( uint8array );
                const words = data.split(/\n/);
                const numbersCleaning = words.map( (word) => word.replace('\r', '') );
                const numbersLineArray = numbersCleaning.map( (number) => number.split(" "));
                const rounds = parseInt( numbersLineArray[0][0] );
                if( ( numbersLineArray.length )-1 !== rounds || rounds >= 10001 ){
                    return Swal.fire('Error', `Please Type ${numbersLineArray[0][0]} rounds or ur rounds number is > 10000`, 'error');
                }
                
                for (let i = 0; i < rounds; i++) {
                    
                    if( parseInt(numbersLineArray[i+1][j]) > parseInt(numbersLineArray[i+1][j+1]) ){
                        let result = parseInt(numbersLineArray[i+1][j]) - parseInt(numbersLineArray[i+1][j+1])
                        if( max_1 < result ) {
                            max_1 = result;
                        }
                    }else{
                        let result = parseInt(numbersLineArray[i+1][j+1]) - parseInt(numbersLineArray[i+1][j])
                        if( max_2 < result ) {
                            max_2 = result;
                        }
                    }
                }
                if( max_1 > max_2){
                    player = 1;
                    score = max_1;
                }else{
                    player = 2;
                    score = max_2;
                }
                if( max_1 === max_2){
                    return Swal.fire('Alert',`With ${max_1} both scores are equals, please play again`, 'warning');
                }
                const blob = new Blob([ player,' ',score ], { type: 'text/plain;charset=utf-8' });
                saveAs( blob, 'score.txt' );
                window.location.reload();
    
            }
            fileReader.onerror = ( ) => {
                return Swal.fire('Error', fileReader.error, 'error');
            }
        
    } catch (error) {
        return Swal.fire('Error', `${ error }`, 'error');
    }
}