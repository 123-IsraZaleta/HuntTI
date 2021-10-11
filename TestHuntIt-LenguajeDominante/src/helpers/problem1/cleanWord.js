import { wordList } from './wordList';

export const cleanWord = ( word = '', characters, ) => {
    if( word.length !== characters ){
        return false;
    }
    let wordCode = '';
    for (let i = 0; i < word.length ; i++) {
        if( word[i] !== word[i + 1] ){
            wordCode = wordCode + word[i];
        }
        const character = isAscii( word[i] )
        if( !character ){
            return false;
        }
    }
    return wordList( wordCode );
}
const isAscii = ( character = '' ) => {
    const parseChar = character.charCodeAt();
    if( parseChar >= 48 && parseChar <= 57 ) {
        return true;
    }if(parseChar >= 65 && parseChar <= 90){
        return true;
    }if( parseChar >= 97 && parseChar <= 122 ){
        return true;
    }else{
        return false;
    }
}