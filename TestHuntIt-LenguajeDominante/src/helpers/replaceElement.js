import Swal from 'sweetalert2';
import { wordList } from './wordList';

export const replaceElement = ( word = '', characters ) => {

    const wordCode = word.replace('\r', '');
    if( wordCode.length !== characters ){
        return Swal.fire('Error', `The instruction 1 isn't ${ characters } characters`, 'error');
    }
    return wordList( wordCode );
}