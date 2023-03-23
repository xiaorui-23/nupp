
import { numberCapitalMapInfo, numberCharacterMapInfo, angularFractionMapInfo, unitCharacterMapInfo, unitCapitalMapInfo } from "../utils/numberMapInfo"

function _transform (sumString: string, sumCapital:boolean, unitAddState: boolean): string {
    let result = ''

    for (let i = 0, len = sumString.length; i < len; i++){
        const value = +sumString[i]
        const capitalValue = sumCapital ? numberCapitalMapInfo[value] : numberCharacterMapInfo[value]
        const unit = sumCapital ? unitCapitalMapInfo[1][len - 1 - i] : unitCharacterMapInfo[1][len - 1 - i]
        
        if (value === 0 || !unitAddState){
            result += capitalValue
        } else {
            result += (capitalValue + unit)
        }
        
        
    }

    return result
}

/**
 * 转金额
 * * integerValue: 整数部分
 * * doubleValue: 浮点数部分
 * * unit: 是否携带单位
 * * sumCapital: 是否转大写
 */
const sum = (integerValue: string, doubleValue: string, unit: boolean, sumCapital: boolean): string => {
    let result: string = ''

    let resultList = integerValue.replace(/(?=(\d{4})+$)/g, ',').split(',')

    // 循环整数部分
    for (let len = resultList.length - 1, j = len; j >= 0; j--){

        let unitValue: string = (unit ? (sumCapital ? unitCapitalMapInfo[0][j] : unitCharacterMapInfo[0][j]) : '')
        let value: string = _transform (resultList[j], sumCapital, unit )

        if (value.endsWith('零')) {
            value = value.replace(/零/d, '')
        }
        
        result = unitValue + value + result
    }

    result = result.replace(/(.)\1+/g, '$1')

    result += (unit ? (sumCapital ? '圆' : '元') : '')

    if (doubleValue.length <= 0){
        result += '整'
    }
    
    if (doubleValue.length > 2) {
        doubleValue = doubleValue.substring(0, 2)
    }
    // 循环小数部分
    for(let i = 0, len = doubleValue.length; i < len; i++) {
        if(Number(doubleValue[i]) == 0){
            continue
        }


        if(unit && !result.endsWith('零')) {
            result += '零' 
        }

        result += sumCapital ? numberCapitalMapInfo[Number(doubleValue[i])] : numberCharacterMapInfo[Number(doubleValue[i])]
        
        if (unit) {
            result += angularFractionMapInfo[i]
        }
    }

    return result
}

export default sum