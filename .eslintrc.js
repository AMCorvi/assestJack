const AMConfig = require("@amcorvi/eslint-config")

AMConfig.env = Object.assign(AMConfig.env, {
          /* Insert Overriding Eslint env Here */
})

AMConfig.parserOptions = Object.assign(AMConfig.parserOptions, {
          /* Insert Overriding Eslint parserOptions Here */
})

AMConfig.plugins = Object.assign(AMConfig.plugins, {
          /* Insert Overriding Eslint plugins Here */
})

AMConfig.rules = Object.assign(AMConfig.rules, {
          /* Insert Overriding Eslint rules Here */
})
module.export = AMConfig