import string

def main():

    numberValidation()

def numberValidation(): #funcion para validar si los numeros ingresados son correctos

    number = input("\nIngresa tres enteros:\n");
    resultInt = [int(x) for x in number.split()] #Se transforman a int para poder evaluar
    if ( len( resultInt ) == 3 ):
        if ( resultInt[0] not in range(2, 51, 1) ):
            return print('Wrong number in first position')
        if ( resultInt[1] not in range(2, 51, 1) ):
            return print('Wrong number in second position')
        if ( resultInt[2] not in range(3, 5001, 1) ):
            return print('Wrong number in third position')
    else:
        return print('Please type 3 numbers with space between each one')
        
    wordValidation( resultInt )
    
def wordValidation( resultInt ): #Funcion para validar si las palabras ingresadas son correctas

    word_1 = input("\nPalabra 1: \n")
    result = isAscii( word_1 ) #Despues de ingresar palabra se evalua para ver si es ASCII
    if( not result or resultInt[0] != len(word_1.replace(" ","")) ):
        return print('Please type correct word')
    message_1 = clearWord( word_1 )
    
    word_2 = input("\nPalabra 2: \n")
    result = isAscii( word_2 )
    if( not result or resultInt[1] != len(word_2.replace(" ","")) ):
        return print('Please type correct word')
    message_2 = clearWord( word_2 )

    word_3 = input("\nPalabra 3: \n")
    result = isAscii( word_3 )
    if( not result or resultInt[2] != len(word_3.replace(" ","")) ):
        return print('Please type correct word')
    instruction = clearWord( word_3 )
    
    isInstruction( instruction, message_1, message_2 )
    
def isAscii( word ): #Funcion para evaluar cada caracter y evaluar si se encuentra dentro del ASCII

    for letter in word:
        if letter not in string.ascii_letters:
            return False
            
    return True

def isInstruction( instruction, message_1, message_2 ): #Funcion donde se hacen las evaluaciones para ver si tiene una instruccion valida
    j = 0
    k = 0
    l = 0 # Contadores para mantener referencias
    m = 0
    
    for i in range( len(instruction)-1 ):#for para ir evaluando si hay una instrucción

        if( instruction[i] == message_1[j] ):
            j = j + 1
            if( j == len(message_1) ):
                k = j #Para mantener la referencia de que se encontró la palabra
                j = 0

        if( instruction[i] == message_2[l] ):
            l = l + 1
            if( l == len(message_2) ):
                m = l #Para mantener la referencia de que se encontró la palabra
                l = 0

    if( k == len( message_1 )):
        print('SI')
    else:
        print('NO')
    if( m == len( message_2 ) ):
        print('SI')
    else:
        print('NO')

def clearWord( word ): #Funcion para quitar letras repetidas y guardar la palabra en un arreglo

    letterList = []
    cleanList = []

    for letter in word: #Se guarda palabra en arreglo
        letterList.append(letter) 

    cleanList.append( letterList[0] )

    for i in range(len(letterList)-1): #Se quita letras repetidas
        if( letterList[i] != letterList[i+1] ): 
            cleanList.append( letterList[i+1] )

    return cleanList

main()