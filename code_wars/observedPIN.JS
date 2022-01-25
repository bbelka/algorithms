const getPINs = (pin) => {
    const pinArr = pin.split('');
    let digInd = 0;
    const output = new Array;
    while (digInd < pinArr.length) {
        const intPin = new Array;
        console.log(intPin);

        switch (pinArr[digInd]) {
            case "0":
                [0, 8].forEach(e => intPin.push(e.toString()));
                digInd++;
                break;

            case "1":
                [1, 2, 4].forEach(e => intPin.push(e.toString()));
                digInd++;

                break;

            case "2":
                [2, 1, 3, 5].forEach(e => intPin.push(e.toString()));
                digInd++;
                break;

            case "3":
                [3, 2, 6].forEach(e => intPin.push(e.toString()));
                digInd++;
                break;

            case "4":
                [4, 1, 5, 7].forEach(e => intPin.push(e.toString()));
                digInd++;
                break;

            case "5":
                [5, 2, 4, 6, 8].forEach(e => intPin.push(e.toString()));
                digInd++;
                break;

            case "6":
                [6, 3, 5, 9].forEach(e => intPin.push(e.toString()));
                digInd++;
                break;

            case "7":
                [7, 4, 8].forEach(e => intPin.push(e.toString()));
                digInd++;
                break;

            case "8":
                [8, 5, 7, 9].forEach(e => intPin.push(e.toString()));

                digInd++;
                break;

            case "9":
                [9, 6, 8].forEach(e => intPin.push(e.toString()));
                digInd++;
                break;

            default:
                break;
        }
    }
    return output;
};

console.log(getPINs('89'));