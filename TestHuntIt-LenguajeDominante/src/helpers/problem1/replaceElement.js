import { wordList } from './wordList';

export const replaceElement = ( word = '', characters ) => {

    const wordCode = word.replace('\r', '');
    
    return wordList( wordCode );
}