"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledLineBreak = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _styledTools = require("styled-tools");
var _templateObject;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var StyledLineBreak = _styledComponents.default.hr(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    display: flex;\n    color: ", ";\n    width: 29rem;\n"])), (0, _styledTools.theme)('colors.borderGray'));
exports.StyledLineBreak = StyledLineBreak;
//# sourceMappingURL=StyledLineBreak.js.map