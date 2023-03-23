


import capital from "./transform/capital";
import character from "./transform/character";
import sum from "./transform/sum";
import split from "./utils/split";

/**
 * 配置 Interface
*/
interface NumberToUppercaseInterface {
    /**
     * 类型
     * * sum: 金额，若 存在连续多个 0 ，将被忽略，如：1001 -> 101
     * * capital: 转大写，若 传入数值为 浮点数(3.14) ，整数部分和小数部分将以 ',' 分割
     * * character: 汉字，若 传入数值为 浮点数(3.14) ，整数部分和小数部分将以 ',' 分割
     * @default 'character'
    */
    type: 'sum' | 'capital' | 'character';
    /**
     * 单位
     * 
     * 当为 true 时将携带单位；
     * 仅 type = sum 时有效，若传递的 数据为 浮点数 将携带 角、分单位
     *  
     * @default true
    */
    unit: boolean;
    /**
     * 开启大写转换
     * 
     * 仅 type = sum 时有效。
     * * true: 金额将会转成 大写汉字;
     * * false: 金额将会转成 汉字，不会进行大写转换
     *  
     * @default true
    */
    sumCapital: boolean;
    /**
     * 最大限制
     * @default 999999999999
     */
    maxNumber: number;
    /**
     * 最小限制
     * @default 0
     */
    minNumber: number;
    
}

/**
 * 将数字转大写
 */ 
const numberToUppercase = (number: number, option: NumberToUppercaseInterface): string => {
    const type = option?.type ?? 'character',
        unit = option?.unit ?? true,
        sumCapital = option?.sumCapital ?? true,
        minNumber = option?.minNumber ?? 0,
        maxNumber = option?.maxNumber ?? 999999999999

    // 判断是否是整数值/浮点数
    if (!(Number.isInteger(number) || Number.isFinite(number) && number % 1 !== 0)) {
        throw new Error('输入的数字必须是整数或浮点数')
    }

    // 判断数值是否在范围内
    if (number < minNumber || number > maxNumber) {
        throw new Error(`输入的数字必须在 ${number} 到 ${maxNumber} 之间`)
    }

    // 拼接总数据
    let result: string = ''

    // 将数字转字符串
    let transformSum: string = number.toString ()

    const [integerValue, doubleValue] = split(transformSum)
    
    // 类型判断
    switch (type) {
        case 'capital':
            result = capital (integerValue, doubleValue)
            break
        case 'character':
            result = character (integerValue, doubleValue)
            break
        case 'sum':
            result = sum (integerValue, doubleValue, unit, sumCapital)
            break
    }

    
    

    return result.length <= 0 ? transformSum : result
}


export { numberToUppercase }
