"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledDropdownSelect = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _styledTools = require("styled-tools");
var _templateObject;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var StyledDropdownSelect = _styledComponents.default.select(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    display: flex;\n    appearance: none;\n    border: 0.1rem solid ", ";\n    border-radius: 0.5rem;\n    font-family: ", ";\n    padding: ", ";\n    width: ", "rem;\n    svg {\n        margin-right: 2px;\n    }\n"])), (0, _styledTools.theme)('colors.borderGray'), (0, _styledTools.theme)('fonts.nunito'), function (props) {
  return props.multiple ? '.5rem' : '1rem';
}, function (props) {
  return props.width || 10;
});
exports.StyledDropdownSelect = StyledDropdownSelect;
//# sourceMappingURL=StyledDropdownSelect.js.map