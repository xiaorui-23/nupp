/**
 * 转金额
 * * integerValue: 整数部分
 * * doubleValue: 浮点数部分
 * * unit: 是否携带单位
 * * sumCapital: 是否转大写
 */
declare const sum: (integerValue: string, doubleValue: string, unit: boolean, sumCapital: boolean) => string;
export default sum;
