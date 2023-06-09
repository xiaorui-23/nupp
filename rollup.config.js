
import typescript from "rollup-plugin-typescript2";
import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import babel from "rollup-plugin-babel";
import { terser } from "rollup-plugin-terser";


const input = "./src/main.ts";

export default {
    input: input,
    output: [
        {
            dir: "dist",
            format: "es", // es模块导出，支持按需加载
            name: "nupp",
            exports: "named", // 指定导出模式（自动、默认、命名、无）
            preserveModules: true, // 保留模块结构
            preserveModulesRoot: "src", // 将保留的模块放在根级别的此路径下
        }
    ],
    plugins: [
        typescript({
                tsconfig: './tsconfig.json',
                clean: true
        }),
        resolve(),
        commonjs(),
        babel({
            exclude: "node_modules/**",
            runtimeHelpers: true,
        }),
        terser(),
    ],
};
