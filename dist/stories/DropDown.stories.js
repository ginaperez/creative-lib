"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.MultipleSelect = exports.Default = void 0;
var _react = _interopRequireDefault(require("react"));
var _elements = require("../elements");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var _default = {
  title: 'Elements/Drop Down',
  component: _elements.DropDown
};
exports.default = _default;
var Template = function Template(args) {
  return /*#__PURE__*/_react.default.createElement(_elements.DropDown, args);
};
var Default = Template.bind({});
exports.Default = Default;
Default.args = {
  name: 'DropDown',
  labelText: 'Dropdown Label',
  placeholderText: 'Select',
  children: /*#__PURE__*/_react.default.createElement("option", null, "Hello World!")
};
var MultipleSelect = Template.bind({});
exports.MultipleSelect = MultipleSelect;
MultipleSelect.args = {
  name: 'Mutliple',
  labelText: 'Multiple Select Label',
  // placeholderText: 'Select',
  // options: options,
  // value: selectedValue,
  multiple: true
};
//# sourceMappingURL=DropDown.stories.js.map