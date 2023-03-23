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
     * 仅 type = sum 时有效，传递的 浮点数 将携带 角、分单位
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
declare const numberToUppercase: (number: number, option: NumberToUppercaseInterface) => string;
export { numberToUppercase };
