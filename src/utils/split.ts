
const split = (value:string) : Array<string> => {
    const splitSum = ['', ''];
    
    const splitSumTemp = value.split('.')

    if (splitSumTemp.length > 1) {
        splitSum[1] = splitSumTemp[1]
    }

    splitSum[0] = splitSumTemp[0]

    return splitSum;
}

export default split