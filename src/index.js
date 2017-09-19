const template = require('babel-template')
const generate = require('babel-generator').default

module.exports = function(babel) {
  const { types: t } = babel;

  function createRawStringFromQuasi(
    strs
  ) {
    let dynamicValueCount = 0;
    const src = strs
      .reduce((arr, str, i) => {
        arr.push(str);
        if (i !== strs.length - 1) {
          dynamicValueCount++;
          arr.push(`{XXX${i}XXX}`);
        }
        return arr;
      }, [])
      .join("")
      .trim();
    return { src, dynamicValueCount };
  }



  return {
    name: "html-transform-for-new-framework", // not required
    inherits: require('babel-plugin-syntax-jsx'),
    visitor: {
      TaggedTemplateExpression(path) {
        let strs = path.node.quasi.quasis.map(
          x => x.value.cooked
        );
        const out = createRawStringFromQuasi(strs)

        const buildJSX = template(`
          (
            ${out.src}
          )
        `, { plugins: ['jsx']})

        let replacements = {}
        path.node.quasi.expressions.forEach((expr, i) => {
          replacements[`XXX${i}XXX`] = expr
        })

        const ast = buildJSX(replacements)
        path.replaceWith(ast)
      }
    }
  };
}
