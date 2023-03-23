
# nupp

一款由 typescript 编写的 数字转(汉字/大写)的 js 工具库

# 安装

**npm**
```
npm i nupp -s
```

**pnpm**
```
pnpm i nupp -s
```

**yarn**
```
yarn add nupp -s
```

# 仓库地址

- github: [点我前往](https://github.com/xiaorui-23/nupp)


# npm 地址

- npm: [点我前往](https://www.npmjs.com/package/nupp)


# 使用案例

可点击 [此处](https://github.com/xiaorui-23/nupp/example/src/main.jss) 进行查看

# Option

## 属性

| 属性名 | 类型 | 描述 | 默认值 |
|--|--|--|--|
| type | `sum`｜`capital`｜`character` | 类型。`sum`: 金额，若 存在连续多个 0 ，将被忽略，如：`1001 -> 一零一`，注：若 传递的浮点数长度超过 `2` 位，将被忽略并不会返回超过的内容；`capital`: 大写数字，若 传入数值为 浮点数(3.14) ，整数部分和小数部分将以 `','` 分割;  `character`: 汉字，若 传入数值为 浮点数(3.14) ，整数部分和小数部分将以 `','` 分割。 | `character` |
| unit | `boolean` | 当为 `true` 时将携带单位；仅 `type = sum` 时有效，若传递的 数据为 浮点数 将携带 角、分单位 | `true` |
| sumCapital | `boolean` | 开启大写转换，仅 `type = sum` 时有效。`sumCapital = true` 金额将会转成 大写汉字;`sumCapital = false` 金额将会转成 汉字，不会进行大写转换 | `true` |
| maxNumber | `number` | 最大限制 | 999999999999 |
| minNumber | `number` | 最小限制 | 0 |


# 浏览器支持情况

| chrome | edge | firefox | opera | safari |
|--|--|--|--|--|
| 53+ | 79+ | 63+ | 40+ | 10+ |
