 let cuntry = ["Australia","Germsny","United states of America"]

 function longCuntry(cuntry){
    
    let ans = cuntry[0];
for(let i = 0 ; i < cuntry.length ; i++)
if(ans.length <= cuntry[i].length){
    ans = cuntry[i];
    
}
return ans;
 }
 console.log(longCuntry(cuntry));