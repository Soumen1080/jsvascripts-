let arr = [1,2,3,4,5,6,7,8,9,10];
let n = 5;

function arrElement(arr , n) {

    for(let i = 0 ; i< arr.length ; i++)
        if(arr[i] > n ){
            console.log(arr[i]);
        }
    
}