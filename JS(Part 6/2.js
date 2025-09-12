 let arr = "ajdfkljjfajaaaaajfdsjflkffliasfadf";

 function getUnique(arr){
let ans = "  "
for (let i = 0 ; i < arr.length ; i++){
    let currChar = arr[i];
    if(ans.indexOf(currChar) == -1){
        arr += currChar;
    }
}
 }
 console.log(getUnique(arr));