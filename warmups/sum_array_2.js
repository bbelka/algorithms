const sumArray = (arr) => {

    let sum = 0;

    arr.forEach(element => sum += element);
    
    console.log(sum);
    return sum;
}

sumArray([-1, 2, 3])