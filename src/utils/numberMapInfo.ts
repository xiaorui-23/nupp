
/**
 * 大写
 */ 
const numberCapitalMapInfo: {[key: number]: string} = {
    0: '零',
    1: '壹',
    2: '贰',
    3: '叁',
    4: '肆',
    5: '伍',
    6: '陆',
    7: '柒',
    8: '捌',
    9: '玖'
}

/**
 * 汉字
 */ 
const numberCharacterMapInfo: {[key: number]: string} = {
    0: '零',
    1: '一',
    2: '二',
    3: '三',
    4: '四',
    5: '五',
    6: '六',
    7: '七',
    8: '八',
    9: '九',
}

/**
 * 汉字单位
 */ 
const unitCharacterMapInfo: {[key: number]: string | Array<string>} = {
    0: ['', '万', '亿'],
    1: ['', '十', '百', '千'],
    2: '零',
}

/**
 * 大写单位
 */ 
const unitCapitalMapInfo: {[key: number]: string | Array<string>} = {
    0: [ '', '万', '亿'],
    1: ['', '拾', '佰', '仟'],
    2: '零'
}

/**
 * 角分
 */ 
const angularFractionMapInfo: {[key: number]: string} = {
    0: '角',
    1: '分'
}

export {
    numberCapitalMapInfo,
    numberCharacterMapInfo,
    unitCharacterMapInfo,
    unitCapitalMapInfo,
    angularFractionMapInfo
}