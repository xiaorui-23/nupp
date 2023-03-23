

import { numberToUppercase } from "../../dist/main"

// 需要打开控制台查看输出结果

// 转大写
console.log(numberToUppercase(179.1, {
    type: 'capital',
}));

// 转汉字
console.log(numberToUppercase(179.1));

// 转金额
console.log(numberToUppercase(179.1, {
    type: 'sum',
}));

// 转金额并不携带单位
console.log(numberToUppercase(179.1, {
    type: 'sum',
    sumCapital: false
}));

