const pluginTester = require('babel-plugin-tester')
const plugin = require('../index')

pluginTester({
  plugin: plugin,
  pluginName: 'sitrep',
  snapshot: true,
  babelOptions: {
    babelrc: true,
    filename: __filename
  },
  tests: [
    {
      title: 'basic',
      code: `
        html\`
          <div>
            <h1>Hello</h1>
          </div>
        \`;
      `
    },
    {
      title: 'with expression',
      code: `
        html\`
          <div>
            <h1>\${foo}</h1>
          </div>
        \`;
      `
    }
  ]
})
