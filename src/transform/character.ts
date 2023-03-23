
import {numberCharacterMapInfo} from "../utils/numberMapInfo";

/**
 * 转汉字
 */
const character = (integerValue: string, doubleValue: string): string => {
    let result: string = ''

    // 循环整数部分
    for(let i = 0, len = integerValue.length; i < len; i++) {
        result += numberCharacterMapInfo[Number(integerValue[i])]
    }

    // 循环小数部分
    for(let i = 0, len = doubleValue.length; i < len; i++) {
        if (!result.includes(',')){
            result += ','
        }

        result += numberCharacterMapInfo[Number(doubleValue[i])]
    }
    
    return result
}

export default character