import Swal from 'sweetalert2';
import { saveAs } from 'file-saver';

import { cleanWord } from './cleanWord';
import { isMessage } from './isMessage';
import { replaceElement } from './replaceElement';
import { isInRange } from './isInRange';

export const readFileProblem1 = ( file ) => {

    try {

        const fileReader = new FileReader();
        fileReader.readAsText( file );
        fileReader.onload = ( { target } ) => { //Se ejecuta onload cuando todo esta ok
    
            const uint8array = new TextEncoder("utf-8").encode( target.result );
            const data = new TextDecoder().decode( uint8array );
            const words = data.split(/\n/);
            if( words.length !== 4 ){
                return Swal.fire('Error', 'Please only type 4 lines', 'error');
            }
            
            const numbersLine = words[0].replace('\r', '');
            const numbersLineArray = numbersLine.split(" ");
            const numbersArrayCleaner = numbersLineArray.map( ( number ) => parseInt( number, 10 ) );
            const goAhead = isInRange( numbersArrayCleaner );
            if( typeof( goAhead ) === 'object' ){
                return;
            }

            const instruction1 = replaceElement( words[1], numbersArrayCleaner[0] );
            const instruction2 = replaceElement( words[2], numbersArrayCleaner[1] );
            const message = cleanWord( words[3], numbersArrayCleaner[2]);
            const res1 = isMessage( instruction1, message );  
            const res2 = isMessage( instruction2, message );  

            const blob = new Blob([ res1,'\n',res2 ], { type: 'text/plain;charset=utf-8' });
            saveAs( blob, 'decrypted.txt' );
            window.location.reload();     
        }
        fileReader.onerror = ( ) => {
            return Swal.fire('Error', fileReader.error, 'error');

        }
        
    } catch (error) {
        return Swal.fire('Error', `${ error }`, 'error');
    }
}