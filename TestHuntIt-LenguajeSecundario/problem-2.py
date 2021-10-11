def main():
    j=0
    k=0
    lineList = []
    max_1 = 0
    max_2 = 0
    player1_score = 0
    player2_score = 0
    file = './data/dataProblem2.txt' #-------------------PLEASE TYPE THE DOCUMENT PATH--------------------------------
    with open(file, 'r+') as file_obj:
        for lines in file_obj:
            lineDirty = lines.rstrip()
            lineClear = lineDirty.split()
            lineList.append(lineClear)
        rounds = int(lineList[0][0])
        if len(lineList[0]) != 1 or len(lineList)-1 != rounds or rounds not in range(1, 10001, 1):
            return print('Please type a valid number rounds')
        for i in range(1, len(lineList)):
            k = k + 1
            if( len(lineList[i]) != 2 ):
                return print('Please type only 2 scores each line')
            if( int(lineList[k][j]) == int(lineList[k][j+1])):
                return print('Please dont type same scores')
        for i in range( len(lineList)-1 ):
            score1 = int(lineList[i+1][j])
            score2 = int(lineList[i+1][j+1])
            if( i == 0 ):
                if( score1 > score2 ):
                    result1 = score1 - score2
                    if( max_1 < result1 ):
                        max_1 = result1
                else:
                    result2 = score2 - score1
                    if( max_2 < result2 ):
                        max_2 = result2
                player1_score = score1
                player2_score = score2
            if( i > 0 ):
                player1_score = player1_score + score1
                player2_score = player2_score + score2
                if( player1_score > player2_score ):
                    result1 = player1_score - player2_score
                    if( max_1 < result1 ):
                        max_1 = result1
                else:
                    result2 = player2_score - player1_score
                    if( max_2 < result2 ):
                        max_2 = result2
        archivo = open('Score.txt', 'w')
        if( max_1 > max_2):
            archivo.write('1 ' + str(max_1))
        else:
            archivo.write('2 ' + str(max_2))
        archivo.close()
        if( max_1 == max_2 ): #Fix this evaluation
            return print('No hay empates, se puede asumir siempre existe un ganador único')

main()