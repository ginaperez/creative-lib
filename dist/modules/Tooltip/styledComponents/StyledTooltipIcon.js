"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledTooltipIcon = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _styledTools = require("styled-tools");
var _templateObject;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var StyledTooltipIcon = _styledComponents.default.span(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 2rem;\n    height: 2rem;\n    border: 0.01rem solid ", ";\n    border-radius: 1.1rem;\n    color: ", ";\n    background-color: ", ";\n"])), (0, _styledTools.theme)('colors.borderGray'), (0, _styledTools.theme)('colors.white'), (0, _styledTools.theme)('colors.mediumBlue'));
exports.StyledTooltipIcon = StyledTooltipIcon;
//# sourceMappingURL=StyledTooltipIcon.js.map