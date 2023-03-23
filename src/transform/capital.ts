

import { numberCapitalMapInfo } from "../utils/numberMapInfo"

/**
 * 转大写
 */
const capital = (integerValue: string, doubleValue: string): string => {
    let result: string = ''

    // 循环整数部分
    for(let i = 0, len = integerValue.length; i < len; i++) {
        result += numberCapitalMapInfo[Number(integerValue[i])]
    }

    // 循环小数部分
    for(let i = 0, len = doubleValue.length; i < len; i++) {
        if (!result.includes(',')){
            result += ','
        }

        result += numberCapitalMapInfo[Number(doubleValue[i])]
    }
    
    return result
}

export default capital