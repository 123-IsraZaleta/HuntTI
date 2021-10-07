
max_1 = 0
max_2 = 0

rounds = int(input("\nNumber of rounds:\n"))
if ( rounds in range(1, 10001, 1) ): #Para evaluar si esta en rango
    for i in range( rounds ):
        number = input("\nWrite score of both players:\n");
        resultInt = [int(x) for x in number.split()] #Se cambia valor a int para evaluar
        
        if( resultInt[0] > resultInt[1] ):
            advantage_1 = resultInt[0] - resultInt[1]
            if( advantage_1 >= max_1 ):
                max_1 = advantage_1 #Se mantiene la referencia a la mayor ventaja
        else:
            advantage_2 = resultInt[1] - resultInt[0]
            if( advantage_2 >= max_2 ):
                max_2 = advantage_2 #Se mantiene la referencia a la mayor ventaja

    if( max_1 > max_2): #Se compara cual ventaja fue mayor para dar al ganador
        print('1', max_1 )
    else:
        print('2', max_2 )
    if( max_1 == max_2 ): #EN CASO DE EMPATE se juega nuevamente
        print('Please, play again')
else:
    print('Please type a number inside range')
