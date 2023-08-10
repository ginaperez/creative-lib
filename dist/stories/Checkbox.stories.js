"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Default = void 0;
var _react = _interopRequireDefault(require("react"));
var _elements = require("../elements/");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var _default = {
  title: 'Elements/Checkbox',
  component: _elements.Checkbox,
  parameters: {
    layout: 'centered'
  }
};
exports.default = _default;
var Template = function Template(args) {
  return /*#__PURE__*/_react.default.createElement(_elements.Checkbox, args);
};
var Default = Template.bind({});
exports.Default = Default;
Default.args = {
  name: 'Checkbox'
};
//# sourceMappingURL=Checkbox.stories.js.map