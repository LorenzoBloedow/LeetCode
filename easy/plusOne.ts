function plusOne(digits: number[]): number[] {
    let bigInteger: bigint = BigInt(digits.join(''));
    bigInteger = bigInteger + 1n;
    
    let bigIntegerArray: string[] | number[] = bigInteger.toString().split('');
    bigIntegerArray = bigIntegerArray.map(e => parseInt(e));
    return bigIntegerArray;
};
