"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledToggleInput = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _styledTools = require("styled-tools");
var _templateObject;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var StyledToggleInput = _styledComponents.default.input(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    opacity: 0;\n    width: 0;\n    height: 0;\n    &:checked + span {\n        background-color: ", ";\n    }\n    &:focus + span {\n        box-shadow: 0 0 0.1rem ", ";\n    }\n    &:checked + span:before {\n        transform: ", ";\n    }\n"])), function (props) {
  return props.color || props.theme.colors.darkBlue;
}, (0, _styledTools.theme)('colors.darkBlue'), function (props) {
  return props.square ? 'translateX(1.6rem)' : 'translateX(1.4rem)';
});
exports.StyledToggleInput = StyledToggleInput;
//# sourceMappingURL=StyledToggleInput.js.map