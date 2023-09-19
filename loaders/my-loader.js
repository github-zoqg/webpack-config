const { getOptions } = require("loader-utils");

module.exports = function (source) {
  console.log(source, getOptions(this), "compiler");
  const options = JSON.stringify(getOptions(this));
  return `
    ${replaceFun.toString()}
    module.exports.replaceFun = replaceFun
    `;
};
function replaceFun(sources, options) {
  return sources;
}
