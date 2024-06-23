import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import license from 'rollup-plugin-license'

export default [
  {
    input: "src/index.ts",
    output: [
      { file: 'lib/index.js', format: "es", exports: "named", sourcemap: true, }
    ],
    plugins: [
      resolve(),
      typescript(),
      commonjs({ include: ["node_modules/**"] }),
      license({
        thirdParty: {
          output: 'lib/license.txt',
        }
      })
    ]
  },
];
