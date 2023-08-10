"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledCheckbox = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _styledTools = require("styled-tools");
var _templateObject;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var StyledCheckbox = _styledComponents.default.input(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  width: 1.25rem;\n  height: 1.25rem;\n  border-radius: 25%;\n  vertical-align: middle;\n  border: 0.1rem solid ", ";\n  appearance: none;\n  -webkit-appearance: none;\n  outline: none;\n  cursor: pointer;\n  transition: 0.3s;\n  &:hover {\n      border: 0.15rem solid ", ";\n  }\n  &:checked {\n      appearance: auto;\n      border-radius: 25%;\n      border: 0.1rem solid ", ";\n      background-color: ", ";\n  }\n"])), (0, _styledTools.theme)('colors.borderDarkGray'), (0, _styledTools.theme)('colors.borderDarkGrayHover'), (0, _styledTools.theme)('colors.darkBlue'), (0, _styledTools.theme)('colors.darkBlue'));
exports.StyledCheckbox = StyledCheckbox;
//# sourceMappingURL=StyledCheckbox.js.map