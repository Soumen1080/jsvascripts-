//Qs2. Write a JavaScript program to get the last n element so fan array.[n can be any positive number].
// For example:for array[7,9,0,-2] and n=3 Print,[9,0,-2]


function Last(arr,n =1  ){

if (!Array.isArray(arr) || arr.length === 0){
    return [];
}
if (n <= 0){
    return[];

}

return arr.slice(-n);




}

console.log(['8','34','5','95','85'] , 3);