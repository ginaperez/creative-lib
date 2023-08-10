"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledTooltipContent = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _styledTools = require("styled-tools");
var _templateObject;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var StyledTooltipContent = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    position: relative;\n    overflow: hidden;\n    z-index: 99999;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    border: solid transparent;\n    border-radius: 0.5rem;\n    line-height: 1.5;\n    padding: 1rem;\n    margin: 0 0 0 1rem;\n    width: 15rem;\n    height: 100%;\n    max-height: ", ";\n    color: ", ";\n    background-color: ", ";\n    box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;\n"])), function (props) {
  return props.visible ? "100vh" : "0";
}, (0, _styledTools.theme)('colors.softBlack'), (0, _styledTools.theme)('colors.white'));
exports.StyledTooltipContent = StyledTooltipContent;
//# sourceMappingURL=StyledTooltipContent.js.map