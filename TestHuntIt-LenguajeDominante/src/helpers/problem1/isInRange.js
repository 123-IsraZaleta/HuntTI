import Swal from 'sweetalert2';

export const isInRange = ( numberList = [] ) => {
    if ( numberList.length === 3 ){
        if ( numberList[0] >= 2 && numberList[0] <= 50 ){}
        else{
            return Swal.fire('Error', 'number out of range in first position', 'error');
        }
        if ( numberList[1] >= 2 && numberList[1] <= 50 ){}
        else{
            return Swal.fire('Error', 'number out of range in second position', 'error');
        }
        if ( numberList[2] >= 3 && numberList[2] <= 5000 ){}
        else{
            return Swal.fire('Error', 'number out of range in third position', 'error');
        }
    }else{
        return Swal.fire('Error', 'Please type only 3 numbers in first line', 'error');
    }
}