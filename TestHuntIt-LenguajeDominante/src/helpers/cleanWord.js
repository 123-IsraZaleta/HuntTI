import Swal from 'sweetalert2';
import { wordList } from './wordList';

export const cleanWord = ( word = '', characters, ) => {

    if( word.length !== characters ){
        return Swal.fire('Error', `The message isn't ${ characters } characters`, 'error');
    }
    let wordCode = '';
    for (let i = 0; i < ( word.length )-1 ; i++) {
        
        if( word[i] !== word[i + 1] ){
            wordCode = wordCode + word[i];
        }
    }
    return wordList( wordCode );
}

