function fibonacci(limit) {
    const arrFib = [0, 1]

    for (let i = 2; i <= limit; i++) {
        arrFib.push(arrFib[i-1] + arrFib[i-2]);
    }
    return arrFib
}

const testFib = fibonacci(6);
console.log(testFib)