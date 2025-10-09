
    let arr = [1, 3, 5, 7, 9];


    const sum = (arr) => {

        return arr.reduce((acc, val) => acc + val);
    };


    const squ = (arr) => {
        return arr.map(val => val * val);
    };
    const avg = (arr) => {
        let sum = arr.reduce((acc, val) => acc + val);
        return (sum / arr.length);
    };


    console.log(sum(...arr)); // 25
    console.log(squ(...arr)); // [1,9,25,49,81]
    console.log(sum(arr)); // 25
    console.log(squ(arr)); // [1,9,25,49,81]
    console.log(avg(arr)); // 5
