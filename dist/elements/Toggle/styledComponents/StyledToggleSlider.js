"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledToggleSlider = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _styledTools = require("styled-tools");
var _templateObject;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var StyledToggleSlider = _styledComponents.default.span(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: ", ";\n  transition: ", "s;\n  border-radius: ", "rem;\n  &:before {\n    position: absolute;\n    content: \"\";\n    height: ", "rem;\n    width: 1.7rem;\n    left: ", "rem;\n    bottom: ", "rem;\n    background-color: ", ";\n    transition: ", "s;\n    border-radius: ", ";\n  }\n"])), (0, _styledTools.theme)("colors.borderGray"), function (props) {
  return props.transition || 0.4;
}, function (props) {
  return props.square ? 0 : 3.4;
}, function (props) {
  return props.square ? 1.9 : 1.7;
}, function (props) {
  return props.square ? 0.1 : 0.2;
}, function (props) {
  return props.square ? 0.1 : 0.2;
}, (0, _styledTools.theme)("colors.white"), function (props) {
  return props.transition || 0.4;
}, function (props) {
  return props.square ? 0 : '50%';
});
exports.StyledToggleSlider = StyledToggleSlider;
//# sourceMappingURL=StyledToggleSlider.js.map