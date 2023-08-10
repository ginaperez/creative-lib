"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Disabled = exports.Default = void 0;
var _react = _interopRequireDefault(require("react"));
var _elements = require("../elements");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var _default = {
  title: 'Elements/Radio Button',
  component: _elements.RadioButton,
  parameters: {
    layout: 'centered'
  }
};
exports.default = _default;
var Template = function Template(args) {
  return /*#__PURE__*/_react.default.createElement(_elements.RadioButton, args);
};
var Default = Template.bind({});
exports.Default = Default;
Default.args = {
  name: 'RadioButton',
  speed: 0.4
};
var Disabled = Template.bind({});
exports.Disabled = Disabled;
Disabled.args = {
  name: 'RadioButton',
  disabled: true
};
//# sourceMappingURL=RadioButton.stories.js.map