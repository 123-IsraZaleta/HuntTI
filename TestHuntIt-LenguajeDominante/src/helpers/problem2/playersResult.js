import { saveAs } from 'file-saver';

export const playersResult = ( rounds, numbersLineArray ) => {

        let j = 0
        let max_1 = 0
        let max_2 = 0
        let player = 0
        let player1_score = 0
        let player2_score = 0
        let totalScore = 0
        let score1 = 0
        let score2 = 0
        for (let i = 0; i < rounds; i++) {
            if( i === 0 ){
                score1 = parseInt(numbersLineArray[i+1][j]);
                score2 = parseInt(numbersLineArray[i+1][j+1]);
                if( score1 > score2 ){
                    let result = score1 - score2;
                    if( max_1 < result ) {
                        max_1 = result;
                    }
                }else{
                    let result = score2 - score1;
                    if( max_2 < result ) {
                        max_2 = result;
                    }
                }
                player1_score = score1;
                player2_score = score2;
            }
            if( i > 0){
                player1_score = player1_score + score1;
                player2_score = player2_score + score2;

                if( player1_score > player2_score ){
                    let result = player1_score - player2_score;
                    if( max_1 < result ) {
                        max_1 = result;
                    }
                }else{
                    let result = player2_score > player1_score;
                    if( max_2 < result ) {
                        max_2 = result;
                    }
                }
            }
        }//fin for
        if( max_1 > max_2){
            player = 1;
            totalScore = max_1;
        }else{
            player = 2;
            totalScore = max_2;
        }
        const blob = new Blob([ player,' ',totalScore ], { type: 'text/plain;charset=utf-8' });
        saveAs( blob, 'score.txt' );
        return true;
}